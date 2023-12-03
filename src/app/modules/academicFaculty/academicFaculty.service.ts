import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";


const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {

    const result = await AcademicFaculty.create(payload);
    return result;
}



const findAcademicFacultiesFromDB = async () => {
    const result = await AcademicFaculty.find();
    return result;
}



const findOneAcademicFacultyFromDB = async (semesterId: string) => {
    const result = await AcademicFaculty.findOne({ _id: semesterId });
    return result;
}



const updateOneAcademicFacultyFromDB = async (semesterId: string, updatedInfo: Partial<TAcademicFaculty>) => {

    const result = await AcademicFaculty.findOneAndUpdate({ _id: semesterId }, updatedInfo, { new: true });
    return result;
}

export const AcademicFacultyServices = {
    createAcademicFacultyIntoDB,
    findOneAcademicFacultyFromDB,
    findAcademicFacultiesFromDB,
    updateOneAcademicFacultyFromDB
}