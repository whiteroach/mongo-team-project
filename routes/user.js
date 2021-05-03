const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); 

module.exports = function(){

    //To add a new user
    router.post('/users',
        userController.newUser
    )

    //To get all the users 
    router.get('/users',
        userController.getAllUsers
    )

//To get one user by ID 
router.get('/users/:id', 
    userController.getUser
)

//Update user by ID
router.put('/users/:id',
    userController.updateUser
)

//Delete user by ID 
router.delete('/users/:id',
    userController.deleteUser
)

    return router;
};