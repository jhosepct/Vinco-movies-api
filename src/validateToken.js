const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = (req, res, next) => {
  try {
    const accesstoken = req.header("authorization") || req.query.accesstoken;
    if (!accesstoken) return res.status(401).json({ message: "Access denied" });

    jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = validateToken;
