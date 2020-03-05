const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args, level) => {
  
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || "-"
  
 let color = await db.fetch(`color_${message.guild.id}`) 

let me = new Discord.RichEmbed()
  .setTitle('Mods Command')
  .addField(`${prefix}conf`, ` Shows all the settings of the guild ${prefix}conf`)
  .addField(`${prefix}support`, ` Gives you thr links ${prefix}support`)
  .addField(`${prefix}stats`, ` Shows you the stats of the bot ${prefix}stats`)
  .addField(`${prefix}roleinfo`, ` Shows you the info of the role ${prefix}roleinfo [name of role]`)
  // .addField('```^severinfo```', ` Shows you the server info` + ' ` ^serverinfo`')
  .addField(`${prefix}report`, ` Lets you report a user ${prefix}report [ping user] [reason]`)
  .addField(`${prefix}ping`, ` Shows you checking response time ${prefix}ping`)
  // .addField('```^level```', ` Shows you are at` + ' ` ^level`')
 
  .setColor(`${color}`)
  // .setFooter('There are' + " commands" + ` 17` + ' More commands comeing soon')
message.channel.send(me)
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'usercommands',
	category: 'Miscelaneous',
	description: 'shows you the user commands',
	usage: 'usercommands'
};
