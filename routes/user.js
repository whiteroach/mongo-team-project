const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
//show registration page
router.get("/", userController.registration);
//To add a new user
router.post("/", userController.newUser);
//show login page
router.get("/login", userController.displayLogin);

//Update user by ID
router.put("/users/:id", userController.updateUser);

// //To get one user by ID
// router.get('/users/:id',
//     userController.getUser
// )

//Update user by ID
router.post("/users/update/:id", userController.updateUser);

//Delete user by ID
router.get("/users/delete/:id", userController.deleteUser);

module.exports = router;
