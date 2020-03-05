const Discord = require('discord.js')
const Premium = require("../databases/premium.js")
const mongoose = require("mongoose");
const settings = require("../settings.json");


exports.run = async (client, message, args) => {
 
  // Premium
  
 Premium.findOne(
    { userID: message.author.id},
    (err, Premium) => {
      if(err) console.log(err);
 
    
 
 let embed = new Discord.RichEmbed()
      .setTitle("Eco Commands")
      .setColor("#ffff")
      .setThumbnail(message.author.displayAvatarURL)
          
      
      
      if (!Premium) {
        embed.addField(`<:cancel:568135309972209689>` + ` ${message.author.username}`, "you do not have premium to use this command", true)
        return message.channel.send(embed);
      } else {
        // embed.addField('```^firebucks```', `Shows you your money you have`, true);
        
        return message.channel.send(embed)
      console.log("not working")
      }
   
    
  
  
   })
},
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    
  },
    exports.help = {
  name: 'eco',
	description: 'The eco commands are for premium user only',
	usage: '^eco'
  };