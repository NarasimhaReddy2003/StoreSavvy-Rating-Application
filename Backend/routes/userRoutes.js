// backend/routes/userRoutes.js
import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUserPassword,
  deleteUser,
} from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { roleMiddleware } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

// Admin-only
router.get('/', roleMiddleware('admin'), getAllUsers);
router.get('/:id', roleMiddleware('admin'), getUserById);
router.delete('/:id', roleMiddleware('admin'), deleteUser);

// All roles can update their password (admin/user/owner)
router.put('/:id/password', updateUserPassword);

export default router;
