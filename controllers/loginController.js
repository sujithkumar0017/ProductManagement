// const User_Role = require("../models/user_roles")
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken")
const asyncHandler = require("../middleware/asyncHandler")

// const Roles = require("../models/roles");


const loginUser = asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        res.status(400)
        throw new Error("Username and Password is Required")
    }
    const user = await User.findOne({where:{email}})
    if (user && (await bcrypt.compare(password,user.password))){
      console.log("Access Token Secret:", process.env.ACCESS_TOKEN_SECRET);
      const accessToken = jwt.sign(
        {
          user: {
            username: user.user_name,
            email: user.email,
            id: user.user_id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "20m" }
        
      );
      console.log(accessToken)
      res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("Email or Password is not valid")
    }

});


module.exports = {loginUser}


