import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post("/create-academic-semester", validateRequest(AcademicSemesterValidations.createAcademicSemesterValidationSchema), AcademicSemesterControllers.createAcademicSemester)


router.get('/', AcademicSemesterControllers.findAcademicSemester);


router.get('/:semesterId', AcademicSemesterControllers.findOneAcademicSemester);


router.patch('/:semesterId', validateRequest(AcademicSemesterValidations.updateAcademicSemesterValidationSchema), AcademicSemesterControllers.updateOneAcademicSemester);



export const AcademicSemesterRoutes = router;