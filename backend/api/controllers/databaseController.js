const animalModel = require("../models/animalModel");
const userModel = require("../models/userModel");
const cabinetModel = require("../models/cabinetModel");

const sequelize = require("../../database/database");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

exports.createAllTables = async (req, res) => {
  try {
    await sequelize.sync({ alter: true });
    res.status(200).json({ message: "All tables were created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while creating the tables" });
  }
};
