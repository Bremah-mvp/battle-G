// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
  app.get("/battle", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/battle.html"));
  });
  app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view.html"));
  });
};
