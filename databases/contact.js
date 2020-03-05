const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guild: String,
  username: String,
  message: String,
  time: String,
  invite: String
});

module.exports = mongoose.model("Contact", contactSchema);
