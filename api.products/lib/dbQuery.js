/* eslint-disable no-process-env */
const mariadb = require("mariadb");

const logQuery = (statement, parameters) => {
  let timeStamp = new Date();
  let formattedTimeStamp = timeStamp.toString().substring(4, 24);
  console.log(formattedTimeStamp, statement, parameters);
};

module.exports = {
  async dbQuery(statement, ...parameters) {
    const pool = mariadb.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      connectionLimit: 5
    });

    let conn = await pool.getConnection();
    logQuery(statement, parameters);
    let result = await conn.query(statement, parameters);
    await conn.end();
    await pool.end();

    return result;
  }
};