const settings = require("../settings.json");
const Discord = require("discord.js")


exports.run = async (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setTitle("Clear")
 
  
  
const amount = args.join(' '); 

if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!'); 
if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!'); 

// if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!'); 
if (amount < 1) return message.reply('You have to delete at least 1 message!'); 

    message.channel.bulkDelete(amount).then(m => {
  embed.addField("Cleared", `${amount}`, true)
  return message.channel.send(embed)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "clear",
  category: "",
  description: "Clears amount of messsaged",
  usage: "clear [amount]"
};
