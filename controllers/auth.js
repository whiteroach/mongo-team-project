const { response } = require("express");
const User = require("../models/UserSchema");
const bcrypt = require('bcryptjs');

const createUser = async(req, res = response) =>{
  const { email, password } = req.body;

  try{
    let user = await User.findOne ({ email });

    if(user){
      return res.status(400).json({
        ok: false,
        msg: "the user already exists"
      });
    }

    user = new User(req.body);

    //********ENCRYPT PASSWORD *****/

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

  }catch(error){
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "unknown error"
    });
  }
}

const loginUser = async (req, res = response) => {

//**********VALIDATE USER****** */
  const { email, password } = req.body;

  try{
    let user = await User.findOne({ email });
    if(!user){
      return res.status(400).json({
        ok: false,
        msg: "user not found"
      });
    }
      //**************CONFIRM PASSWORDS******* */
  
  const validPassword = bcrypt.compareSync(password, user.password);

  if(!validPassword){
    return res.status(400).json({
      ok: false,
      msg: "incorrect password"
    });
  }

  //*******GENERATE JSON WEB TOKE***** */
const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    uid: user.id,
    name: user.name
  });

  } catch(error){
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "unknown error"
    });
  } 

  
 /*  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });*/
}; 

module.exports = {
  createUser,
  loginUser,
};
};
