const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [day], H [hours], m [minute], s [second]");
  let embed = new Discord.RichEmbed()
  .setTitle('Jarvis Stats')
  .addField('Ram Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField('Uptime', `${duration}`, true)
  .addField('Users', `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField('Servers', `${client.guilds.size.toLocaleString()}`, true)
  .addField('Channels', `${client.channels.size.toLocaleString()}`, true)
  msg.channel.send(embed)

};
//• Ram Usage           :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
//• Uptime              :: ${duration}
// • Users               :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
// • Servers             :: ${client.guilds.size.toLocaleString()}
// • Channels            :: ${client.channels.size.toLocaleString()}
// • Discord.JS Version  :: v${Discord.version}`);

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botinfo","stats"],
 
};
exports.help = {
  name: 'stats',
  description: 'Shows the stats of the bot',
  usage: 'stats'
};  