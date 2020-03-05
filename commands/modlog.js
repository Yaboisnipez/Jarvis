const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args, member) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) {
    let ed = new Discord.RichEmbed()
    .setTitle('<:cancel:568135309972209689> You dont have access to that command')
    message.channel.send(ed)
  return
  }  


 let modlog = args.join(" ")
 let setup = new Discord.RichEmbed().setTitle('<:checked:568135310165278902> I have set the mog log channel to' + ` ${modlog}`)
 message.channel.send(setup)
 db.set(`modlog_${message.guild.id}`, modlog)
};

exports.conf = {
  enabed: false,
  guildOnly: false,
  aliases: [],
  
};

exports.help = {
  name: "modlog",
  category: "Miscelaneous",
  description: "setup your mod log channel",
  usage: "modlog [name of your channel]"
};
