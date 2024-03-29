const express = require("express");
const route = express.Router();
const cabinetController = require("../controllers/cabinetControllers");
// const { isAuthenticated, hasRole } = require('../middleware/middleware');

route.get("/get-all-cabinets", cabinetController.getAllCabinet);
route.get("/get-cabinet/:id", cabinetController.getCabinet);
route.post("/add-cabinet", cabinetController.createCabinet);
route.put("/update-cabinet/:id", cabinetController.updateCabinet);
route.delete("/delete-cabinet/:id", cabinetController.deleteCabinet);

//routes filtrées
route.get("/get-cabinet-by-name/:name", cabinetController.getCabinetByName);
route.get(
  "/get-cabinet-by-address/:address",
  cabinetController.getCabinetByAddress,
);

module.exports = route;
