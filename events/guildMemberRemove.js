module.exports = member => {
  let guild = member.guild;
  member.send('Goodbye We will miss you');
  guild.defaultChannel.send(`${member.user.username} gone.`);
};