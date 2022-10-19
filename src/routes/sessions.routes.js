const { Router } = require("express");

const { login, logout } = require("../controllers/sessions.controllers");

const router = Router();

// routes sessions
router.post("/login", login);

router.delete("/logout", logout);

module.exports = router;
