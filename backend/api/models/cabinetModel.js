const sequelize = require("../../database/database");
const { DataTypes } = require("sequelize");
const Animal = require("./animalModel");

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
    street_number: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      validate: {
        min: 10,
        max: 10,
      },
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
