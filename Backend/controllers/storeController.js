// backend/controllers/storeController.js
import * as StoreModel from '../models/StoreModel.js';
import { storeSchema } from '../validations/storeValidation.js';

export const createStore = async (req, res) => {
  try {
    const { error } = storeSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const storeId = await StoreModel.createStore(req.body);
    res.status(201).json({ message: 'Store created successfully', storeId });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getAllStores = async (req, res) => {
  try {
    const { name, address } = req.query;
    const stores = await StoreModel.getAllStores({ name, address });
    res.json(stores);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getStoreById = async (req, res) => {
  try {
    const store = await StoreModel.getStoreById(req.params.id);
    if (!store) return res.status(404).json({ message: 'Store not found' });
    res.json(store);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const deleteStore = async (req, res) => {
  try {
    await StoreModel.deleteStore(req.params.id);
    res.json({ message: 'Store deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
