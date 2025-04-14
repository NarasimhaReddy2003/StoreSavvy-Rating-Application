import express from 'express';
import { login , register} from '../controllers/authController.js';
import { validate } from '../middlewares/validate.js';
import { registerSchema , loginSchema } from '../validations/authValidation.js';


const router = express.Router();

router.post('/login', validate(loginSchema), login);   
router.post('/register', validate(registerSchema), register);  
  

export default router;
