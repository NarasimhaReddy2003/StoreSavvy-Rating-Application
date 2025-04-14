import express from 'express';
import { getDashboardStats } from '../controllers/adminController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/dashboard', authMiddleware, roleMiddleware('admin'), getDashboardStats);

export default router;
