import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import { academicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post("/create-academic-department",
    //  validateRequest(academicDepartmentValidation.createAcademicDepartmentValidationSchema), 
    AcademicDepartmentControllers.createAcademicDepartment)


router.get('/', AcademicDepartmentControllers.findAcademicDepartments);


router.get('/:departmentId', AcademicDepartmentControllers.findOneAcademicDepartment);


router.patch('/:departmentId', validateRequest(academicDepartmentValidation.updateAcademicDepartmentValidationSchema), AcademicDepartmentControllers.updateOneAcademicDepartment);



export const AcademicDepartmentRoutes = router;