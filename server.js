// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models/character.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});