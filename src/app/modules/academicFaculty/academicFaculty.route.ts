import express from 'express';
import { academicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post("/create-academic-faculty", validateRequest(academicFacultyValidation.createAcademicFacultyValidationSchema), AcademicFacultyControllers.createAcademicFaculty)


router.get('/', AcademicFacultyControllers.findAcademicFaculties);


router.get('/:facultyId', AcademicFacultyControllers.findOneAcademicFaculty);


router.patch('/:facultyId', validateRequest(academicFacultyValidation.updateAcademicFacultyValidationSchema), AcademicFacultyControllers.updateOneAcademicFaculty);



export const AcademicFacultyRoutes = router;