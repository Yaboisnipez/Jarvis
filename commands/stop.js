const settings = require('../settings.json');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  
  
   let musicEnabled = settings.musicEnabled;
  
  if (settings.musicEnabled !== "true"){
    message.channel.send('Commands are disabled');
    return
  }  
  
	const serverQueue = client.musicQueue.get(message.guild.id);

	if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
	if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end('Stop command has been used!');
	return undefined;
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: []
};

exports.help = {
	name: 'stop',
	category: 'Music',
	description: 'Stops the music and clears the queue',
	usage: 'stop'
};