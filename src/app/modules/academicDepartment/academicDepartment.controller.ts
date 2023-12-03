import httpStatus from "http-status"
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { AcademicDepartmentServices } from "./academicDepartment.service";



const createAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    console.log(result);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Department is created successfully', data: result })

})


const findAcademicDepartments
    = catchAsync(async (req, res) => {
        const result = await AcademicDepartmentServices.findAcademicDepartmentsFromDB();
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Departments is retrieve successfully', data: result })

    })

const findOneAcademicDepartment
    = catchAsync(async (req, res) => {
        const result = await AcademicDepartmentServices.findOneAcademicDepartmentFromDB(req.params.departmentId);
        console.log(result)
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Department is retrieved successfully', data: result })

    })




const updateOneAcademicDepartment
    = catchAsync(async (req, res) => {
        const result = await AcademicDepartmentServices.updateOneAcademicDepartmentFromDB(req.params.departmentId, req.body);
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Academic Department is updated successfully', data: result })

    })




export const AcademicDepartmentControllers = {
    findOneAcademicDepartment,
    updateOneAcademicDepartment,
    findAcademicDepartments,
    createAcademicDepartment
};
