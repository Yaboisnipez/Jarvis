const settings = require("../settings.json");
const Discord = require("discord.js")
const mongoose = require("mongoose");
const Coins = require("../databases/money.js");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  await message.delete();
  if (message.author.id !== "632020134289997824") return;

  let member = message.mentions.members.first();
  if(!member) return message.reply("<:cancel:568135309972209689> Please mention a user")
  
  Coins.findOneAndDelete({ userID: member.id, serverID: message.guild.id }, (err, res) => {
    if (err) console.log(err)
 message.channel.send("<:checked:568135310165278902> I have delete user money")
  })
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "deluser",
  category: "Music",
  description: "Stops the music and clears the queue",
  usage: "stop"
};
