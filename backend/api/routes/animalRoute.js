const express = require('express')
const route = express.Router()
const animalController = require('../controllers/animalController')


route.get('/getAllAnimal', animalController.getAllAnimal)
route.get('/getAnimal/:id', animalController.getAnimal)
route.post('/createAnimal', animalController.postAnimal)
route.put('/updateAnimal/:id', animalController.updateAnimal)
route.delete('/deleteAnimal/:id', animalController.deleteAnimal)


//routes filtrées par champs de la base de données
route.get('/getAnimalByName', animalController.getAnimalByName)
route.get('/getAnimalByAge', animalController.getAnimalByAge)
route.get('/getAnimalByRace', animalController.getAnimalByRace)
route.get('/getAnimalByType', animalController.getAnimalByType)


module.exports = route;