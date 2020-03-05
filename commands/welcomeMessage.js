const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args, member) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) {
    let ed = new Discord.RichEmbed()
    .setTitle('You dont have access to that command you need permision `ADMINISTRATOR`')
    message.channel.send(ed)
  return
  }  


 let welcomeMessage = args.join(" ")
 let Welcomemessage = new Discord.RichEmbed().setTitle('I have set the welcome message to' + ` ${welcomeMessage}`)
 message.channel.send(Welcomemessage)
 db.set(`welcome_${message.guild.id}`, welcomeMessage)
};

exports.conf = {
  enabed: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3 
};

exports.help = {
  name: "welcomeMessage",
  category: "Miscelaneous",
  description: "Setup the welcome message ps `Welcome @user` is already set",
  usage: "welcomeMessage [welcomemessage]"
};
