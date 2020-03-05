const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) {
    let ed = new Discord.RichEmbed()
    .setTitle('You dont have access to that command you need permision `ADMINISTRATOR`')
    message.channel.send(ed)
  return
  }  


 let welcomeChannel = args.join(" ")
 let WelcomeChannel = new Discord.RichEmbed().setTitle('I have set the welcome channel is set to' + ` ${welcomeChannel}`)
 message.channel.send(WelcomeChannel)
 db.set(`welcomeChannel_${message.guild.id}`, welcomeChannel)
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3 
};

exports.help = {
  name: "welcomeChannel",
  category: "Miscelaneous",
  description: "setups up the welcome channel you want",
  usage: "welcomeChannel [welcomemessage]"
};
