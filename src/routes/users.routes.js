const { Router } = require("express");

const {
  createUser,
  showUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");
const validateToken = require("../validateToken");

const router = Router();

router.post("/signup", createUser);

router.get("/profile/:id", validateToken, showUser);

router.put("/profile/:id", validateToken, updateUser);
router.patch("/profile/:id", validateToken, updateUser);

router.delete("/profile/:id", validateToken, deleteUser);

module.exports = router;
