const Discord = require("discord.js");
const mongoose = require("mongoose")
const Contact = require("../databases/contact.js")

module.exports.run = async (client, message, args) => {
  // if(args[0] == "help"){
  //     let helpembxd = new Discord.RichEmbed()
  //     .setColor("#00ff00")
  //     .addField("Contact Command", "Usage: !Contact <reason>")

  //     message.channel.send(helpembxd);
  //     return;
  //   }

  let Invite = await message.guild.channels
    .find(c => c.type === "text")
    .createInvite();
  let Sender = message.author;
  const sayMessage = args.join(" ");
  if (!sayMessage)
    return message.channel
      .send("<:cancel:568135309972209689> Please give us reason for contacting")
      .then(msg => {
        msg.delete(5000);
      });

  let contact = new Discord.RichEmbed()
    .setColor("00ff00")
    .setThumbnail(Sender.displayAvatarURL)
    .setDescription(
      `Contact message from [${message.guild.name}](${Invite.url})`
    )
    .setTitle("Message from contact command!")
    .addField("User", Sender, true)
    .addField("User ID: ", Sender.id, true)
    .addField("Message: ", sayMessage)
    .setTimestamp();

  client.users.get("632020134289997824").send(contact);

  let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Message Sent!")
    .setDescription("Your contact message has been sent!")
    .addField("Reqested by ", Sender)
    .addField("Message: ", sayMessage)
    .setFooter("Thanks you for contacting with the `Firefox support!`");

  message.channel.send(embed).then(msg => {
    msg.delete(10000);
    // msg.channel.send("You can also contact me at ```firefoxbusinessdiscordbot@gmail.com```")
//     _id: mongoose.Schema.Types.ObjectId,
  // guild: String,
  // username: String,
  // message: String,
  // time: String,
  // invite: String
    
     const contact = new Contact({
    _id: mongoose.Types.ObjectId(),
      guild: message.guild.name,
     user: message.author.id,
    message: sayMessage,
    time: message.createdAt,
    invite: Invite.url
    
  });
  
  contact.save()
  // .then(result => console.log(result))
  .catch(err => console.log(err));
  
    
  });

  message.delete();
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "contact",
  category: "Miscelaneous",
  description: "Conacts the owner",
  usage: "contact <reason>"
};
