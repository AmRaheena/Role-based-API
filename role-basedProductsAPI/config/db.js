const { Pool }=require('pg');
const pool=new Pool({
    user:'trainingdb_user',
    password:'upcode',
    host:'localhost',
    port:5432,
    database:'newProductdb'
})

module.exports=pool;