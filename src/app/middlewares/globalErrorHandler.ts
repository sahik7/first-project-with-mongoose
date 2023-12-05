import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { TErrorSources } from "../interface/error";
import config from "../config";
import handleZodError from "../errors/HandleZodError";
import handleValidationError from "../errors/HandleValidationError";
import handleCastError from "../errors/handleCastError";
import handleDuplicateError from "../errors/handleDuplicateError";
import AppError from "../errors/AppError";

const globalErrorHandler: ErrorRequestHandler = (err: any, req, res, next) => {
    let statusCode = 500;
    let message = "something went wrong!";

    let errorSources: TErrorSources = [{
        path: "",
        message: "something went wrong!"
    }]




    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err)
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources
    } else if (err?.name === "ValidationError") {
        const simplifiedError = handleValidationError(err)
        statusCode = simplifiedError?.statusCode
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources
    } else if (err?.name === "CastError") {
        const simplifiedError = handleCastError(err)
        statusCode = simplifiedError?.statusCode
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources
    }
    else if (err?.code === 11000) {
        const simplifiedError = handleDuplicateError(err)
        statusCode = simplifiedError?.statusCode
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources
    }
    else if (err instanceof AppError) {
        const simplifiedError = handleDuplicateError(err)
        statusCode = simplifiedError?.statusCode
        message = simplifiedError?.message;
        errorSources = [{
            path: "",
            message: err?.message
        }]
    }


    return res.status(statusCode).json({ success: false, message, errorSources, err, stack: config.NODE_ENV === "development" ? err?.stack : null });
}

export default globalErrorHandler;


// pattern
/*
success
message
errorSources:[
    path:"",
    message:""
]
stack
*/