import httpStatus from "http-status"
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { AcademicFacultyServices } from "./academicFaculty.service";



const createAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body);
    console.log(result);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Faculty is created successfully', data: result })

})


const findAcademicFaculties
    = catchAsync(async (req, res) => {
        const result = await AcademicFacultyServices.findAcademicFacultiesFromDB();
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Faculty is retrieve successfully', data: result })

    })

const findOneAcademicFaculty
    = catchAsync(async (req, res) => {
        const result = await AcademicFacultyServices.findOneAcademicFacultyFromDB(req.params.facultyId);
        console.log(result)
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Faculty is retrieved successfully', data: result })

    })




const updateOneAcademicFaculty
    = catchAsync(async (req, res) => {
        const result = await AcademicFacultyServices.updateOneAcademicFacultyFromDB(req.params.facultyId, req.body);
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Faculty is updated successfully', data: result })

    })




export const AcademicFacultyControllers = {
    findOneAcademicFaculty,
    updateOneAcademicFaculty,
    findAcademicFaculties,
    createAcademicFaculty
};
