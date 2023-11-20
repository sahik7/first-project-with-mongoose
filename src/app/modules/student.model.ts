import { Schema, model } from 'mongoose';
import validator from 'validator';
import { Guardian, Student, localGuardian, userName } from './student/student.interface';

const userNameSchema = new Schema<userName>({
  firstName: {
    type: String, required: [true, "First name is required"], trim: true, maxLength: [20, "First Name can not be more than 20 Max Allowed length is 20"], validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1); // Sahik
        return firstNameStr === value;
      },
      message: "{VALUE} is not in capitalize format"
    },
    lastName: { type: String, required: [true, "Last name is required"], validate: { validator: (value: string) => validator.isAlpha(value), message: "{VALUE} is not valid" } },
  }
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: { type: String, required: [true, "Father's occupation is required"] },
  fatherContact: { type: String, required: [true, "Father's contact number is required"] },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: { type: String, required: [true, "Mother's occupation is required"] },
  motherContact: { type: String, required: [true, "Mother's contact number is required"] },
});

const localGuardianSchema = new Schema<localGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  occupation: { type: String, required: [true, "Local guardian's occupation is required"] },
  contactNo: { type: String, required: [true, "Local guardian's contact number is required"] },
  address: { type: String, required: [true, "Local guardian's address is required"] },
});

// creating schema
const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, "Student ID is required"] },
  name: { type: userNameSchema, required: [true, "Student name is required"] },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "others"],
      message: "The gender can only be one of the following: 'male', 'female', 'others'",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, "Email is required"], unique: true, validate: { validator: (value: string) => validator.isEmail(value) } },
  contactNumber: { type: String, required: [true, "Contact number is required"] },
  emergencyNumber: { type: String, required: [true, "Emergency contact number is required"] },
  bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'], message: "Invalid blood group" },
  presentAddress: { type: String, required: [true, "Present address is required"] },
  permanentAddress: { type: String, required: [true, "Permanent address is required"] },
  guardian: { type: guardianSchema, required: [true, "Guardian information is required"] },
  localGuardian: { type: localGuardianSchema, required: [true, "Local guardian information is required"] },
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'blocked'], required: [true, "Account status is required"], default: "active" },
});

// creating the model
export const StudentModel = model<Student>('Student', studentSchema);
