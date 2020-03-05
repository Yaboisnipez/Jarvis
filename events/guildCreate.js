const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('../settings.json');

var prefix = settings.prefix;

const girismesaj = [
  '**Bot Added to Server'
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'help | ' + client.guilds.size + ' Server | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' user');
  
})
