const express = require("express");
const route = express.Router();
const animalController = require("../controllers/animalController");

route.get("/getAllAnimal", animalController.getAllAnimal);
route.get("/getAnimal/:id", animalController.getAnimal);
route.post("/add-animal", animalController.postAnimal);
route.put("/updateAnimal/:id", animalController.updateAnimal);
route.delete("/deleteAnimal/:id", animalController.deleteAnimal);

//routes filtrées par champs de la base de données
route.get("/getAnimalByName/:name", animalController.getAnimalByName);
route.get("/getAnimalByAge/:age", animalController.getAnimalByAge);
route.get("/getAnimalByRace/:race", animalController.getAnimalByRace);
route.get("/getAnimalByType/:type", animalController.getAnimalByType);
route.get("/get-type-enum", animalController.getTypeEnum);

module.exports = route;
