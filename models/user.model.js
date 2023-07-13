let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  Confirm_password: { type: String, required: true },
});

let UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
