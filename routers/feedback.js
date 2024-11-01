const express = require("express")
const cors = require("cors");
const router = express.Router()
const authToken = require ("../middleware/authToken")
const feedbackController = require('../controllers/feedbackController')

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// router.get("/", (req, res) => {
//     res.render('index')
// })

router.post("/", authToken.authenticateToken, feedbackController.createFeedback)
router.get("/", feedbackController.getFeedbacks);
router.put('/:id', feedbackController.updateFeedbackCheckbox);

module.exports = router;