const sequelize = require("../../database/database");
const { DataTypes } = require("sequelize");
const Animal = require("./animalModel");
const Cabinet = require("./cabinetModel");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "vet", "admin"),
      defaultValue: "user",
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  },
);

User.hasMany(Animal);
Animal.belongsTo(User);

User.belongsToMany(Cabinet, { through: "user_cabinet" });
Cabinet.belongsToMany(User, { through: "user_cabinet" });

module.exports = User;
