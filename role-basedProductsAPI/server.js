const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT | 2000;
const express = require("express");
const logger = require("./middlewares/logger");
const app = express();


const errorHandler=require('./middlewares/errorHandler');
app.use(express.json());
app.use(logger);
const users=require('./routes/users');
app.use("/api/v1/users/",users);
const products = require("./routes/products");
app.use("/api/v1/products", products);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
