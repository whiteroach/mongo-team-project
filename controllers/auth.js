const { response } = require("express");
const User = require("../models/UserSchema");

const createUser = async (req, res = response) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      msg: "register",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "unknown error",
    });
  }
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

module.exports = {
  createUser,
  loginUser,
};
