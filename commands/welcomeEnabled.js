const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) {
    let ed = new Discord.RichEmbed()
    .setTitle('You dont have access to that command you need permision `ADMINISTRATOR`')
    message.channel.send(ed)
  return
  }  


 let welcomeEnbaled = args.join(" ")
 let WelcomeChannel = new Discord.RichEmbed().setTitle('I have set the welcome enabled is set to' + ` ${welcomeEnbaled}`)
 message.channel.send(WelcomeChannel)
 db.set(`welcomeEnabled_${message.guild.id}`, welcomeEnbaled)
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3 
};

exports.help = {
  name: "welcomeEnabled",
  category: "Miscelaneous",
  description: "Enableds the welcome command",
  usage: "welcomeEnabled [true/false]"
};
