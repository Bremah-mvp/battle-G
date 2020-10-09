console.log("battle.js triggered")

var myVar;

function addText(x) {
    console.log("added text")
    var tag = document.createElement("p");
    var text = document.createTextNode(x);
    tag.appendChild(text);
    var element = document.getElementById("combatText");
    element.appendChild(tag);
    console.log(x)
}


// function myFunction() {
//     myVar = setInterval(turn(char1, char2), 300);
// }
function checkIfHit(char1, char2) {
    let hitChance = .5 - .1 * (char2.defense);
    console.info(hitChance + " hit chance")
    let hitRoll = Math.random() + .1 * (char1.attack);
    console.info(hitRoll + " hit roll")
    if (hitRoll >= hitChance) {
        hit = true;
    }
    else {
        hit = false;

    }
}
function attackTarget(char1, char2) {
    addText(char1.name + " attacks " + char2.name)
    checkIfHit(char1, char2)
    if (hit === true) {
        addText(char1.name + " hits " + char2.name)
        let dmg = char1.damage
        console.info(dmg)
        char2.hitPoints -= dmg;
    }
    else {
        addText(char1.name + " misses " + char2.name)
    }
    isAlive(char2);
}
function isAlive(char1) {
    if (char1.hitPoints > 0) {
        console.info(char1.name + " is alive.")
    }
    else {
        addText(char1.name + " has died!");
    }
}
function turn(char1, char2) {
    if (char1.hitPoints > 0) {
        attackTarget(char1, char2)
        // if (char1.player === false) {
        //     attackTarget(char1, char2)
        // }
        // else {
        //     attackTarget(char2, char1)
        // }
    }
    else {
        console.info("no turn for dead person")
    }
}
// let hero = new Character("Hero", 0, 1, 1, 1, 1, true);
// let enemy = new Character("Enemy", 5, 1, 1, 1, 1, false);
// let floridaMan = new Character("Florida Man", 100, 100, 100, 100, 100, false)
// let texasRanger = new Character("Texas Ranger", 1, 1, 1, 1, 1, false)
// let kentuckyColonel = new Character("Kentucky Colonel", 1, 1, 1, 5, 1, false)
//boston teapartier
let hit = false;
function combat(char1, char2) {
    if (char1.hitPoints <= 0) {
        console.log("No condition to fight.")
    }
    else {
        let turnArray = [char1, char2];
        turnArray.sort((a, b) => (a.speed < b.speed) ? 1 : (a.speed === b.speed) ? ((a.name > b.name) ? 1 : -1) : -1)
        addText("Ready? Set! Fight!")
        var round = 0;
        console.log("before while")
        while (char1.hitPoints > 0 && char2.hitPoints > 0) {
            console.log("in while")
            // for (i = 0; i < turnArray.length; i++) {
            //     turn(char1, char2)
            //     turn(char2,char1)
            // }
            //setInterval(function(){turn(char1, char2)}, 300);
            //setTimeout(turn(char1, char2), 5000);
            round++
            //setTimeout(() => round++, 1000);
            addText("Round: " + round);
            //setTimeout(() => turn(char1,char2), 1000);
            //setTimeout(() => turn, 1000, char1, char2);
            turn(char1, char2)
            //setInterval(function(){turn(char2, char1)}, 300);
            turn(char2, char1)
            //setTimeout(turn(char2, char2), 5000);
            //setTimeout(() => turn, 1000, char2, char1);
            //setTimeout(() => turn (char2, char1), 1000);
        }
        console.info("Battle over")
        if (char1.hitPoints > 0 && char2.hitPoints <= 0) {
            addText(char1.name + " wins")
        }
        // else if (char1.hitPoints > 0 && char2.hitPoints > 0)
        // {
        //     addText("It was a tie.")
        // }
        else {
            console.info(char1.name + " loses")
            if (char2.name === "Florida Man") {
                addText("No one defeats Florida Man.")
            }
            else { }
        }
    }
}
//combat()

// function roundOne() {
//     enemy = kentuckyColonel;
//     combat()
// }
// function roundTwo() {
//     enemy = texasRanger;
//     combat()
// }
// function roundThree() {
//     enemy = floridaMan;
//     combat()
// }
function testFight() {
    hero = newBattler;
    combat(hero, floridaMan)
}
// roundOne()
// roundTwo()
// roundThree()
// Make a get request to our api route that will return every battler

function testFight() {
    $.get("/api/all", function (data) {
        // For each book that our server sends us back
        for (var i = 0; i < data.length; i++) {
        }
        combat(data[0], data[1])
    });
}