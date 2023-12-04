import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidationSchema } from './student.validation';

const router = express.Router();

// will call controller function

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.patch('/:studentId', validateRequest(studentValidationSchema.updateStudentSchema), StudentControllers.updateStudent);

export const StudentRoutes = router;
