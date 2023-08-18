const Roles = require("../models/roles")
const asyncHandler = require("../middleware/asyncHandler")

const getRoles = asyncHandler(async(req,res)=>{
    const roles = await Roles.findAll()
    res.status(200).json(roles)
})

const createRoles = asyncHandler(async(req,res)=>{
    const {role_name,rules} = req.body
    if(!role_name || !rules){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const roles = await Roles.create({...req.body})
    res.status(201).json(roles)
})

const updateRoles = asyncHandler(async(req,res)=>{
    const role = await Roles.findByPk(req.params.id)
    if(!role){
        res.status(400)
        throw new Error("Role not Found")
    }
    await role.update(req.body)
    res.status(200).json(role)
})

const deleteRoles = asyncHandler(async(req,res)=>{
    const role = await Roles.findByPk(req.params.id)
    if(!role){
        res.status(400)
        throw new Error("Role not Found")
    }
    await role.destroy()
    res.status(200).json({"Message":"Role Deleted Successfully."})
})

module.exports = {createRoles,getRoles,updateRoles,deleteRoles}
