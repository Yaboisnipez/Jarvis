const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args, level) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || "-"
  
 let color = await db.fetch(`color_${message.guild.id}`) 
 
 let user = message.author.username

let embed = new Discord.RichEmbed()
  .setTitle('Mods Command')
  .setColor(`${color}`) || "#00FBFF"
  

 if (message.member.hasPermission("MANAGE_MESSAGES")) {
  
   
  embed.addField(`${prefix}lockdown`, ` Locks down the channel ${prefix}lockdown [5 m/d/w/y]`)
  embed.addField(`${prefix}kick`, ` Kicks the user from server ${prefix}kick [mention] [reason]`)
  embed.addField(`${prefix}mute`, ` Mute a user ${prefix}mute [@user] [time]`)
  embed.addField(`${prefix}ban`, ` Bans the user from server ${prefix}ban [mention] [reason]`)
  embed.addField(`${prefix}forceban`, ` Bans the user from server ${prefix}forceban [id] [reason]`)
  embed.addField(`${prefix}warn`, ` Warns a user ${prefix}warn [mention] [reason]`)
  embed.addField(`${prefix}reason`, `Edits to case number reason if the reason is emtpy ${prefix}reason [case numner] [reason]`)
  embed.addField(`${prefix}role`, ` Lets you add and remove a role ${prefix}role add/remove [username] [rolename]`)
  embed.addField(`${prefix}softban`, 'Bans the mentioned user, clears their messages from the past two days, then unbans them' +  `${prefix}softban [mention] [reason]`)
   embed.addField(`${prefix}clear`, `Clears amount of messages you set it to ${prefix}clear [amount]`)
   
   return message.channel.send(embed)
   
   
 } else {
   
 embed.addField(`${user}`, "<:cancel:568135309972209689> You are not mod to see this command you need permissiom **`MANAGE_MESSAGES`**")
embed.addField(`${prefix}support`, 'to get support for jarvis')

   return message.channel.send(embed)
   
   }
  
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],

};

exports.help = {
	name: 'mods',
	category: 'Miscelaneous',
	description: 'shows you the mod commands',
	usage: 'mods'
};
