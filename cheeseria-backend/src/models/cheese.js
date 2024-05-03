const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

const Cheese = sequelize.define("Cheese", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pricePerKilo: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    colour: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Cheese;
