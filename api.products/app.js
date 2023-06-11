const { getProducts } = require("./lib/dbFunctions");
const express = require("express");
const morgan = require("morgan");
const catchError = require("./lib/catch-error");

const app = express();

//logging requests
// app.use(morgan("combined"));
// app.use(morgan(':method :url :status :response-time ms - :res[content-length] :req[header]'));

// app.use((req, res) => {
//   res.status(409).send(`original URL is ${req.originalUrl}`);
// });


//main route: returns active product list
app.get("/api/products/", catchError(async (req, res) => {
  let products = await getProducts();
  let activeProducts = products.filter(product => {
    return product.ProductStatus === "Active";
  });
  res.json(activeProducts);
  //res.send("Products route");
}));

app.get('/test', (req, res) => res.send("Test route"));

//Error handler
app.use((err, req, res, _next) => {
  console.log(err);
  //res.status(404).send(err.message);
  res.status(404).send(req.originalUrl);
});

module.exports = app;