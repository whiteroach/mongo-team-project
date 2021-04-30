const { response } = require("express");
const User = require("../models/UserSchema");
const { use } = require("../routes/auth");

const createUser = async (req, res = response) => {
 

 const { email, password } = req.body;
  try {
    
    let user = await User.findOne({ email });
    

    //******VERIFY USER******* */
    if(user){
        return res.status(400).json({
             ok: false,
             message: "email exists in our database"
        });
    }

    user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "unknown error",
    });
  }
};


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
