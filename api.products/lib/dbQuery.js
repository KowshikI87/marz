const mariadb = require("mariadb");

const logQuery = (statement, parameters) => {
  let timeStamp = new Date();
  let formattedTimeStamp = timeStamp.toString().substring(4, 24);
  console.log(formattedTimeStamp, statement, parameters);
};

module.exports = {
  async dbQuery(statement, ...parameters) {
    const pool = mariadb.createPool({
      user: "interviewer",
      password: "changeme",
      database: "marz",
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