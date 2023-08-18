const express = require("express")
const {createUser,getUsers,deleteUser,updateUser} = require("../controllers/userControllers")
const router = express.Router()
const validateToken = require("../middleware/validateTokenHandler")

router.use(validateToken)
router.route('/').get(getUsers).post(createUser)
router.route('/:id').put(updateUser).delete(deleteUser)


module.exports = router;


