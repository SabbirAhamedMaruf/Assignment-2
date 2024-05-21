import Joi from "joi";
const VariantsSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});
const InventorySchema = Joi.object({
  quantity: Joi.number().required(),
  inStock: Joi.boolean().required(),
});
export const JoiValidatorProductSchema = Joi.object({
  name: Joi.string().max(20).required(),
  description: Joi.string().max(200).required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array().items(VariantsSchema).required(),
  inventory: InventorySchema.required(),
});
