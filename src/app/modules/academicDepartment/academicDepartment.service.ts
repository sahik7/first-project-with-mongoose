import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";



const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {

    const result = await AcademicDepartment.create(payload);
    return result;
}



const findAcademicDepartmentsFromDB = async () => {
    const result = await AcademicDepartment.find().populate("academicFaculty");
    return result;
}



const findOneAcademicDepartmentFromDB = async (semesterId: string) => {
    const result = await AcademicDepartment.findOne({ _id: semesterId }).populate("academicFaculty");
    return result;
}



const updateOneAcademicDepartmentFromDB = async (semesterId: string, updatedInfo: Partial<TAcademicDepartment>) => {

    const result = await AcademicDepartment.findOneAndUpdate({ _id: semesterId }, updatedInfo, { new: true });
    return result;
}

export const AcademicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    findOneAcademicDepartmentFromDB,
    findAcademicDepartmentsFromDB,
    updateOneAcademicDepartmentFromDB
}