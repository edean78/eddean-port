const {Project} = require("../models/");

// Defining methods for the projectController
module.exports = {
  findAll: function(req, res) {
    Project
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};