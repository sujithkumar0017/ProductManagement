const express = require("express")
const router = express.Router()
const {getUserRoles,createUserRoles,updateUserRoles,deleteUserRole}= require('../controllers/userRolesController')

router.route("/").get(getUserRoles).post(createUserRoles)

router.route('/:id').put(updateUserRoles).delete(deleteUserRole)

module.exports = router;