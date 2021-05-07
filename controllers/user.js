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
    let msg = '';
    if(req.query.msg){
        msg = req.query.msg
    }
    res.render('registration', {msg})
}
exports.displayLogin = (req,res) => {
    res.render('login')
}

exports.newUser = (req,res) => {
    const newUser = new User(req.body);
    newUser.save().then()
    res.redirect('/login')
    User.findOne({email:req.body.email}, (err, data)=>{
        if(data !== null){
            res.render('registration',{msg: 'email already in use!'})
        }else{
            const userPsw = req.body.password;
            const saltRound = 
        }
    })
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