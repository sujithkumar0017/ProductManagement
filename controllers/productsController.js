
const Product = require("../models/products");
const asyncHandler = require("../middleware/asyncHandler")

const getProducts = asyncHandler(async(req,res)=>{
  const products = await Product.findAll()
  res.status(200).json(products)
})

const createProduct = asyncHandler(async (req, res,next) => {
    // try {
    //     const { product_name, category_id, price, image, description } = req.body
    //     console.log(req.body)
    //     if (!product_name || !category_id || !price || !image || !description) {
    //         res.status(400)
    //         throw new Error("All fields are mandatory")
    //     }
    //     const products = await Product.create({
    //         ...req.body,
    //         user_id: req.user.id

    //     })
    //     res.status(200).json(products)
    // } catch (error) {
    //     next(error);
    // }
    const { product_name, category_id, price, image, description } = req.body
        console.log(req.body)
        if (!product_name || !category_id || !price || !image || !description) {
            res.status(400)
            throw new Error("All fields are mandatory")
        }
        const products = await Product.create({
            ...req.body,
            user_id: req.user.id

        })
        res.status(200).json(products)
})


const updateProduct = asyncHandler(async(req,res)=>{
//     console.log(req.params.id)
//     const product_id = req.params.id;
//     const products = await Product.findByPk(req.params.id
//          // Replace with the actual primary key value
//       )
      
//     if(!products){
//         res.status(400)
//         throw new Error("product not found")
//     }
//     await Product.update({...req.body}, {where:{req.params.id}})
//     res.status(200).json(products)
// }


        // const product_id = req.params.id;
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await product.update(req.body);

        return res.status(200).json(product);
    })


const deleteProduct = asyncHandler(async(req,res)=>{
    const products = await Product.findByPk(req.params.id)
    if(!products){
        res.status(400)
        throw new Error("product not found")
    }
    await Product.destroy({
        where: {
            product_id: req.params.id
        }
    });
    res.status(200).json(products)
})

module.exports = {getProducts,createProduct,updateProduct,deleteProduct}