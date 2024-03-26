const express = require("express");
const router = express.Router();
const databaseController = require("../controllers/databaseController");

router.get("/create-all-tables", databaseController.createAllTables);

module.exports = router;
