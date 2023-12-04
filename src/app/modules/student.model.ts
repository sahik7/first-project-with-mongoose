import { Schema, model } from 'mongoose';
import { TGuardian, TStudent, TLocalGuardian, TUserName, StudentModel } from './student/student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxLength: [20, 'Name can not be more than 20 characters'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxLength: [20, 'Name can not be more than 20 characters'],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: { type: String, required: [true, "Father's occupation is required"] },
  fatherContactNo: { type: String, required: [true, "Father's contact number is required"] },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: { type: String, required: [true, "Mother's occupation is required"] },
  motherContactNo: { type: String, required: [true, "Mother's contact number is required"] },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  occupation: { type: String, required: [true, "Local guardian's occupation is required"] },
  contactNo: { type: String, required: [true, "Local guardian's contact number is required"] },
  address: { type: String, required: [true, "Local guardian's address is required"] },
});

// creating schema
const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: [true, 'ID is required'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: Date },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNo: { type: String, required: [true, 'Contact number is required'] },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
  },
  profileImg: { type: String },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicDepartment',
  }
});

// pre save middleware / hook will work on create(), save()
studentSchema.pre("save", function () {
  console.log(this, "pre hook : we  saved our data")
})

// post save middleware / hook
studentSchema.post("save", function () {
  console.log(this, "post hook : we will save the data")
})






// creating a custom static method

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id })
  return existingUser;
}




// creating a custom instance method
// studentSchema.methods.isUserExists = async function (id: String) {
//   const existingUser = await Student.findOne({ id })
//   return existingUser;
// }

// creating the model
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
