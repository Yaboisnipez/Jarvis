const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
let test = await db.fetch(`Test_${message.guild.id}`)

  message.channel.send(`${test}`)

};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "test1",
  category: "Miscelaneous",
  description: "Testing, testing",
  usage: "test1"
};
