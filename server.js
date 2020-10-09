// Dependencies
// =============================================================
var express = require("express");
require("dotenv").config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//var db = require("./models/character.js");
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
//require("./routes/api-routes.js")(app);
const apiRoutes = require("./routes/api-routes");

// Here we introduce HTML routing to serve different HTML files
app.use("/", apiRoutes);
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