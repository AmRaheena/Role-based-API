const getAllProducts = "SELECT id,title,price,image FROM products";
const getProductById = "SELECT id,title,price,image FROM products WHERE id=$1";
const addProduct     = "INSERT INTO products (title,price,image) VALUES ($1,$2,$3)";
const updateProduct  = "UPDATE products SET  title=$1, price=$2, image=$3 WHERE id=$4";
const removeProduct  = "DELETE FROM products WHERE id=$1";

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct,
};
