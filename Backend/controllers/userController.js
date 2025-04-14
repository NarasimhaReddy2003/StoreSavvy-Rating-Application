// backend/controllers/userController.js
import * as UserModel from '../models/UserModel.js';
import { hashPassword } from '../utils/hashPassword.js';
import { updatePasswordSchema } from '../validations/userValidation.js';

export const getAllUsers = async (req, res) => {
  try {
    const {
      filterClause,
      orderByClause,
      limitClause,
      values,
      page,
      limit
    } = buildQueryParams({
      query: req.query,
      sortableFields: ['name', 'email', 'role'],
      filterableFields: ['name', 'email', 'address', 'role']
    });

    const [rows] = await db.execute(
      `SELECT id, name, email, address, role FROM users ${filterClause} ${orderByClause} ${limitClause}`,
      values
    );

    const [[{ total }]] = await db.execute(
      `SELECT COUNT(*) as total FROM users ${filterClause}`,
      values
    );

    res.json({
      data: rows,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.getUserById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.role === 'owner') {
      const avgRating = await UserModel.getAverageRatingByOwner(id);
      user.avgRating = parseFloat(avgRating.toFixed(2));
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const updateUserPassword = async (req, res) => {
  try {
    const id = req.params.id;
    const { error } = updatePasswordSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const hashed = await hashPassword(req.body.password);
    await UserModel.updatePassword(id, hashed);

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await UserModel.deleteUserById(id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
