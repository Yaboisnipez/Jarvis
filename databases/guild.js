const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
 _guildID: String,
  prefix: String
});

module.exports = mongoose.model("Contact", contactSchema);
