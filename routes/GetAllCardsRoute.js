const router = require('express').Router();
const GetAllCardsFunction = require('../controllers/GetAllCardsFunction');
const authMiddleware = require("../middlewares/authMiddleware");

router.get ('/getallcards', authMiddleware , GetAllCardsFunction);
module.exports = router;