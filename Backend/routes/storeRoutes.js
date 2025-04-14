// backend/routes/storeRoutes.js
import express from 'express';
import {
  createStore,
  getAllStores,
  getStoreById,
  deleteStore,
} from '../controllers/storeController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { roleMiddleware } from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Public + Auth access
router.get('/', authMiddleware, getAllStores);
router.get('/:id', authMiddleware, getStoreById);

// Admin-only
router.post('/', authMiddleware, roleMiddleware('admin'), createStore);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteStore);

export default router;
