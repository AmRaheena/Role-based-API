const express = require("express");
const router = express.Router();
const {verifyTokenHandler, verifyRoles }=require('../middlewares/jwtHandler');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
router.get("/" ,getProducts);
router.get("/:id" ,getProduct);
router.post("/",[verifyTokenHandler,verifyRoles(['admin'])], createProduct);
router.put("/:id",[verifyTokenHandler,verifyRoles(['admin'])], updateProduct);
router.delete("/:id",[verifyTokenHandler,verifyRoles(['admin'])], deleteProduct);
module.exports = router;
