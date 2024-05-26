//const pool = require("../config/db");
//const courseQueries = require("../queries/courses");
const productRepository = require("../repositories/products");
const errorResponse=require('../utils/errorResponse');
const asyncHandler=require('../middlewares/asyncHandler');

//@desc Get all products
//@route GET/api/v1/products
//@access public

const getProducts =asyncHandler(async (req, res, next) =>{
  const products=await productRepository.getAllProducts();
   res.status(200).json(products);
   })

//@desc Get a single  product
//@route GET/api/v1/products/:id
//@access public

const getProduct =asyncHandler(async (req, res, next) => {
      const id = req.params.id;
   const product=await productRepository.getProductById(id);
   if(product.length) return res.status(200).json(product);
   next(new errorResponse(`product does not exist wih id ${id}`,404));
  
})

//@desc Craete a new course
//@route POST/api/v1/courses/
//@access public

const createProduct =asyncHandler(async (req, res, next) => {
  const { title, price,image } = req.body;
  const product=await productRepository.createProduct(title, price, image);
  res.status(201).json({ message: "successfully added new product" });  
});

//@desc Update a product
//@route PUT/api/v1/products/:id
//@access public

const updateProduct =asyncHandler(async (req, res, next) => {
      const id = req.params.id;
      const { title, price, image } = req.body;
      const recordExist = await productRepository.RecordExistById(id);
      if (recordExist) {
         const product=await productRepository.updateProduct(id, title, price, image);
         res.status(200).json({ message: "successfully updated product" });
      }else
        next(new errorResponse(`record does not exist with id ${id}`,404)); 
});

//@desc delete a product
//@route DELETE/api/v1/products/:id
//@access public
const deleteProduct =asyncHandler(async (req, res, next) => {
      const id = req.params.id;
      const recordExist = await productRepository.RecordExistById(id);
      if (recordExist) {
         const product=await productRepository.deleteProduct(id);
        res.status(200).json({ message: "successfully deleted product" });
      }else
      next(new errorResponse(`record does not exist with id ${id}`,404));
});

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
