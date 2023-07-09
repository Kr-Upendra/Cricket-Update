const matchController = require("../controllers/matchController");
const express = require("express");
const router = express.Router();

router.route("/live").get(matchController.getLiveMatches);
router.route("/upcoming").get(matchController.getUpcomingMatches);
router.route("/finished").get(matchController.getFinishedMatches);
router.route("/live/:id").get(matchController.getSingleMatch);

module.exports = router;
