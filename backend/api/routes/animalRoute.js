const express = require('express')
const route = express.Router()
const animalController = require('../controllers/animalController')

route.get('/getAllAnimal', animalController.getAllAnimal)
route.get('/getAnilam/:id', animalController.getAnimal)
route.post('/createAnimal', animalController.createAnimal)
route.put('updateAnimal/:id', animalController.updateAnimal)
route.delete('deleteAnimal', animalController.deleteAnimal)

module.exports = route;