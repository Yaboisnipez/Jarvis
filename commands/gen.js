const fs = require("fs");
const Discord = require("discord.js");

const genNames = ["HULU", "NORDVPN", "SPOTIFY", "NETFLIX", "FORTNITE", "NITRO"];
const fileNames = [
  "./hulu.txt",
  "./Nordvpn.txt",
  "./Spotify.txt",
  "./Netflix.txt",
  "./Fortnite.txt",
  "./Nitro.txt"
];

exports.run = async (client, message, args, level) => {
  var cmd = message.content.split(" ");

  if (cmd[1].toUpperCase() === "LIST") {
    message.channel.send(accList);
  } else if (genNames.includes(cmd[1].toUpperCase()) && cmd[1]) {
    gen(cmd[1].toUpperCase(), function(account) {
      const m = message
        .reply(
          "Look in dms for your account! If it doesn't work make sure you dm a staff member!"
        )
        .then(() => {
          message.author.send(`<@${message.author.id}> ` + account);
          setTimeout(function() {
            m.delete();
            console.log("deleted");
          }, 5000);
        });
    });
  } else {
    message.guild.channel.send("Invalid account.");
  }
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

function gen(acc, callback) {
  var index = genNames.indexOf(acc);
  console.log(fileNames[index]);
  fs.readFile(fileNames[index], "utf8", (err, data) => {
    if (err) throw err;
    var credStr = data;
    var creds = credStr.split("\n");
    callback(creds[Math.floor(Math.random() * creds.length)]);
  });
}

const accList = new Discord.RichEmbed().setColor(0x00a2e8);

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "gen",
  category: "Miscelaneous",
  description: "shows you the help commands",
  usage: "help"
};
