const express = require("express");
const router = express.Router();
const {getProducts,createProduct,updateProduct,deleteProduct} = require("../controllers/productsController");
const validateToken = require("../middleware/validateTokenHandler");
const CreateproductSchema = require("../middleware/validate.schema");


router.use(validateToken)
router.route("/").get(getProducts).post(createProduct)
router.route("/:id").put(updateProduct).delete(deleteProduct)

module.exports = router;
