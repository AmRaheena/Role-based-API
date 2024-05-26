const pool = require("../config/db");
const productsQueries = require("../queries/products");

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    pool.query(productsQueries.getAllProducts, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(productsQueries.getProductById, [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

const createProduct = (title, price,image) => {
  return new Promise((resolve, reject) => {
    pool.query(productsQueries.addProduct, [title, price,image], (error, results) => {
      if (error) reject(error);
      else resolve(true);
    });
  });
};

const RecordExistById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(productsQueries.getProductById, [id], (error, results) => {
      if (error) {
        resolve(false);
      } else {
        resolve(results.rows.length > 0);
      }
    });
  });
};
const updateProduct = (id,title, price,image) => {
  return new Promise((resolve, reject) => {
    pool.query(
      productsQueries.updateProduct,
      [title, price,image, id],(error, results) => {
        if (error) reject(error);
        else {
          resolve(results.rows);
        }
      }
    );
  });
};

const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(productsQueries.removeProduct, [id], (error, results) => {
      if (error) reject(error);
      else {
        resolve(true);
      }
    });
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  RecordExistById,
  updateProduct,
  deleteProduct,
};
