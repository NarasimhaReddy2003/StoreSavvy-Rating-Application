import pool from '../config/db.js';

export const getAllUsers = async (filters = {}) => {
  const { name, email, address, role } = filters;
  let sql = `SELECT id, name, email, address, role FROM users WHERE 1=1`;
  const params = [];

  if (name) {
    sql += ' AND name LIKE ?';
    params.push(`%${name}%`);
  }
  if (email) {
    sql += ' AND email LIKE ?';
    params.push(`%${email}%`);
  }
  if (address) {
    sql += ' AND address LIKE ?';
    params.push(`%${address}%`);
  }
  if (role) {
    sql += ' AND role = ?';
    params.push(role);
  }

  sql += ' ORDER BY name ASC';
  const [rows] = await pool.query(sql, params);
  return rows;
};

export const getUserById = async (id) => {
  const [rows] = await pool.query('SELECT id, name, email, address, role FROM users WHERE id = ?', [id]);
  return rows[0];
};

export const updatePassword = async (id, hashedPassword) => {
  const [result] = await pool.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, id]);
  return result.affectedRows === 1;
};

export const deleteUserById = async (id) => {
  const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
  return result.affectedRows === 1;
};
