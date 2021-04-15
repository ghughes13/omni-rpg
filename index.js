const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();

client.once("ready", () => {
  console.log("running");
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login(process.env.BOT_TOKEN);
