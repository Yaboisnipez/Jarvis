const settings = require('../settings.json');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  
  
   let musicEnabled = settings.musicEnabled;
  
  if (settings.musicEnabled !== "true"){
    message.channel.send('Commands are disabled');
    return
  }  
  
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  	if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Resumed the music for you!');
		}
		return message.channel.send('There is nothing playing.');
    
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	
};

exports.help = {
	name: 'resume',
	category: 'Music',
	description: 'Continues a paused song',
	usage: 'resume'
};