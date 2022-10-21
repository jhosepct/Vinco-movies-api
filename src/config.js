const { config } = require("dotenv");
config();

module.exports = {
  db: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};
