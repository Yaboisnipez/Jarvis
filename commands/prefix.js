const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");

exports.run = async (client, message, args, data) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("YOU CAN NOT DO THAT")
  
  if (!args[0] || args[0 == "help"]) return message.channel.send("Usage ^prefix [prefix]");
  
  let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
  
  prefixes[message.guild.id] = {
    prefixes: args[0]
  }
  
  fs.writeFile("./prefix.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });
  
  let embed = new Discord.RichEmbed()
    .setColor("#fffff")
  .setTitle("Prefix Set")
    .setDescription(`Prefix has been set to ${args[0]}`)
  
  message.channel.send(embed)
  db.set(`prefix_${message.guild.id}`, args[0])
  
  
  
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "prefix",
  category: "Miscelaneous",
  description: "Set the prefix",
  usage: "prefix ?"
};
