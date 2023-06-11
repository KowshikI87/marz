const { dbQuery } = require("./dbQuery");

async function getProducts() {
  let PRODUCTS = "SELECT * FROM Product";
  let result = await dbQuery(PRODUCTS);
  return result;
}

module.exports = { getProducts };