const pool = require("../db");
require("dotenv").config();

const createUser = async (req, res, next) => {
  try {
    const { email, password, name, last_name, phone } = req.body;
    // await pool.query("CREATE EXTENSION pgcrypto;");
    const result = await pool.query(
      "INSERT INTO users (email, password, name, last_name, phone) VALUES ($1, crypt($2, gen_salt('bf')), $3, $4, $5);",
      [email, password, name, last_name, phone]
    );

    res.json({
      message: "User created successfully",
      // body: {
      //   user: { email },
      // },
    });
  } catch (error) {
    res.status(500).json({ message: "User already exists" });
  }
};
const showUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE id = $1;", [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(res.json({ message: error.message }));
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email, password, name, last_name, phone } = req.body;
    const result = await pool.query(
      "UPDATE users SET email = $1, password = crypt($2, gen_salt('bf')), name = $3, last_name = $4, phone = $5 WHERE id = $6 RETURNING *;",
      [email, password, name, last_name, phone, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(res.status(500).json({ message: "User already exists" }));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM users WHERE id = $1;", [id]);
    res.json("User deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  showUser,
  updateUser,
  deleteUser,
};
