import Joi from 'joi';

export const variantSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

export const inventorySchema = Joi.object({
  quantity: Joi.number().min(0).required(),
  inStock: Joi.boolean().required(),
});

export const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array().items(variantSchema).required(),
  inventory: inventorySchema.required(),
});
