const Discord = require("discord.js")

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
 if(message.author.id !== "632020134289997824") {
    let q = new Discord.RichEmbed()
    .setTitle("Only my developer can use this command")
    message.channel.send(q)
    return
  }
  
  
  await message.channel.send("<a:8299_Loading:669282799597125652> Bot is Restarting...")
  process.exit(0);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [], 
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
  usage: "reboot"
};