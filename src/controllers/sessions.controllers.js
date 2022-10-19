const pool = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = crypt($2, password);",
      [email, password]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = result.rows[0];
    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res.header("authorization", accessToken).json({
      id: user.id,
      email: user.email,
      name: user.name,
      last_name: user.last_name,
      phone: user.phone,
      token: accessToken,
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.json({ message: "Logout success" });
  } catch (error) {
    next(error);
  }
};

const validateToken = (req, res, next) => {
  try {
    const token = req.header("authorization");
    if (!token) return res.status(401).json({ message: "Access denied" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  logout,
};
