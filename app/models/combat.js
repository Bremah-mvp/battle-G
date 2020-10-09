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
    console.info(char1.name + " attacks " + char2.name)
    checkIfHit(char1, char2)
    if (hit === true) {
        let dmg = char1.damage
        console.info(dmg)
        char2.hitPoints -= dmg;
    }
    else {
        console.info(char1.name + " misses " + char2.name)
    }
    target.isAlive();
}
function isAlive(char1) {
    if (char1.hitPoints > 0) {
        console.info(char1.name + " is alive.")
    }
    else {
        console.info(char1.name + " has died!");
    }
}
function turn(char1, char2) {
    if (this.hitPoints > 0) {
        if (this.player === false) {
            this.attackTarget(char1, char2)
        }
        else {
            this.attackTarget(char2, char1)
        }
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
    if (hero.hitPoints <= 0) {
        console.log("No condition to fight.")
    }
    else {
        let turnArray = [char1, char2];
        turnArray.sort((a, b) => (a.speed < b.speed) ? 1 : (a.speed === b.speed) ? ((a.name > b.name) ? 1 : -1) : -1)
        console.info("start combat")
        while (char1.hitPoints > 0 && char2.hitPoints > 0) {
            for (i = 0; i < turnArray.length; i++) {
                turnArray[i].turn()
            }
        }
        console.info("Battle over")
        if (char1.hitPoints > 0) {
            console.info(char1.name + " wins")
        }
        else {
            console.info(char1.name + " loses")
            if (char2.name === "Florida Man") {
                console.info("No one defeats Florida Man.")
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
    combat(hero,floridaMan)
}
// roundOne()
// roundTwo()
// roundThree()