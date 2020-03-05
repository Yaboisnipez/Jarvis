const mongoose = require("mongoose");

const PremiumSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userID: String,
});

module.exports = mongoose.model("Premium", PremiumSchema);
