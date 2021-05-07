const User = require("../models/UserSchema");
const url = require('url')
const bcrypt = require('bcrypt')

exports.getAllUsers = (req,res) => {
    User.find((err,data) => {
        if(err) throw err;
        res.render('user',{user: data, message:req.query})
    })
}

exports.registration = (req,res) =>{
    let msger = '';
    if(req.query.msger){
        msger = req.query.msger
    }
    
    res.render('registration')
}


exports.register = (req,res) => {
    const {name, email, password} = req.body
    const error = {};
    if(name == ''){
        error.name = 'Name is required!'
    }
    if(email == ''){
        error.email = 'Email is required!'
    }
    if(password == ''){
        error.password = 'Password is required!'
    }
    if(name == ""||email==''||password==''){
        req.session.input = req.body;
        // console.log(req.body, error)
        console.log(req.input)
        return res.render('registration', {
            msg:error,
            input:req.session.input
        })
    }
    
    User.findOne({ name: req.body.name }, (err, data) => {
        // check name
        if (data !== null) {
          res.render("registration", { msger: "This account is already exist!" });
        } else {
          User.findOne({ email: req.body.email }, (err, doc) => {
            if (data !== null) {
              res.render("registration", { msger: "This account is already exist!" });
            } else {
              const userPassword = req.body.password;
              const saltRound = 10;
              bcrypt.hash(userPassword, saltRound, (err, hashPassword) => {
                // res.json(hashPassword);
                req.body.password = hashPassword;
                const newUser = new User(req.body);
                newUser.save((err, doc) => {
                  if (err) throw err;
                  res.redirect("/login");
                });
              });
            }
          });
        }
      });
    
}
exports.displayLogin = (req,res) => {
    let msg = ''
    if(req.query.msg){
        msg = req.query.msg
    }
    res.render('login', {msg})
}

exports.login = (req, res) => {
    User.findOne({ email: req.body.email }, (err, data) => {
       // check email
       if (data == null) {
        res.render("login", {
          msg: "E-mail is incorrect! Please enter a valid email",
        });
      }
      //check password
      else {
        bcrypt.compare(req.body.password, data.password, (err, result) => {
          if (result) {
            req.session.user = data;
            res.redirect("/product");
          } else {
            res.render("login", {
              msg: "Password is incorrect! Please enter a valid password",
            });
          }
        });
      }
    });
}

exports.deleteUser = (req,res) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId, (err,doc)=>{
        if(err) throw err;
        res.redirect(url.format({
            pathname:'/users',
            query:{ deleteMsg:'user removed!' }
        }))
    })
}

exports.updateUser = (req,res) => {
    const userId = req.params.id;
    console.log(userId, req.body)
    Product.findByIdAndUpdate(userId,req.body,{new:true},(err,doc)=>{
        console.log(doc)
        res.redirect('/users')
    })
}