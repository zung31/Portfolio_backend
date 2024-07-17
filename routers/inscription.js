const express = require("express")
const cors = require("cors");
const router = express.Router()
const etrangerController = require("../controllers/etrangerController")
const visController = require("../controllers/visController")
const inscriptionController = require("../controllers/inscriptionController")
const authToken = require ("../middleware/authToken")
// const multer = require('multer'); // multer dùng để đọc dữ liệu từ form-data
// const upload = multer();
// bình thường dùng dữ liệu từ form front end gửi thì dùng express.json() và express.urlencoded({ extended: true })

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.render('index')
})

router.post("/etranger", authToken.authenticateToken, etrangerController.inscriptionEtranger)
router.post("/vis", authToken.authenticateToken, visController.inscriptionVIS)
router.post("/", authToken.authenticateToken, inscriptionController.inscription)

module.exports = router;