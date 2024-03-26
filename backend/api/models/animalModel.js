const sequelize = require("../../database/database");
const { DataTypes } = require("sequelize");
const User = require("./userModel");
const Cabinet = require("./cabinetModel");

const Animal = sequelize.define(
  "animal",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    race: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM(
        "chien",
        "chat",
        "oiseau",
        "poisson",
        "reptile",
        "rongeur",
        "autre",
      ),
      defaultValue: "chien",
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = Animal;
