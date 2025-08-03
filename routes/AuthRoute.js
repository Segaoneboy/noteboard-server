const {register, login, refresh, logout} = require('../controllers/AuthController')

const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);

module.exports = router;