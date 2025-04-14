import Joi from 'joi';

export const storeSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  address: Joi.string().max(400).required(),
  ownerId: Joi.number().optional() // Optional assignment of owner
});
