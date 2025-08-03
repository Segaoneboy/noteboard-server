const CreateCardFunction = require( "../controllers/CreateCardFunction");
const authMiddleware = require("../middlewares/authMiddleware");
const router = require('express').Router();
const multer = require('multer');
const path = require("path");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/tmp')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage})

router.post('/create', authMiddleware, upload.single('image') , CreateCardFunction )

module.exports = router;