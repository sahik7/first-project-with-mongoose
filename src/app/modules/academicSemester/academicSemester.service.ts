import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid Semester Code");
    }
    const result = await AcademicSemester.create(payload);
    return result;
}



const findAcademicSemesterFromDB = async () => {
    const result = await AcademicSemester.find();
    return result;
}



const findOneAcademicSemesterFromDB = async (semesterId: string) => {
    const result = await AcademicSemester.findOne({ _id: semesterId });
    return result;
}



const updateOneAcademicSemesterFromDB = async (semesterId: string, updatedInfo: Partial<TAcademicSemester>) => {

    if (updatedInfo.name && updatedInfo.code && academicSemesterNameCodeMapper[updatedInfo.name] !== updatedInfo.code) {
        throw new Error("Invalid Semester Code");
    }
    const result = await AcademicSemester.findOneAndUpdate({ _id: semesterId }, updatedInfo, { new: true });
    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    findOneAcademicSemesterFromDB,
    findAcademicSemesterFromDB,
    updateOneAcademicSemesterFromDB
}