const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
 let tust = args.join(" ")
message.channel.send("✅" + " Succesful set" + ` ${tust}` + ' as your test command')
db.set(`Test_${message.guild.id}`, tust)
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "test",
  category: "Miscelaneous",
  description: "Testing, testing",
  usage: "test"
};
