const sequelize = require("../../database/database");
const { DataTypes } = require("sequelize");
const Animal = require("./animalModel");
const User = require("./userModel");

const Cabinet = sequelize.define(
  "cabinet",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  },
);

Cabinet.hasMany(Animal);
Animal.belongsTo(Cabinet);

module.exports = Cabinet;
