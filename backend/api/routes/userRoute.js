const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const {validateRegistration} = require('../middlewares/validationMiddlware');
const {checkRole} = require("../middlewares/isAdmin")

router.get("/getUser/:id", userController.getUser);
router.get("/getAllUsers", userController.getAllUsers);
router.get("/profile", userController.getUserByToken);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", checkRole(['admin']), userController.deleteUser);
router.post("/register",validateRegistration, userController.register);
router.post("/login", userController.login);
router.post('/logout', userController.logout)

module.exports = router;
