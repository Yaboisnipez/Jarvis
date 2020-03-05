const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {


    if (!message.member.hasPermission('MANAGE_GUILD')) { 
        return message.channels.send('You\'re missing the permission `MANAGE_GUILD` to use this command.').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2500); 
        })
    }

    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to remove.`) 
    db.subtract(`money_${user.id}`, args[0]) 
    let bal = await db.fetch(`money_${user.id}`)

    let embed = new Discord.RichEmbed()
    .setAuthor(`Removed Money!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}$`)
    .addField(`Balance Updated`, `${bal}$`)
    .setColor("RED") // random = "RANDOM"
    .setTimestamp()

    message.channel.send(embed)

}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "remove-money",
  category: "Miscelaneous",
  description: "deletes all your money",
  usage: ""
};
