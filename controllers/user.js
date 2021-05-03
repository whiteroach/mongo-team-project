const User = require("../models/UserSchema");

exports.getAllUsers = (req,res) => {
    User.find((err,data) => {
        if(err) throw err;
        res.render('user',{user: data})
    })
}

exports.newUser = (req,res) => {
    const newUser = new User(req.body);
    newUser.save()
    res.redirect(url.format({
        pathname:'/login',
        query:{successMsg:'product added!'}
    }))

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

exports.updateProduct = (req,res) => {
    const userId = req.params.id;
    console.log(userId, req.body)
    Product.findByIdAndUpdate(userId,req.body,{new:true},(err,doc)=>{
        console.log(doc)
        res.redirect('/users')
    })
}