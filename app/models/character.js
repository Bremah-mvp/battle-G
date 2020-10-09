module.exports = function(sequelize, DataTypes) {
    // Creates a "Book" model that matches up with DB
    let Battler = sequelize.define("battler_db", {
        name: DataTypes.STRING,
        hitPoints: DataTypes.INTEGER,
        attack: DataTypes.INTEGER,
        defense: DataTypes.INTEGER,
        damage: DataTypes.INTEGER,
        speed: DataTypes.INTEGER,
        player: DataTypes.BOOLEAN
    });

    // Syncs with DB
    return Battler;
}

    // Makes the Book Model available for other files (will also create a table)
    //module.exports = Battler;
    // module.exports = Character;
