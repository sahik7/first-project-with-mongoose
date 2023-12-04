import { ErrorRequestHandler } from "express";
import { ZodError, ZodIssue } from "zod";
import { TErrorSources } from "../interface/error";
import config from "../config";
import handleZodError from "../errors/HandleZodError";
import handleValidationError from "../errors/HandleValidationError";
import handleCastError from "../errors/handleCastError";

const globalErrorHandler: ErrorRequestHandler = (err: any, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "something went wrong!";

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


    return res.status(statusCode).json({ success: false, message, errorSources, stack: config.NODE_ENV === "development" ? err?.stack : null });
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