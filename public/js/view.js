// Make a get request to our api route that will return every battler
$.get("/api/all", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold battler data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "battler-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our battler data to the well we just placed on the page
    $("#battler-well-" + i).append("<h2>" + data[i].name + "</h2>");
    $("#battler-well-" + i).append("<h3>Hit Points: " + data[i].hitPoints + "</h3>");
    $("#battler-well-" + i).append("<h3>Attack: " + data[i].attack + "</h3>");
    $("#battler-well-" + i).append("<h3>Defense: " + data[i].defense + "</h3>");
    $("#battler-well-" + i).append("<h3>Damage: " + data[i].damage + "</h3>");
    $("#battler-well-" + i).append("<h3>Speed: " + data[i].speed + "</h3>");
  }
});
