const express = require('express');
const User = require('../models/UserSchema');
const bcrypt = require('bcryptjs');




//Encrypting the password 
user = new User(req.body);
const salt = bcrypt.genSaltSync();
