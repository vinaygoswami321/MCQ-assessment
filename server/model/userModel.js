const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
  mobile: String,
  email:String,
  password: String,
  name: String,

});

const User = mongoose.model("User", AdminSchema);
module.exports = User;




