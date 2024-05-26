const express = require("express");
const router = express.Router();
const {createUser,login}=require('../controllers/users');
const {verifyTokenHandler, verifyRoles}=require('../middlewares/jwtHandler');
router.post("/signup",createUser);
router.post("/login",login);
module.exports=router;