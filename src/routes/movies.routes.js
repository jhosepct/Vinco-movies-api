const { Router } = require("express");

const {
  createMovie,
  getAllmovies,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controllers");
const validateToken = require("../validateToken");

const router = Router();

router.get("/movies", validateToken, getAllmovies);

router.post("/movies", validateToken, createMovie);

router.get("/movies/:id", validateToken, getMovie);

router.put("/movies/:id", validateToken, updateMovie);

router.delete("/movies/:id", validateToken, deleteMovie);

module.exports = router;
