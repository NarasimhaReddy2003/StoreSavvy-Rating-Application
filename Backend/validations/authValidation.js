import Joi from 'joi';

export const registerSchema = Joi.object({
  name: Joi.string()
    .min(20)
    .max(60)
    .required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 20 characters',
      'string.max': 'Name must be at most 60 characters'
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Email must be valid',
      'string.empty': 'Email is required'
    }),

  address: Joi.string()
    .max(400)
    .allow('')
    .messages({
      'string.max': 'Address must be at most 400 characters'
    }),

  password: Joi.string()
    .pattern(new RegExp('^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=[\\]{};:\'",.<>/?]).{8,16}$'))
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.pattern.base': 'Password must be 8–16 characters, include at least 1 uppercase letter and 1 special character'
    }),
});


export const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be valid'
    }),

  password: Joi.string()
    .required()
    .messages({
      'string.empty': 'Password is required'
    })
});
