
const Joi = require('joi');

const CreateproductSchema = Joi.object({
    product_name: Joi.string().required(),
    category_id: Joi.number().integer().required(),
    price: Joi.number().positive().required(),
    image: Joi.string().uri().required(),
    description: Joi.string().required(),
}); 
module.exports = CreateproductSchema


