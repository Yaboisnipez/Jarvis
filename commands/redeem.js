const settings = require("../settings.json");
const Discord = require("discord.js")


exports.run = async (client, message, args) => {

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "clear",
  category: "",
  description: "Clears amount of messsaged",
  usage: "clear [amount]"
};
