const User = require("../models/user");
const Roles = require("../models/roles");
const User_Role = require("../models/user_roles")
const bcrypt = require("bcrypt");
const { use } = require("../routers/userRouter");
const asyncHandler = require("../middleware/asyncHandler")

const getUsers = asyncHandler(async (req, res) => {
        const user = await User.findAll()
        res.status(200).json(user)
})

const createUser = asyncHandler(async (req, res) => {
    const { user_name, phone, email, is_active, password } = req.body
    if (!user_name || !phone || !email || !password) {
        res.status(400).json({ error: 'All fields are mandatory' });
        return;
      }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        ...req.body,
        password:hashedPassword

    })
    const role = await Roles.findOne({
        where:{
            role_name: "Customer"
        }
    })
    // console.log(role.role_name)
    const {user_id}=user
    const {role_id}=role
    const user_role = {
        user_id,
        role_id,
    }
    console.log(user_role)

    const userRole = await User_Role.create({
        ...user_role
    })
    res.status(201).json(user)
})

const updateUser =  asyncHandler(async (req, res) => {

    //   const _res=  await User.update(req.body,{
    //         where:{user_id:req.params.id},
    //          returning: true,// ["email"] // return email alone
    //          plain: true
    //     })

    //  or 

    const user = await User.findByPk(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error("User not found")
    }

    await user.update(req.body)

    res.json(user)

})


const deleteUser = asyncHandler(async(req, res) => {
    const user = await User.findByPk(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error("User not found")
    }
    await user.destroy()
    res.json({ "Message": "Delete the User" })
})






module.exports = {createUser,getUsers,deleteUser,updateUser}




