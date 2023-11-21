import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (student: TStudent) => {
  // built static method
  if (await Student.isUserExists(student.id)) {
    throw new Error(`User already exists!`)
  }
  const result = await Student.create(student);
  // return result;

  // built in instance method
  // const student1 = new Student(student);

  // if (await student1.isUserExists(student.id)) {
  //   console.log(student.id)
  //   throw new Error(`User already exists!`)
  // }

  // const result = await student1.save()
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
