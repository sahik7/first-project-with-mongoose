import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { studentJoiSchema } from './student.validation';


const createStudent = async (req: Request, res: Response) => {
  try {



    const student = req.body.student;
    const { error } = studentJoiSchema.validate(student)

    // will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(student);

    if (error) {
      res
        .status(500)
        .json({
          success: false,
          message: error.message || 'something went wrong',
          error: error.details

        });
    }


    // send response
    res
      .status(200)
      .json({
        success: true,
        message: 'Student is created succesfully',
        data: result,
      });
  } catch (err) {

  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res
      .status(200)
      .json({
        success: true,
        message: 'Students are retrieved successfully',
        data: result,
      });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res
      .status(200)
      .json({
        success: true,
        message: 'Student is retrieved successfully',
        data: result,
      });
  } catch (error) {
    console.log(error)
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
