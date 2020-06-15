var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Piña Server is operational.");
});

module.exports = router;