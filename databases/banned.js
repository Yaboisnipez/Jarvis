const mongoose = require("mongoose");

const bannedSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userID: String,
  time: String
});

module.exports = mongoose.model("Banned", bannedSchema);
