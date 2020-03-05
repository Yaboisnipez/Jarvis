const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const settings = require('../settings.json');
const db = require('quick.db')

const Discord = require('discord.js')

exports.run = async (client, message, args) => {  
   let modlogChannel = await db.fetch(`modlog_${message.guild.id}`);
    // const { caseNumber } = require("../util/caseNumber.js");
  
  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");
    
  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle("Kick Command")
  .addField("Description:", `Kick a member`, true)
  .addField("Usage:", "^kick [user] [reason]", true)
  .addField("Example:" ,"^kick @Odar spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("<:cancel:568135309972209689> I cannot kick this user!");
   if(member.user.id === settings.owner) return message.channel.send("<:cancel:568135309972209689> I can't kick my owner!")

    const guildSettings = message.guild.id;
   const modlog = client.channels.find("name", modlogChannel);
  // const caseNum = await caseNumber(client, modlog);
  const reason =args.splice(1, args.length).join(" ") || `No Reason`;
    
    await member.kick(reason)
      .catch(error => message.reply(`<:cancel:568135309972209689> Sorry, I couldn't kick because of : ${error}`));

      let kick = new Discord.RichEmbed()
      .setColor("#00ff00")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", reason)
      .setTimestamp()
       // .setFooter(`Case ${caseNum}`);

  //    let modlogschannel = message.guild.channels.find(`name`, `${modlog}`);
  // if (!modlogschannel)
  //    return message.channel.send("i can not find" + ` ${modlog}` + " channel");

  message.delete().catch(O_o => {});
  modlog.send(kick);
    

  
};


exports.conf = {
  aliases: []
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};