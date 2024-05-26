const { getUserRolesByUserId } = require('../repositories/users');
const {verifyToken}= require('../utils/jwtHelper');

const verifyTokenHandler=async (req,res,next)=>{
    let token=req.headers['authorization'];
    if(token&& token.includes('Bearer'))
    try {
        
        const result= await verifyToken(token); 
        const userid=result.userid;
        req.userid=userid;
        console.log("hey",result.userid,);
        return next();
    } catch (error) {
        return res.status(401).json({message:"Invalid token"});
    }
    else{
        return res.status(401).json({message:"No token provided"});
    }
}

const verifyRoles =(roles) =>{
    return async(req,res,next) =>{
        const userid=req.userid;
        const userRoles=await getUserRolesByUserId(userid);
        let hasRole=false;
        for(let userRole of userRoles){
            if(roles.includes(userRole.name))
            {
                hasRole=true;
                break;
            }
        }
       if(hasRole)
       {
        next();
       } 
       else{
        res.status(403).json({Message:"You dont have permission"});
       }
    }
}
module.exports={verifyTokenHandler,verifyRoles};