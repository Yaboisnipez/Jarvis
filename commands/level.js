const { Canvas } = require('canvas-constructor');
const { Attachment } = require('discord.js');
const { resolve, join } = require('path');
const fetch = require('node-fetch');
let xp = require("../xp.json");
const db = require("quick.db")

const imageUrlRegex = /\?size=2048$/g;
const placeholder = new Map();


exports.run = async (client, message, args) => {
  

  
  const key = `${message.guild.id}-${message.author.id}`;

  try {
    if (!placeholder.has(key)) {
      placeholder.set(key, {
        user: message.author.id, guild: message.guild.id, points: 500, level: 17
      });
    }
    

    const buffer = await profile(message, placeholder.get(key));
    const filename = `profile-${message.author.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await message.channel.send(attachment);
    
  } catch (error) {
    client.logger.error(error.stack);
    return message.channel.send(`An error ocurred: **${error.message}**`);
  }
};

async function profile(message, score) {
  const key = `${message.guild.id}-${message.author.id}`;
  const member = message.member;
  const { level, points } = placeholder.get(key);
//   Level 
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

//  end of level
  try {
    const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, '?size=128'));
    if (!result.ok) throw new Error('<:cancel:568135309972209689> Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.displayName.length > 30 ? member.displayName.substring(0, 17) + '...'
      : member.displayName;

    return new Canvas(400, 180)
      .setColor('#7289DA')
      .addRect(84, 0, 316, 180)
      .setColor("#2C2F33")
      .addRect(0, 0, 84, 180)
      .addRect(169, 26, 231, 46)
      .addRect(224, 108, 176, 46)
      .setShadowColor('rgba(22, 22, 22, 1)')
      .setShadowOffsetY(5)
      .setShadowBlur(10)
      .addCircle(84, 90, 62)
      .addCircularImage(avatar, 85, 90, 64)
      .save()
      .createBeveledClip(20, 138, 128, 32, 5)
      .setColor('#23272A')
      .fill()
      .restore()
      .setTextAlign('center')
      .setTextFont('18pt Klavika Regular')
      .setColor('#FFFFFF')
      .addText(name, 285, 54)
      .addText(`Level: ${curlvl}`, 84, 159)
      .setTextAlign('left')
      .addText(`Xp: ${curxp}` + "/" + `${difference}`, 241, 136)
      .toBuffer();
      
  } catch (error) {
    await message.channel.send(`<:cancel:568135309972209689> An error occurred: **${error.message}**`);
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "level",
  category: "user",
  description: "Shows the level you are at",
  usage: "level"
};
