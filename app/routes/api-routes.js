// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
//var Battler = require("../models/character.js");
const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================

// Get all battler
router.get("/api/all", function (req, res) {
  db.battler_db.findAll({}).then(function (results) {
    res.json(results);
  });
});
// Add a battler
router.post("/api/new", function (req, res) {
  console.log("Battler Data:");
  console.log(req.body);
  db.battler_db.create({

    name: req.body.name,
    hitPoints: req.body.hitPoints,
    attack: req.body.attack,
    defense: req.body.defense,
    speed: req.body.speed,
    damage: req.body.damage,
    player: req.body.player
  }).then(function (results) {
    res.json(results);
  });
});

module.exports = router;

    // Delete a battler
    // app.delete("/api/battler/:id", function (req, res) {
    //     console.log("Battler ID:");
    //     console.log(req.params.id);
    //     Battler.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function () {
    //         res.end();
    //     });
    // });
