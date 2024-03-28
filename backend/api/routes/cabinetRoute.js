const express = require('express')
const route = express.Router()
const cabinetController = require('../controllers/cabinetControllers')
// const { isAuthenticated, hasRole } = require('../middleware/middleware');

route.get('/getAllCabinet', cabinetController.getAllCabinet)
route.get('/getCabinet/:id', cabinetController.getCabinet)
route.post('/createCabinet', cabinetController.createCabinet)
route.put('/updateCabinet/:id',  cabinetController.updateCabinet)
route.delete('/deleteCabinet/:id',  cabinetController.deleteCabinet)

//routes filtrées
route.get('/getCabinetByName/:name', cabinetController.getCabinetByName)
route.get('/getCabinetByAddress/:address', cabinetController.getCabinetByAddress)


module.exports = route;