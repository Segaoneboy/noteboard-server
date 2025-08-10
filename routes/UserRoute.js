
const authMiddleware = require("../middlewares/authMiddleware");
const UserController = require("../controllers/UserController");
const router = require('express').Router();
router.get('/getinfo', authMiddleware, UserController)

module.exports = router;