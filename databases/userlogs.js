const mongoose = require("mongoose")

const logsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mutes: String,
  bans: String,
  warns: String,
  kicks: String,
  premium: String
})

module.exports = mongoose.model("Logs", logsSchema);