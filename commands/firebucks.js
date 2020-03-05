const settings = require("../settings.json");
const Discord = require("discord.js")
const Premium = require("../databases/premium.js")
const mongoose = require("mongoose");
const Money = require("../databases/money.js");

exports.run = async (client, message, args, level) => {
  
//   await message.delete();
//   // if (message.author.id !== "632020134289997824") return;
  
  
//    Premium.findOne(
//     { userID: message.author.id},
//     (err, Premium) => {
//       if(err) console.log(err);
 
    
//       Money.findOne(
//     { userID: message.author.id, serverID: message.guild.id },
//     (err, money) => {
//       if(err) console.log(err); 
      
      
 
//  let embed = new Discord.RichEmbed()
//       .setTitle("Firebucks Command")
//       .setColor("#ffff")
//       .setThumbnail(message.author.displayAvatarURL)
          
      
      
//       if (!Premium) {
//         embed.addField(`${message.author.username}`, "you do not have premium to use this command", true)
//         return message.channel.send(embed);
//       } else {
        
        
//         if (!money) {
//         embed.addField("Fire Bucks", "0", true)
//         return message.channel.send(embed);
//       } else {
//         embed.addField("Firefox Bucks", money.money, true);
//         return message.channel.send(embed)
      
//       }
        
//       let firebucks = new Discord.RichEmbed()
//       .setTitle("Fire Bucks")
//       .setColor("#ffff")
//       .setThumbnail(message.author.displayAvatarURL)
//         return message.channel.send(firebucks)
     
//       }
   
    
  
//     })
//    })
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "firebucks",
  category: "Music",
  description: "Stops the music and clears the queue",
  usage: "stop"
};
