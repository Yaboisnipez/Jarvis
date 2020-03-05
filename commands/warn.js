const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const settings = require('../settings.json');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  
 
  
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    let ed = new {RichEmbed}.RichEmbed()
    .setTitle('You dont have access to that command you need `KICK_MEMBERS``')
    message.channel.send(ed)
  return
  }  
  
let modlogChannel = await db.fetch(`modlog_${message.guild.id}`)
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', modlogChannel);
  // const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  const reason = args.splice(1, args.length).join(' ')// || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;
  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
  // .setFooter(`Case ${caseNum}`);
  return client.channels.get(modlog.id).send({embed});
  
  //  mutes: String,
  // bans: String,
  // warns: String,
  // kicks: String
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};