const User_Roles = require("../models/user_roles");
const asyncHandler = require("../middleware/asyncHandler")

const getUserRoles = asyncHandler(async(req,res)=>{
    const userRoles = await User_Roles.findAll()
    res.status(200).json(userRoles)
})

const createUserRoles = asyncHandler(async(req,res)=>{
    const{role_id,user_id}= req.body
    if(!role_id || !user_id){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userRoles = await User_Roles.create(req.body)
    res.status(200).json(userRoles)
})

const updateUserRoles = asyncHandler(async(req,res)=>{
    const user_roles = await User_Roles.findByPk(req.params.id)
    if(!user_roles){
        res.status(400)
        throw new Error("User_Role not found")
    }
    user_roles.update(req.body)
    res.status(200).json(user_roles)
})

const deleteUserRole = asyncHandler(async(req,res)=>{
    const user_roles = await User_Roles.findByPk(req.params.id)
    if(!user_roles){
        res.status(400)
        throw new Error("User_Role not found")
    }
    user_roles.destroy()
    res.status(200).json({"Message":"Deleted Successfully."})
})


module.exports = {getUserRoles,createUserRoles,updateUserRoles,deleteUserRole}