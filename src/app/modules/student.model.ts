import { Schema, model, connect } from 'mongoose';
import { Guardian, Student, localGuardian, userName } from './student/student.interface';


const userNameSchema = new Schema<userName>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
})

const guardianSchema = new Schema<Guardian>(
    {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherContact: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
        motherContact: { type: String, required: true },
    }
)

const localGuardianSchema = new Schema<localGuardian>({

    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true }

})


// creating schema
const studentSchema = new Schema<Student>({
    id: { type: String },
    name: userNameSchema,
    gender: ["male", "female"],
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    emergencyNumber: { type: String, required: true },
    bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-"],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: { type: String },
    isActive: ["active", "blocked"]

})


// creating the model
export const StudentModel = model<Student>("Student", studentSchema)

