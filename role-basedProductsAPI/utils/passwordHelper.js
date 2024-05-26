var bcrypt=require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

function hashPassword(password){
    var hash = bcrypt.hashSync(password, salt);
    return hash
}

function compareWithHashedPassword(plainPassword,hashedPassword){
    var isMatching=bcrypt.compare(plainPassword,hashedPassword);
    return isMatching;
}
module.exports={hashPassword,compareWithHashedPassword};