// backend/controllers/ratingController.js
import * as RatingModel from '../models/RatingModel.js';
import { ratingSchema } from '../validations/ratingValidation.js';
import pool from '../config/db.js';

export const submitRating = async (req, res) => {
  try {
    const { error } = ratingSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const userId = req.user.id;
    const { storeId, rating } = req.body;

    const existing = await RatingModel.checkUserRatedStore(userId, storeId);
    if (existing) {
      return res.status(400).json({ message: 'You have already rated this store.' });
    }

    await RatingModel.addRating(userId, storeId, rating);
    res.status(201).json({ message: 'Rating submitted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const updateRating = async (req, res) => {
  try {
    const { error } = ratingSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const userId = req.user.id;
    const storeId = req.params.storeId;
    const { rating } = req.body;

    const existing = await RatingModel.checkUserRatedStore(userId, storeId);
    if (!existing) {
      return res.status(404).json({ message: 'Rating not found. Submit a rating first.' });
    }

    await RatingModel.updateRating(userId, storeId, rating);
    res.json({ message: 'Rating updated successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getStoreRatings = async (req, res) => {
  try {
    const storeId = req.params.storeId;

    // Verify ownership
    const [store] = await pool.query('SELECT owner_id FROM stores WHERE id = ?', [storeId]);
    if (!store[0]) return res.status(404).json({ message: 'Store not found' });

    if (req.user.role !== 'admin' && req.user.id !== store[0].owner_id) {
      return res.status(403).json({ message: 'Access denied: Not the store owner.' });
    }

    const ratings = await RatingModel.getRatingsByStore(storeId);
    const avg = await RatingModel.calculateAverageRating(storeId);

    res.json({ ratings, averageRating: parseFloat(avg.toFixed(2)) });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
