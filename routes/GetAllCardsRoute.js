const router = require('express').Router();
const GetAllCardsFunction = require('../controllers/GetAllCardsFunction');

router.get ('/getallcards', GetAllCardsFunction);
module.exports = router;