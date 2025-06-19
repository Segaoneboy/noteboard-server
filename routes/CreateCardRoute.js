const CreateCardFunction = require( "../controllers/CreateCardFunction");

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

router.post('/create', upload.single('image') , CreateCardFunction )

module.exports = router;