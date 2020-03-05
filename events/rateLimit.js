const Discord = require('discord.js')
const db = require('quick.db')

module.exports = async (client, message) => {
  let modlog = db.fetch(`modlog_${message.guild.id}`)
  let rate = client.channels.get(`${modlog}`); 
  let em = new Discord.RichEmbed()
  .setTitle(`${message.user.username}` + ' has reached the rate limits')
  rate.send(em)
}