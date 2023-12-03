import { z } from "zod";
const createAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({ invalid_type_error: "Password must be string", required_error: "Password must be string" }),
        academicFaculty: z.string({
            invalid_type_error: "Academic Faculty must be a string",
            required_error: "Faculty is required"
        }),
    })
})


const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({ invalid_type_error: "Password must be string", required_error: "Password must be string" }).optional(),
        academicFaculty: z.string({
            invalid_type_error: "Academic Faculty must be a string",
            required_error: "Faculty is required"
        }).optional(),
    })
})

export const academicDepartmentValidation = {
    createAcademicDepartmentValidationSchema, updateAcademicDepartmentValidationSchema
}