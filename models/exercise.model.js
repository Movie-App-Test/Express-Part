const mongoose = require("mongoose");

const Movie = mongoose.model("Movie", {
  name: String,
  episode: String,
  linkitself: String,
  linktovideo: String,
});

module.exports = Movie;
