var floridaMan = {
  name: "Florida Man",
  hitPoints: 20,
  attack: 5,
  defense: 0,
  damage: 1,
  speed: 5,
  player: false
  // name: name,
  // hitPoints: hitPoints,
  // attack: attack,
  // defense: defense,
  // damage: damage,
  // speed: speed,
  // player: player
};
// const newBattler = Battler.build({
//   name: $("#warrior").val().trim(),
//   hitPoints: 10,
//   attack: $("#attack").val().trim(),
//   defense: $("#defense").val().trim(),
//   damage: $("#damage").val().trim(),
//   speed: $("#speed").val().trim(),
//   player: true
//   // name: name,
//   // hitPoints: hitPoints,
//   // attack: attack,
//   // defense: defense,
//   // damage: damage,
//   // speed: speed,
//   // player: player
// });
console.log(floridaMan)
console.log(" this is before the post")
// Send an AJAX POST-request with jQuery
$.post("/api/new", floridaMan)
  // On success, run the following code
  .then(function (data) {
    console.log("start post")
    // Log the data we found
    console.log(data)
    console.log(" this is the inside the post");
    //console.log(Battler.name)
  });
//var Battler = require("../models/character.js");
//function createBattler()
// {
//     // let name = document.getElementById("warrior").value;
//     // //let hitPoints = document.getElementById("hp").value;
//     // let attack = document.getElementById("attack").value;
//     // let defense = document.getElementById("defense").value;
//     // let damage = document.getElementById("damage").value;
//     // let speed = document.getElementById("speed").value;

//     //hero creation
//     // hero = new Character (name, 10, attack, defense, damage, speed, true)
//     // console.log(hero)
// }
console.log("js loaded.")
$(document).ready(function () {
  // When user clicks add-btn
  $("#createHero").on("click", function (event) {
    event.preventDefault();
    console.log("function triggered")
    // Make a newBook object
    // let name = $("#warrior").val().trim()
    // let hitPoints = 10;
    // let attack = $("#attack").val().trim()
    // let defense = $("#defense").val().trim()
    // let damage = $("#damage").val().trim()
    // let speed = $("#speed").val().trim()
    // let player = true
    var newBattler = {
      name: $("#warrior").val().trim(),
      hitPoints: 10,
      attack: $("#attack").val().trim(),
      defense: $("#defense").val().trim(),
      damage: $("#damage").val().trim(),
      speed: $("#speed").val().trim(),
      player: true
      // name: name,
      // hitPoints: hitPoints,
      // attack: attack,
      // defense: defense,
      // damage: damage,
      // speed: speed,
      // player: player
    };
    // const newBattler = Battler.build({
    //   name: $("#warrior").val().trim(),
    //   hitPoints: 10,
    //   attack: $("#attack").val().trim(),
    //   defense: $("#defense").val().trim(),
    //   damage: $("#damage").val().trim(),
    //   speed: $("#speed").val().trim(),
    //   player: true
    //   // name: name,
    //   // hitPoints: hitPoints,
    //   // attack: attack,
    //   // defense: defense,
    //   // damage: damage,
    //   // speed: speed,
    //   // player: player
    // });
    console.log(newBattler)
    console.log(" this is before the post")
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBattler)
      // On success, run the following code
      .then(function (data) {
        console.log("start post")
        // Log the data we found
        console.log(data)
        console.log(" this is the inside the post");
        //console.log(Battler.name)
      });

    // Empty each input box by replacing the value with an empty string
    $("#warrior").val("0");
    $("#attack").val("0");
    $("#defense").val("0");
    $("#damage").val("0");
    $("#speed").val("0");
    $(location).attr('href', '/view')
  });
});

