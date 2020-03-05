const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args, member) => {
 let support = new Discord.RichEmbed()
 .setDescription('Join our offical support server')
 .addField("Invite Link / Support Link", "[Support](https://discord.gg/K4wjbvP) | [Invite](https://discordapp.com/api/oauth2/authorize?client_id=653941114751156236&permissions=0&scope=bot) ")

 message.channel.send(support)
};

exports.conf = {
  enabed: false,
  guildOnly: false,
  aliases: [],
 
};

exports.help = {
  name: "support",
  category: "Miscelaneous",
  description: "shows you the invites here are",
  usage: "support"
};
