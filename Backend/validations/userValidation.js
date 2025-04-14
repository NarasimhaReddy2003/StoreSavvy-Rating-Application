import Joi from 'joi';

export const passwordUpdateSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(new RegExp('^(?=.*[A-Z])(?=.*[!@#$%^&*])'))
    .required()
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase letter and one special character.',
    }),
  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'Passwords do not match.' })
});
