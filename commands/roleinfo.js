const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let role = args.join(` `);
  if (!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Couldn't find that role.");

  const status = {
    false: "No",
    true: "Yes"
  };

  let roleemebed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("ID", gRole.id, true)
    .addField("Name", gRole.name, true)
    .addField("Mention", `\`<@${gRole.id}>\``, true)
    .addField("Hex", gRole.hexColor, true)
    .addField("Members", gRole.members.size, true)
    .addField("Position", gRole.position, true)
    .addField("Hoisted", status[gRole.hoist], true)
    .addField("Mentionable", status[gRole.mentionable], true)
    .addField("Managed", status[gRole.managed], true)
    .setFooter("Made by shawn hamby");

  message.channel.send(roleemebed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "roleinfo",
  category: "Moderation",
  description: "Allows you to add or remove a single role from a user",
  usage: "roleinfo [role name]"
};
