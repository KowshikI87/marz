const { getProducts } = require("./lib/dbFunctions");
const express = require("express");
const morgan = require("morgan");
const catchError = require("./lib/catch-error");

const app = express();

//logging requests
app.use(morgan("common"));

//main route: returns active product list
app.get("/api/products/", catchError(async (_req, res) => {
  let products = await getProducts();
  let activeProducts = products.filter(product => {
    return product.ProductStatus === "Active";
  });
  res.json(activeProducts);
}));

//Error handler
app.use((err, _req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

module.exports = app;