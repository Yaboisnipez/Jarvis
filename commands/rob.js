const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`money_${user.id}`) 
    let author = await db.fetch(`money_${message.author.id}`) 


    if (!user) {
        return message.channel.send('Sorry, you forgot to mention somebody.')
    }
    if (author < 250) { 
        return message.channel.send(':x: You need atleast 250$ to rob somebody.')
    }

    if (targetuser < 0) { 
        return message.channel.send(`:x: ${user.user.username} does not have anything to rob.`)
    }


    let random = Math.floor(Math.random() * 200) + 1; 


    let embed = new Discord.RichEmbed()
    .setDescription(`${message.author} you robbed ${user} and got away with ${random}!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)


    db.subtract(`money_${user.id}`, random)
    db.add(`money_${message.author.id}`, random)
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "rob",
  category: "Miscelaneous",
  description: "robs a user",
  usage: ""
};
