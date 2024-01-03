const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },

  done: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model("userdatas", UserSchema);

module.exports = UserModel;
