const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    status:{
        admin: Boolean
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    surname:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
        trim: true
    },
    country:{
        type: String,
        trim: true
    },
    address:{
        type: String,
        trim: true
    },
});

module.exports = model('User', UserSchema);