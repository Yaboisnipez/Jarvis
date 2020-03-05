const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, dbb) => {
  let welcomeChannel =
    (await db.fetch(`welcomeChannel_${message.guild.id}`)) || "Channel ID";
  let welcome =
    (await db.fetch(`welcome_${message.guild.id}`)) || "Welcome to the server";
  let welcomeEnabled =
    (await db.fetch(`welcomeEnabled_${message.guild.id}`)) || "true";
  let modlog = (await db.fetch(`modlog_${message.guild.id}`)) || "Channels ID";
  let color = (await db.fetch(`color_${message.guild.id}`)) || "#00FCF0";
  let level = await db.fetch(`level_${message.guild.id}`);
  //let ticket = await db.fetch(`ticketChannel_${message.guild.id}`)

  let conf = new Discord.RichEmbed()
    .setTitle("Conf Command")
    .addField(
      `User`,
      "The command is under work i am making something on my end please wait for next update"
    )
    .addField("welcomeMessage", `${welcome}`, true)
    .addField("welcomeChannel", `<#${welcomeChannel}>`, true)
    .addField("welcomeEnabled", `${welcomeEnabled}`, true)
    .addField("modlog", `${modlog}`, true)
    .addField("color", `${color}`, true)
    .addField("levelEnabled", `${level}`, true)
    //.addField("ticketChannel", `${ticket}`, true)
    .setColor("RANDOM")
    .setFooter(
      "Example" +
        " ^welcomeMessage [welcomeMessage] or try ^welcomeChannel [channel id]"
    );
  message.channel.send(conf);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "conf",
  category: "Miscelaneous",
  description: "Shows you the conf of the server",
  usage: "conf"
};
