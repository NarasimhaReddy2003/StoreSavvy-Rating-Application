import pool from '../config/db.js';

export const addStore = async (storeData) => {
  const { name, address, email, ownerId } = storeData;
  const [result] = await pool.query(
    'INSERT INTO stores (name, address, email, owner_id) VALUES (?, ?, ?, ?)',
    [name, address, email, ownerId]
  );
  return result.insertId;
};

export const getAllStores = async (filters = {}) => {
  const { name, address } = filters;
  let sql = 'SELECT s.*, ROUND(AVG(r.rating), 1) AS average_rating FROM stores s LEFT JOIN ratings r ON s.id = r.store_id WHERE 1=1';
  const params = [];

  if (name) {
    sql += ' AND s.name LIKE ?';
    params.push(`%${name}%`);
  }
  if (address) {
    sql += ' AND s.address LIKE ?';
    params.push(`%${address}%`);
  }

  sql += ' GROUP BY s.id ORDER BY s.name ASC';
  const [rows] = await pool.query(sql, params);
  return rows;
};

export const getStoreById = async (id) => {
  const [rows] = await pool.query(
    `SELECT s.*, ROUND(AVG(r.rating), 1) AS average_rating
     FROM stores s
     LEFT JOIN ratings r ON s.id = r.store_id
     WHERE s.id = ?
     GROUP BY s.id`,
    [id]
  );
  return rows[0];
};

export const deleteStoreById = async (id) => {
  const [result] = await pool.query('DELETE FROM stores WHERE id = ?', [id]);
  return result.affectedRows === 1;
};
