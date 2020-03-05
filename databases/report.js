 const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  userid: String,
  reason: String,
  ruser: String,
  rid: String,
  time: String
});

module.exports = mongoose.model("Report", reportSchema);
