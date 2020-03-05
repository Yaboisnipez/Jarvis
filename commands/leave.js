const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const settings = require('../settings.json');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  
  
   let musicEnabled = settings.musicEnabled;
  
  if (settings.musicEnabled !== "true"){
    message.channel.send('<:cancel:568135309972209689> Commands are disabled');
    return
  }  
      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
        let embed = new Discord.RichEmbed()
        .setDescription('Left Voice Channel.')
        .setColor('#A65EA5')
      message.channel.send(embed);
    };
  }
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'leave',
	category: 'Miscelaneous',
	description: 'leaves the voice channel you are in',
	usage: 'leave'
};

