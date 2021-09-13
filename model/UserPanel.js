const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
  result: String,
  email:String,
  name: String,

});

const UserPanel = mongoose.model("UserPanel", AdminSchema);
module.exports = UserPanel;




