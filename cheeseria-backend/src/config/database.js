const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../data/database.db",
});

module.exports = sequelize;
