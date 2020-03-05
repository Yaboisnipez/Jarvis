const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, level) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    let ed = new Discord.RichEmbed().setTitle(
      "<:cancel:568135309972209689> You dont have access to that command you need `KICK_MEMBERS``"
    );
    message.channel.send(ed);
    return;
  }

  let modlogChannel = await db.fetch(`modlog_${message.guild.id}`);

  const guildSettings = message.guild.id;
  const Discord = require("discord.js");
  // const { caseNumber } = require("../util/caseNumber.js");
  let member = message.mentions.members.first();
  if (!member)
    return message.reply(" <:cancel:568135309972209689> Please mention a valid member of this server");
  if (!member.bannable)
    return message.reply(
      "<:cancel:568135309972209689> I cannot ban this user! Do they have a higher role? Do I have ban permissions?"
    );
  const modlog = client.channels.find("name", modlogChannel);
  // const caseNum = await caseNumber(client, modlog);
  const reason =
    args.splice(1, args.length).join(" ") || "No Reason"
    // `Awaiting moderator's input. Use ${guildSettings.prefix}reason ${caseNum} <reason>.`;

  message.guild
    .ban(
      member,
      `{message.author.username} ba$nned this user with reason: ${reason}`
    )
    .then(() => {
      message.reply(
        `${member.user.tag} (${member.user.id}) has been banned by ${message.author.tag} because: ${reason}`
      );
      //if (!modlog) return console.log('modLogChannel does not exist on this server');
      const embed = new Discord.RichEmbed()
        .setTitle("User Banned")
        .addField(`User`, `${member.user.tag} (${member.user.id})`, true)
        .addField(
          `Moderator`,
          `${message.author.tag} (${message.author.id})`,
          true
        )
        .addField(`Reason`, `${reason}`, true)
        // .setFooter(`Case ${caseNum}`);
      if (modlog)
        modlog
          .send({ embed })
          .then(() => {
            client.log(
              "log",
              `${message.guild.name}/#${message.channel.name} (${message.channel.id}): ${member.user.tag} (${member.user.id}) was banned by ${message.author.tag} (${message.author.id})`,
              "CMD"
            );
          })
          .catch(err => {
            console.log(err);
          });
    })
    .catch(error =>
      message.reply(
        `Sorry ${message.author} I couldn't ban because of : ${error}`
      )
    );
};

exports.conf = {
  enabled: true, //we enabled the code
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ["premetremove"] //farklı çağrılar ekledik
};

exports.help = {
  name: "ban", //adını belirledik (kullanmak için gereken komut)
  description: "Bans you user you mention with the reason", //açıklaması
  usage: "ban [username] [reason]"
};
