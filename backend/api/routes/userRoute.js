const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
// const { isAuthenticated, hasRole } = require('../middleware/middleware');
const authenticate = require("../middlewares/authenticate");

router.get("/getUser/:id", userController.getUser);
router.get("/getIdUser", authenticate, userController.getIdUser);
router.get("/getAllUsers", userController.getAllUsers);
router.get("/profile", userController.getUserByToken);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

module.exports = router;
