const Discord = require("discord.js");
const bump = new Set();
const Premium = require("../databases/premium.js");
const mongoose = require("mongoose");
const settings = require("../settings.json");

//  if (talkedRecently.has(message.guild.id)) {
//             msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
//     } else {

//           

//         // Adds the user to the set so that they can't talk for a minute
//         talkedRecently.add(msg.author.id);
//         setTimeout(() => {
//        
//           talkedRecently.delete(msg.author.id);
//         }, 8.28e7);
//     }





exports.run = async (client, message, args) => {
  
  if (settings.bump !== "true") {
    message.channel.send("COMMAND HAS BEEN REMOVED")
  return
}
  
  if (bump.has(message.guild.id)) {
           message.channel.send("Wait 23 hours before bumping your server again");
    } else {
  
  const member = message.guild.members.filter(member => !member.user.bot).size;
  const online = message.guild.members.filter(
    u => u.user.presence.status === "online"
  ).size;
  const idle = message.guild.members.filter(
    u => u.user.presence.status === "idle"
  ).size;
  const offline = message.guild.members.filter(
    u => u.user.presence.status === "offline"
  ).size;
  const dnd = message.guild.members.filter(
    u => u.user.presence.status === "dnd"
  ).size;
  const channel = message.guild.channels.size;
  const region = message.guild.region;
  const roles = message.guild.roles.size;
  const online2 = "<:online:313956277808005120>";
  const offline2 = "<:offline:313956277237710868>";
  const idle2 = "<:away:313956277220802560>";
  const dnd2 = "<:dnd2:464520569560498197>";
  const join = "<a:blobjoin:669282799836200972>";
  const user = message.author.username;
  const message3 = args.join(" ");
  const guild = message.guild.name;
  const time = message.createAt;
  let Invite = await message.guild.channels
    .find(c => c.type === "text")
    .createInvite();
  let dump = args.join(" ")
  
    if(!dump) {
message.channel.send("Please enter a text for me to added to bump command")
    }

  Premium.findOne({ userID: message.author.id }, (err, Premium) => {
    if (err) console.log(err);

    let error = new Discord.RichEmbed()
    .setTitle("Bump Command")
    .setFooter(`${time}`);

    if (!Premium) {
      error.addField(`${user}`, "You dont haver permium to use this command");
      return message.channel.send(error);
    } else {
      let embed = new Discord.RichEmbed()
        .setTitle(`${guild} | Bumped`)
        .setColor("#00FBFF")
      .setDescription(`${dump}`)
        .addField(
          `👨‍👩‍👦‍👦 ${member}`,
          `${online2} ${online} | ${idle2} ${idle} | ${dnd2} ${dnd} | ${offline2} ${offline} | 🗨️ ${channel} | 🛡️ ${roles} | 🌐 ${region} | ${join} [Join Now](${Invite.url}) | ${join} [Firefox Support Server](https://discord.gg/U2EnhgE)`,
          true
        );
      
      client.guilds.forEach(function(guild) {
                       let channel = client.guilds.channels.find("name", "npmtesting") 
                       channel.sendMessage(embed)
                            });
      
      // message.channel.send(embed)
      
      // let bump3 = message.guilds.channels.find(`name`, `bump`);
  // if (!bump3)
     // return message.channel.send("i can not find" + ` bump` + " channel");

//   message.delete().catch(O_o => {});
//   bump.send(embed);

      // return message.channel.send("THIS COMMAND IS UNDER DEVELOPMENT")
      
      bump.add(message.guild.id);
       setTimeout(() => {       
          bump.delete(message.guild.id);
      }, 8.28e7);
      
          }
    
      });

    }
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'check',
	category: 'Miscelaneous',
	description: 'Checks on the bots permission if bot permission a <:1300_TickYes_Night:669282867028819968> if not <:1024_TickNo_Night:669282867079282688>',
	usage: 'check'
};

