const mariadb = require("mariadb");

//have to later use env variable
//from docker
const pool = mariadb.createPool({
  user: 'interviewer',
  password: 'changeme',
  database: 'marz',
  connectionLimit: 5
});

async function getProducts() {
  let conn;
  let result;
  try {
    conn = await pool.getConnection();
    result = await conn.query("SELECT * FROM Product");
    console.log("result arrived!");
    console.log(result);
  } catch (error) {
    //throw error here so we can use error handling middleware
    //in express
    console.log("error in getting rexul");
    console.log(error);
  } finally {
    conn.end();
    pool.end();
  }

  return result;
}

let result2 = getProducts();
console.log("the end");


