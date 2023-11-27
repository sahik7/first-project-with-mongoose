import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (student: TStudent) => {
  if (await Student.isUserExists(student.id)) {
    throw new Error(`User already exists!`)
  }
  const result = await Student.create(student);
  return result
};



const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};





const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
