import Joi from "joi"



// creating a schema validation using joi
const userNameJoiSchema = Joi.object({
    firstName: Joi.string()
        .trim()
        .max(20)
        .pattern(/^[A-Z][a-z]*$/, { name: 'capitalized' })
        .required()
        .messages({
            'string.base': 'First name must be a string',
            'string.empty': 'First name is required',
            'string.max': 'First name cannot be more than 20 characters',
            'string.pattern.name': 'First name must be in capitalize format',
            'any.required': 'First name is required',
        }),
    lastName: Joi.string()
        .required().messages({
            'string.base': 'Last name must be a string',
            'string.empty': 'Last name is required',
            'any.required': 'Last name is required',
        }),
});

const guardianJoiSchema = Joi.object({
    fatherName: Joi.string().required().messages({
        'string.base': "Father's name must be a string",
        'string.empty': "Father's name is required",
        'any.required': "Father's name is required",
    }),
    fatherOccupation: Joi.string().required().messages({
        'string.base': "Father's occupation must be a string",
        'string.empty': "Father's occupation is required",
        'any.required': "Father's occupation is required",
    }),
    fatherContact: Joi.string().required().messages({
        'string.base': "Father's contact number must be a string",
        'string.empty': "Father's contact number is required",
        'any.required': "Father's contact number is required",
    }),
    motherName: Joi.string().required().messages({
        'string.base': "Mother's name must be a string",
        'string.empty': "Mother's name is required",
        'any.required': "Mother's name is required",
    }),
    motherOccupation: Joi.string().required().messages({
        'string.base': "Mother's occupation must be a string",
        'string.empty': "Mother's occupation is required",
        'any.required': "Mother's occupation is required",
    }),
    motherContact: Joi.string().required().messages({
        'string.base': "Mother's contact number must be a string",
        'string.empty': "Mother's contact number is required",
        'any.required': "Mother's contact number is required",
    }),
});

const localGuardianJoiSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.base': "Local guardian's name must be a string",
        'string.empty': "Local guardian's name is required",
        'any.required': "Local guardian's name is required",
    }),
    occupation: Joi.string().required().messages({
        'string.base': "Local guardian's occupation must be a string",
        'string.empty': "Local guardian's occupation is required",
        'any.required': "Local guardian's occupation is required",
    }),
    contactNo: Joi.string().required().messages({
        'string.base': "Local guardian's contact number must be a string",
        'string.empty': "Local guardian's contact number is required",
        'any.required': "Local guardian's contact number is required",
    }),
    address: Joi.string().required().messages({
        'string.base': "Local guardian's address must be a string",
        'string.empty': "Local guardian's address is required",
        'any.required': "Local guardian's address is required",
    }),
});

export const studentJoiSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'Student ID must be a string',
        'string.empty': 'Student ID is required',
        'any.required': 'Student ID is required',
    }),
    name: userNameJoiSchema.required().messages({
        'any.required': 'Student name is required',
    }),
    gender: Joi.string()
        .valid('male', 'female', 'others')
        .required()
        .messages({
            'any.only': 'Gender must be one of the following: "male", "female", "others"',
            'any.required': 'Gender is required',
        }),
    dateOfBirth: Joi.string(),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'Email must be a string',
            'string.empty': 'Email is required',
            'string.email': 'Email must be a valid email address',
            'any.required': 'Email is required',
        }),
    contactNumber: Joi.string().required().messages({
        'string.base': 'Contact number must be a string',
        'string.empty': 'Contact number is required',
        'any.required': 'Contact number is required',
    }),
    emergencyNumber: Joi.string().required().messages({
        'string.base': 'Emergency contact number must be a string',
        'string.empty': 'Emergency contact number is required',
        'any.required': 'Emergency contact number is required',
    }),
    bloodGroup: Joi.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-')
        .messages({
            'any.only': 'Invalid blood group',
        }),
    presentAddress: Joi.string().required().messages({
        'string.base': 'Present address must be a string',
        'string.empty': 'Present address is required',
        'any.required': 'Present address is required',
    }),
    permanentAddress: Joi.string().required().messages({
        'string.base': 'Permanent address must be a string',
        'string.empty': 'Permanent address is required',
        'any.required': 'Permanent address is required',
    }),
    guardian: guardianJoiSchema.required().messages({
        'any.required': 'Guardian information is required',
    }),
    localGuardian: localGuardianJoiSchema.required().messages({
        'any.required': 'Local guardian information is required',
    }),
    profileImg: Joi.string(),
    isActive: Joi.string()
        .valid('active', 'blocked')
        .required()
        .default('active')
        .messages({
            'any.only': 'Account status must be one of the following: "active", "blocked"',
            'any.required': 'Account status is required',
        }),
});