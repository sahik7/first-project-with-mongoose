import httpStatus from "http-status"
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from "./academicSemester.service";



const createAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body);
    console.log(result);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Semester is created successfully', data: result })

})


const findAcademicSemester
    = catchAsync(async (req, res) => {
        const result = await AcademicSemesterServices.findAcademicSemesterFromDB();
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Semester is retrieve successfully', data: result })

    })

const findOneAcademicSemester
    = catchAsync(async (req, res) => {
        const result = await AcademicSemesterServices.findOneAcademicSemesterFromDB(req.params.semesterId);
        console.log(result)
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Semester is retrieved successfully', data: result })

    })




const updateOneAcademicSemester
    = catchAsync(async (req, res) => {
        const result = await AcademicSemesterServices.updateOneAcademicSemesterFromDB(req.params.semesterId, req.body);
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Semester is updated successfully', data: result })

    })




export const AcademicSemesterControllers = {
    createAcademicSemester,
    findAcademicSemester,
    findOneAcademicSemester,
    updateOneAcademicSemester
};
