const { Router } = require("express");
const {
  createMovie,
  getAllmovies,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controllers");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = Router();

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

// create a task
router.get("/movies", validateToken, getAllmovies);

router.post("/movies", validateToken, createMovie);

router.get("/movies/:id", validateToken, getMovie);

router.put("/movies/:id", validateToken, updateMovie);

router.delete("/movies/:id", validateToken, deleteMovie);

module.exports = router;
