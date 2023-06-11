const express = require("express");
const { getAllTutorials,createTutorial, getTutorialDetails } = require("../controllers/tutorialController");
const router = express.Router();


router.route("/tutorials").get(getAllTutorials);
router.route("/tutorials/new").post(createTutorial);
router.route("/tutorials/:id").get(getTutorialDetails)

module.exports = router