const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, msg, args, member) => {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    let ed = new Discord.RichEmbed().setTitle(
      "You dont have access to that command you need permision `ADMINISTRATOR`"
    );
    msg.channel.send(ed);
    return;
  }

  let level = args.join(" ");
  let setup5 = new Discord.RichEmbed().setTitle(
    "I have set the level enabled to" + ` ${level}`
  );
  msg.channel.send(setup5);
  db.set(`level_${msg.guild.id}`, level);
};

exports.conf = {
  enabed: false,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "levelEnabled",
  category: "Miscelaneous",
  description: "Turns on or off the welcome command",
  usage: "levelEnabled [true/false]"
};
