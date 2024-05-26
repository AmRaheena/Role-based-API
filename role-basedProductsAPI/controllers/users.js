const pool = require("../config/db");
const usersRepository=require('../repositories/users');
const errorResponse=require('../utils/errorResponse');
const asyncHandler=require('../middlewares/asyncHandler');
let {createJwt}=require('../utils/jwtHelper');
const {compareWithHashedPassword}=require('../utils/passwordHelper');

//@desc Craete a new user
//@route POST/api/v1/users
//@access public

const createUser =asyncHandler(async (req, res, next) => {
    const { name,username,password,gender,address } = req.body;
    const users=await usersRepository.getUserByUsername(username);
    if(users && users.length > 0)
       return next(new errorResponse(`username ${username} already taken`,400));
    const userId=await usersRepository.createUser(name,username,password,gender,address);
    const token=createJwt(userId);
    res.status(201).json({ message: "successfully added new user",name:name,token:token });
      }
    );

//@desc Craete a  user login
//@route POST/api/v1/users/login
//@access public
    const login =asyncHandler(async (req, res, next) => {
      const { username,password } = req.body;
      const users=await usersRepository.getUserByUsername(username);
      
      if(!users || users.length == 0)
         return next(new errorResponse(`Invalid credential`,400));
      const user=users[0];
      var isMatch=compareWithHashedPassword(password,user.password);
      if(isMatch){
      const token=createJwt(user.id);
      return res.status(201).json({ message: "Login successfully",user:{name:user.name},token:token });
      }
      return next(new errorResponse(`Invalid credential`,400));

   }
      );

 module.exports={createUser,login};