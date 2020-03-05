exports.run = async (client, message, args) => {
  let xp = require("../xp.json");
  
    if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
    
  }
  let curxp  = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;
  
  
  let fetch = require("node-fetch")
  
let {
    Canvas
} = require("canvas-constructor")
let Discord = require("discord.js")
message.channel.send(new Discord.Attachment(new Canvas(500, 300)
    .setColor("black")                                       
    .setGlobalAlpha("0.9")
    .addRect(0, 0, 500, 300)
    .setTextFont('28px sans-serif')
    .setColor("blue")
    .addText(`Level ${curlvl}`, 375, 150)
    
    .toBuffer(), "level.png"
))
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["c"],
  permLevel: 0
};

exports.help = {
  name: "testlevel",
  category: "user",
  description: "Shows the level you are at",
  usage: "level"
};
