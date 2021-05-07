const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

//REGISTRATION
//show registration page
router.get("/", userController.registration);
//To register a new user
router.post("/", userController.register);

//LOGIN
//show login page
router.get("/login", userController.displayLogin);
//login
router.post("/login", userController.login);

//LOGOUT
router.get("/logout", (req, res) => {
  delete req.session.user;
  res.redirect("/");
});
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
