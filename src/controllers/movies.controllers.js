const pool = require("../db");

const createMovie = async (req, res, next) => {
  try {
    const { title, year, rating, link_photo } = req.body;

    const newTask = await pool.query(
      "INSERT INTO movies (title, year, rating, link_photo) VALUES($1, $2, $3, $4) RETURNING *",
      [title, year, rating, link_photo]
    );

    res.json(newTask.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getAllmovies = async (req, res, next) => {
  try {
    const allTasks = await pool.query("SELECT * FROM movies");
    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
};

const getMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Movie not found" });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, year, rating, link_photo } = req.body;

    const result = await pool.query(
      "UPDATE movies SET title = $1, year = $2, rating = $3, link_photo = $4  WHERE id = $5 RETURNING *",
      [title, year, rating, link_photo, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Movie not found" });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM movies WHERE id = $1", [id]);

    if (result.rowCount === 0)
      return res.status(404).json({ message: "Movie not found" });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMovie,
  getAllmovies,
  getMovie,
  updateMovie,
  deleteMovie,
};
