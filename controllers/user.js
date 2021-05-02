const User = require("../models/userSchema");

exports.displayUserList = (req,res) => {
    User.find((err,data) => {
        if(err) throw err;
        res.render('userList',{user: data})
    })
}
