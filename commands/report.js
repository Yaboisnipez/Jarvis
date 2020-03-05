const Discord = require("discord.js");
const db = require("quick.db");
const Report = require("../databases/report.js")
const settings = require("../settings")

const mongoose = require("mongoose");
//mongoose.connect(process.env.mongodbURL, { useNewUrlParser: true });




exports.run = async (client, message, args, level) => { 
  let modlog = await db.fetch(`modlog_${message.guild.id}`)
  let rUser = message.guild.member(
    message.mentions.users.first() || message.guild.member.get(args[0])
  );
  if (!rUser) return message.channel.send("Couldn't find user");
  let reason = args.join(" ").slice(22);


  
  
  let reportEmbed = new Discord.RichEmbed()
    .setTitle("Reports")
    .setColor("#d10f12")
    .addField("Report User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);
  
  let modlogschannel = message.guild.channels.find(`name`, `${modlog}`);
  if (!modlogschannel)
     return message.channel.send("i can not find" + ` ${modlog}` + " channel");

  message.delete().catch(O_o => {});
  modlogschannel.send(reportEmbed);
  
  const report = new Report({
    _id: mongoose.Types.ObjectId(),
    username: rUser.user.username,
    userid: rUser.id,
    reason: reason,
    ruser: message.author.username,
    rid: message.author.id,
    time: message.createdAt
  });
  
  report.save()
  // .then(result => console.log(result))
  .catch(err => console.log(err));
  
  // message.channel.send("report has been saved to database8")
  
};

exports.conf = {
  enabled: true, //we enabled the code
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ["reportuser", "reports"], //farklı çağrılar ekledik permLevel: 0 // 3 = ADMINISTRATOR, 4 = Owner (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: "report", //adını belirledik (kullanmak için gereken komut)
  description: "Report a user name a reports channel", //açıklaması
  usage: "report [username] [message]"
};