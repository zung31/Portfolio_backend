const express = require("express")
const cors = require("cors");
const router = express.Router()
const authToken = require ("../middleware/authToken")
const contactController = require('../controllers/contactController')

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.render('index')
})

router.post("/", authToken.authenticateToken, contactController.contact)

module.exports = router;