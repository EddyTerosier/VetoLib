const sequelize = require("../../database/database");
const { DataTypes } = require("sequelize");
const Animal = require("./animalModel");
const Cabinet = require("./cabinetModel");
const bcrypt = require("bcrypt");

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
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: {
          args: true,
          msg: "Le numéro de téléphone doit être un nombre",
        },
        len: {
          args: [10, 10],
          msg: "Le numéro de téléphone doit contenir 10 chiffres",
        },
      },
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
        return bcrypt.compare(password, this.password);
      },
    },
  },
);

User.hasMany(Animal);
Animal.belongsTo(User);

User.belongsToMany(Cabinet, { through: "user_cabinet" });
Cabinet.belongsToMany(User, { through: "user_cabinet" });

module.exports = User;
