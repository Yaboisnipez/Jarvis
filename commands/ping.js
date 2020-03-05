exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const msg = await message('Locating Ping');
	msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'ping',
	category: 'Miscelaneous',
	description: 'For checking response time',
	usage: 'ping'
};
