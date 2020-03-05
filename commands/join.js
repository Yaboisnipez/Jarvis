const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        let embed = new Discord.RichEmbed()
        .setDescription('Joined Voice Channel.')
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
	name: 'join',
	category: 'Miscelaneous',
	description: 'joins your vc channel you are in',
	usage: 'join'
};

