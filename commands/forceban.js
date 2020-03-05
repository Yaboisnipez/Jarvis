const db = require("quick.db");

exports.run = async (client, message, args, level) => {
  
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    let ed = new Discord.RichEmbed().setTitle(
      "<:cancel:568135309972209689> You dont have access to that command you need `KICK_MEMBERS``"
    );
    message.channel.send(ed);
    return;
  }
  
  // eslint-disable-line no-unused-vars
  let modlogChannel = await db.fetch(`modlog_${message.guild.id}`);

  const guildSettings = message.guild.id;
  const Discord = require("discord.js");
  // const { caseNumber } = require("../util/caseNumber.js");
  let member = args[0];
  if (isNaN(member)) return message.reply("<:cancel:568135309972209689> Please give a user ID to ban");

  const modlog = message.guild.channels.find("name", modlogChannel);
  // const caseNum = await caseNumber(client, modlog);
  const reason =
    args.splice(1, args.length).join(" ") || "No reason"
    // `Awaiting moderator's input. Use ^reason ${caseNum} <reason>.`;

  message.guild
    .ban(member)
    .then(() => {
      message.reply(
        `${member} has been force banned by ${message.author.tag} because: ${reason}`
      );
      if (!modlog)
        return console.log("<:cancel:568135309972209689> modLogChannel does not exist on this server");
      const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("User force banned")
        .addField("User", `${member}`, true)
        .addField(
          "Moderator",
          `${message.author.tag} (${message.author.id})`,
          true
        )
        .addField("Reason", `${reason}`, true)
        // .setFooter(`Case ${caseNum}`);
      modlog
        .send({ embed })
        .then(() => {
          console.log(
            "log",
            `${message.guild.name}/#${message.channel.name} (${message.channel.id}): ${member} was force banned by ${message.author.tag} (${message.author.id})`,
            "CMD"
          );
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(error =>
      message.reply(`Sorry, I couldn't ban because of : ${error}`)
    );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "forceban",
  category: "Moderation",
  description: "Bans a user by user ID",
  usage: "forceban [user ID] [reason]"
};
