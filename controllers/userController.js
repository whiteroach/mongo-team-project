const { request } = require("express");
const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");

//To create a new user
exports.newUser = async (req, res, next) => {
  const user = await new User(req.body);
  try {
    await user.save();
    res.json({ message: "the user was added" });
  } catch (error) {
    console.log(error);
    next();
  }
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  await usuario.save();
};

//To get all the users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

//To get one user by ID
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Update User by ID
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

//Delete user by ID
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.json({ msg: "the user was deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};
