const express = require('express')
const route = express.Router()
const cabinetController = require('../controllers/cabinetControllers')
// const { isAuthenticated, hasRole } = require('../middleware/middleware');

route.get('/getAllCabinet', cabinetController.getAllCabinet)
route.get('/getCabinet/:id', cabinetController.getCabinet)
route.post('/createCabinet', cabinetController.createCabinet)
route.put('/updateCabinet/:id',  cabinetController.updateCabinet)
route.delete('/deleteCabinet/:id',  cabinetController.deleteCabinet)

module.exports = route;