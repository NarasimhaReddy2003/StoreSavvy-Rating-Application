import Joi from 'joi';

export const ratingSchema = Joi.object({
  storeId: Joi.number().required(),
  rating: Joi.number().integer().min(1).max(5).required()
});
