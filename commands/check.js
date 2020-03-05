const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const settings = require('../settings.json');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  
  const yes = "<:1300_TickYes_Night:669282867028819968>"
  const no = "<:1024_TickNo_Night:669282867079282688>"
  
      let permissions = new Discord.RichEmbed()
        .setTitle("Permission Checker")
      .setColor("#8BFFF0")
      

      if (!permissions.has("CONNECT")) {
       permissions.addField(`${yes} Connect`, 'Yes i can now connect to music commands')
         // message.channel.send(permissions)
      } else {
        permissions.addField(`${no} Connect`, 'I need permission to connect to voice channels')
         message.channel.send(permissions)
      }
     if (message.guild.me.hasPermission("SPEAK")) {
      permissions.addField(`${yes} Speak`, 'Yes now i can play music')
        message.channel.send(permissions)
     }
  }
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'check',
	category: 'Miscelaneous',
	description: 'Checks on the bots permission if bot permission a <:1300_TickYes_Night:669282867028819968> if not <:1024_TickNo_Night:669282867079282688>',
	usage: 'check'
};

