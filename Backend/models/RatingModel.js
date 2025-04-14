import pool from '../config/db.js';

export const submitRating = async (userId, storeId, rating) => {
  const [existing] = await pool.query('SELECT * FROM ratings WHERE user_id = ? AND store_id = ?', [userId, storeId]);
  if (existing.length > 0) return null;

  const [result] = await pool.query('INSERT INTO ratings (user_id, store_id, rating) VALUES (?, ?, ?)', [userId, storeId, rating]);
  return result.insertId;
};

export const updateRating = async (userId, storeId, rating) => {
  const [result] = await pool.query(
    'UPDATE ratings SET rating = ? WHERE user_id = ? AND store_id = ?',
    [rating, userId, storeId]
  );
  return result.affectedRows === 1;
};

export const getRatingsForStore = async (storeId) => {
  const [rows] = await pool.query(
    `SELECT u.id, u.name, r.rating
     FROM ratings r
     JOIN users u ON r.user_id = u.id
     WHERE r.store_id = ?`,
    [storeId]
  );
  return rows;
};
