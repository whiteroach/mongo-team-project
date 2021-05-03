const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  status: {
    admin: Boolean,
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

module.exports = mongoose.model("User", UserSchema);
