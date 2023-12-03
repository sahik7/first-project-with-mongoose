import { z } from "zod";

// Creating a schema validation using Zod
const userNameZodSchema = z.object({
    firstName: z.string()
        .min(1)
        .max(20)
        .regex(/^[A-Z][a-z]*$/, { message: "First name must be in capitalize format" })
        .refine(data => data.trim() === data, { message: "First name must not start or end with whitespace" }),
    lastName: z.string(),
});

const guardianZodSchema = z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherContact: z.string(),
    motherName: z.string(),
    motherOccupation: z.string(),
    motherContact: z.string(),
});

const localGuardianZodSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
});

const studentZodSchema = z.object({
    body: z.object({
        password: z.string().max(20),
        student: z.object({
            name: userNameZodSchema,
            gender: z.enum(["male", "female", "others"]),
            dateOfBirth: z.string().optional(),
            email: z.string().email(),
            contactNumber: z.string(),
            emergencyNumber: z.string(),
            bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-"]),
            presentAddress: z.string(),
            permanentAddress: z.string(),
            guardian: guardianZodSchema,
            localGuardian: localGuardianZodSchema,
            profileImg: z.string().optional(),
            admissionSemester: z.string(),
            academicDepartment: z.string().optional()

        })
    })

})

export const studentValidationSchema = {
    studentZodSchema
}
