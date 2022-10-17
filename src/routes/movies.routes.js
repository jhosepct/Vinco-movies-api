const { Router } = require("express");
const {
  createMovie,
  getAllmovies,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controllers");

const router = Router();

// create a task
router.post("/movies", createMovie);

router.get("/movies", getAllmovies);

router.get("/movies/:id", getMovie);

router.put("/movies/:id", updateMovie);

router.delete("/movies/:id", deleteMovie);

module.exports = router;
