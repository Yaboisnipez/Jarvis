const settings = require('../settings.json');
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => { 
  
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  let current = new Discord.RichEmbed()
  .setDescription(`The current volume is: **${serverQueue.volume}**`)
  .setColor("#00f2ff")
  
  let set = new Discord.RichEmbed()
  .setDescription(`I set the volume to: **${args[0]}**`)
  .setColor("#00f2ff")
  
  if (args[0] > 100) {
    return message.channel.send("Please set the volume to 1-100 that it")
  }
  
   const { voiceChannel } = message.member;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		if (!args[0]) return message.channel.send(current);
		serverQueue.volume = args[0]; 
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
		return message.channel.send(set);
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
};

exports.help = {
	name: 'volume',
	category: 'Music',
	description: 'Set the volume to what you want',
	usage: 'volume [1-100]'
};