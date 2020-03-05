const Discord = require('discord.js')
const db = require("quick.db")
const settings = require('../settings.json');


exports.run = async (client, message, args, level) => {
   let prefix = await db.fetch(`prefix_${message.guild.id}`) || "-" 
  
 let color = await db.fetch(`color_${message.guild.id}`) 
 
let me = new Discord.RichEmbed()
  .setTitle('Music Commands')
  .addField(`${prefix}play`, ' you have to be in the vc channel to do this Eample' + ` ${prefix}play [url or name of song]`)
  .addField(`${prefix}skip`, ' Skips the song you are at example' + ` ${prefix}skip`)
  .addField(`${prefix}stop`, ' stops all the songs and leaves vc example' + ` ${prefix}stop`)
  // .addField('```^soundlevel```', ' Changes the volume or the quilty of the songs but sometime sit can change both' + ` ^soundlevel [1 - 100]`)
  .addField(`${prefix}np`, ' Shows you the song that is playing right now example' + ` ${prefix}np or ${prefix}playing`)
  .addField(`${prefix}queue`, ' Shows you the songs add to queue example' + ` ${prefix}queue`)
  .addField(`${prefix}pause`, ' Pauses the song example' + ` ${prefix}pause`)
  .addField(`${prefix}resume`, ' resumes the song example' + ` ${prefix}resume`)
  .addField(`${prefix}join`, ' joins the voice channel you are in example' + ` ${prefix}join`)
  .addField(`${prefix}leave`, ' leaves the voice the bot is in example' + ` ${prefix}leave`)
  .addField(`${prefix}search`, ' Searches the web for the song title you added' + ` ${prefix}search let her go`)
  .addField(`${prefix}volume`, ' Changes the volume to what you want' + ` ${prefix}volume [1-100]`)
  .setColor(`${color}`)
  .setFooter(`If you are having any troble with the bot please do ${prefix}support`)
message.channel.send(me)
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'music',
	category: 'Miscelaneous',
	description: 'shows you the music commands',
	usage: 'music'
};

