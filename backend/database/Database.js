// REQUIRE
const Sequelize = require("sequelize").Sequelize;
require("dotenv").config();

// DB CONNECTION
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
});

// DB AUTHENTIFICATION
sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = sequelize;