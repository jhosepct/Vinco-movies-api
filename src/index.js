const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const moviesRouter = require("./routes/movies.routes");
const sessionsRouter = require("./routes/sessions.routes");
const usersRouter = require("./routes/users.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sessionsRouter);
app.use(moviesRouter);
app.use(usersRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
