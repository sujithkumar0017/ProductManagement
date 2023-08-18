const express = require("express")
const validateToken= require("../middleware/validateTokenHandler")

const router = express.Router()
const {getCategory,createCategory,deleteCategory,updateCategory} = require("../controllers/categoryController")

router.use(validateToken)
router.route('/').get(getCategory).post(createCategory)
router.route('/:id').put(updateCategory).delete(deleteCategory)

module.exports=router;