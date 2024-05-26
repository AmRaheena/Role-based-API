const createUser= "INSERT INTO users(name,username,password,gender,address) VALUES($1,$2,$3,$4,$5) RETURNING id";
const getUserByUsername="SELECT id,name,username,password,gender,address FROM users WHERE username=$1";
const getUserByUserId="SELECT name,username,password,gender,address FROM users WHERE userid=$1";
const getUserRolesByUserId="SELECT r.name FROM role r INNER JOIN userrole  ur ON ur.roleid=r.id WHERE userid=$1";
module.exports={createUser,getUserByUsername,getUserByUserId,getUserRolesByUserId};