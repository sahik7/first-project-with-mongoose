import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync";


const createStudent = catchAsync(async (req, res) => {

    const { password, student } = req.body;

    // will call service function to send this data
    const result = await UserServices.createStudentIntoDB(password, student);
    console.log(result)
    res.status(200).json({
        success: true,
        message: 'Student is created successfully',
        data: result,
    });
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Student created successfully', data: result })
})

export const UserControllers = {
    createStudent
}