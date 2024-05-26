const pool=require('../config/db');
const usersQueries=require('../queries/users');
const { hashPassword } = require('../utils/passwordHelper');

const createUser = (name,username,password,gender,address) => {
    const hashedPassword=hashPassword(password);
    return new Promise((resolve, reject) => {
       pool.query(usersQueries.createUser, [name,username,hashedPassword,gender,address], (error, results) => {
        if (error) reject(error);
        else {
          userId=results.rows ? results.rows[0].id :undefined;
          resolve(userId);
        }
      });
    });
  };

  const getUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
      pool.query(usersQueries.getUserByUsername, [username], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
    });
  }
  const getUserByUserId = (userid) => {
    return new Promise((resolve, reject) => {
      pool.query(usersQueries.getUserByUserId, [userid], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
    });
  }
  const getUserRolesByUserId = (userid) => {
    return new Promise((resolve, reject) => {
      pool.query(usersQueries.getUserRolesByUserId, [userid], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
    });
  }


  module.exports={createUser,getUserByUsername,getUserByUserId,getUserRolesByUserId};