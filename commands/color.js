const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    let ed = new Discord.RichEmbed().setTitle(
      "<:cancel:568135309972209689> You dont have access to that command you need `ADMINISTRATOR`"
    );
    message.channel.send(ed);
    return;
  }
  
  let color = args.join(" ");
  let colorem = new Discord.RichEmbed().setTitle(
    "<:checked:568135310165278902> I have set the color is set to" + ` ${color}`
  );
  message.channel.send(colorem);
  db.set(`color_${message.guild.id}`, color);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "color",
  category: "Miscelaneous",
  description: "Set the color",
  usage: "color [#fcba03]"
};
