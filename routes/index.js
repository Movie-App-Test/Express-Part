var express = require("express");
var router = express.Router();
let Movie = require("../models/exercise.model");
/* GET home page. */
router.get("/", function (req, res, next) {
  Movie.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
