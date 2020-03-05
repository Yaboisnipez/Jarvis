const Discord = require('discord.js');
const ms = require('ms')
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("KICK_MEMBERS")) {
    let ed = new Discord.RichEmbed()
    .setTitle('<:cancel:568135309972209689> You dont have access to that command you need permision `Kick Members`')
    message.channel.send(ed)
  return
  }  


  
  let mute = settings.mute;
  
  if (settings.mute !== "true") return;
  
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send('<:cancel:568135309972209689> Can not find user');
  let muterole = message.guild.roles.find(`name`, "Firefoxs.mute");
  if(!muterole) {
    try{
      muterole = await message.guild.createRole({
        name: "Firefoxs.mute",
        color: "RANDOM",
        permissions:[]
      }) 
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          READ_MESSAGES: true
        });
      });
    }catch(e){
      message.channel.send(e.stack)
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("<:cancel:568135309972209689> Please put a time");
  
  await(tomute.addRole(muterole.id));
  let emb = new Discord.RichEmbed().setDescription((`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`));
  message.channel.send(emb)
  
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted`)
  }, ms(mutetime))
};

exports.conf = {
  enabled: true, //we enabled the code
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['dospeak','m'], //farklı çağrılar ekledik
   
};

exports.help = {
  name: 'mute', //adını belirledik (kullanmak için gereken komut)
  description: 'Mutes a user you need a role called `Firefoxs.mute`', //açıklaması
  usage: 'mute [username] [time]' 
};
