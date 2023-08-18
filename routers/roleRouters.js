const express = require("express")
const router = express.Router()
const {createRoles,getRoles,updateRoles,deleteRoles} = require("../controllers/rolesController")

router.route("/").get(getRoles).post(createRoles)


router.route("/:id").put(updateRoles).delete(deleteRoles)


module.exports =  router;