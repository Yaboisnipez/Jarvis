const settings = require('../settings.json');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  
  
   let musicEnabled = settings.musicEnabled;
  
  if (settings.musicEnabled !== "true"){
    message.channel.send('<:cancel:568135309972209689> Commands are disabled');
    return
  }  
  
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  	if (!serverQueue) return message.channel.send('<:cancel:568135309972209689> There is nothing playing.');
		return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**>** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
    
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'queue',
	category: 'Music',
	description: 'Check what\'s going to play',
	usage: 'queue'
};
