const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
  user: process.env.DB_USER || db.user,
  password: process.env.DB_PASSWORD || db.password,
  database: process.env.DB_DATABASE || db.database,
  host: process.env.DB_HOST || db.host,
  port: process.env.DB_PORT || db.port,
});

module.exports = pool;
