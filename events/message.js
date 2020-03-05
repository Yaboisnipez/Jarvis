const settings = require("../settings.json");
const fs = require("fs");
require("../prefix.json")
//const db = require("quick.db")
// const dbb = require("../utils/mongoose");

// let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));



let talkedRecently = new Set();
module.exports = async (message) => {
//   
  let prefix = "-"
  
  // let fetched = await db.fetch(`prefix_${message.guild.id}`);
  // if (fetched === null) prefix = "^";
  // else prefix = fetched;
  
  
// let prefix = settings.prefix;

//   let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
//     if(!prefixes[message.guild.id]) {
//       prefixes[message.guild.id] = {
//         prefixes: settings.prefix
//       };
//     }

//     let prefix = prefixes[message.guild.id].prefixes;
//   // console.log(prefix)

  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;    
    cmd.run(client, message, params, perms, prefix);
  }
};
