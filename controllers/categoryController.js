const validateToken = require("../middleware/validateTokenHandler")
const Category = require("../models/category")
const asyncHandler = require("../middleware/asyncHandler")
const getCategory = asyncHandler(async(req,res)=>{
    const category = await Category.findAll()
    res.json(category)
})

const createCategory = asyncHandler(async(req,res)=>{
    const{category_name} = req.body;
    if(!category_name){
        res.status(400)
        throw new Error("All fields are required")
    }
    const createCategory = await Category.create({
        ...req.body,
        user_id:req.user.id
})
    res.json(createCategory)
})

const updateCategory = asyncHandler(async(req,res)=>{
    const category = await Category.findByPk(req.params.id)
    if(!category){
        res.status(400)
        throw new error("category not found")
    }
    await category.update(req.body)
    res.json(category)
})

const deleteCategory = asyncHandler(async(req,res)=>{
    const category = await Category.findByPk(req.params.id)
    if(!category){
        res.status(400)
        throw new error("category not found")
    }
    await category.destroy()
    res.json(category)
})


module.exports= {getCategory,createCategory,deleteCategory,updateCategory}



