var jwt = require('jsonwebtoken');
var SECRET="njfbgfbFTT21cfs";

function createJwt(userid){
    var token = jwt.sign({userid:userid },SECRET);
    return token;
}

function verifyToken(token){
    return new Promise((resolve,reject)=>{ 
        const formattedToken=token.replace("Bearer ","");
        jwt.verify(formattedToken,SECRET,(error,decoded)=>{
        if(error) return reject({valid:false,error:error});
        return resolve({valid:true , userid:decoded.userid});
        })
    })
}

module.exports={createJwt,verifyToken};