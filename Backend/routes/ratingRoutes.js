// backend/routes/ratingRoutes.js
import express from 'express';
import {
  submitRating,
  updateRating,
  getStoreRatings,
} from '../controllers/ratingController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', submitRating); // Normal user
router.put('/:storeId', updateRating); // Normal user
router.get('/:storeId', getStoreRatings); // Store owner or admin

export default router;
