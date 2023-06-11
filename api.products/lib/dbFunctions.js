const { dbQuery } = require("./dbQuery");

async function getProducts() {
  let PRODUCTS = "SELECT * FROM Product";
  let result = await dbQuery(PRODUCTS, 3);
  return result;
}

module.exports = getProducts;