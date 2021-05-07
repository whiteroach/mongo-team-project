const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');

const UserSchema = Schema({
  role: {
    type: String,
    
    default: "user"
    }, 
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
});

// UserSchema.pre('save', async function(next){
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// })


module.exports = mongoose.model("User", UserSchema);
