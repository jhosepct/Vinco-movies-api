const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
  user: db.user,
  password: db.password,
  database: db.database,
  host: db.host,
  port: db.port,
});

module.exports = pool;
