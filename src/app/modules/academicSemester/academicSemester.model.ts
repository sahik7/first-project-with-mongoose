import { Schema, model } from 'mongoose';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';


const academicSemesterSchema = new Schema<TAcademicSemester>({
    name: { type: String, required: true, enum: AcademicSemesterName },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: AcademicSemesterCode },
    startMonth: { type: String, enum: Months, required: true },
    endMonth: { type: String, enum: Months, required: true }

},
    {
        timestamps: true,
    },);



academicSemesterSchema.pre("save", async function (next) {
    const isSemesterExists = await AcademicSemester.findOne({ name: this.name, year: this.year })
    if (isSemesterExists) {
        throw new AppError(httpStatus.NOT_FOUND, "this semester is already exists!")
    }
    next()
})




export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema);
