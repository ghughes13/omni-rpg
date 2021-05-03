const Discord = require("discord.js");
const client = new Discord.Client();

const hunt = require("./commands/hunt");
const shop = require("./commands/shop/shop");
const buy = require("./commands/shop/buy");

require("dotenv").config();

client.once("ready", () => {
  console.log("running");
});

client.on("message", (msg) => {
  let msgArray = msg.content.split("");
  msg.content = msg.content.toLowerCase();

  if (msg.content === "ping") {
    msg.reply("Pong!");
  } else if (msg.content === "hunt") {
    hunt.hunt(msg);
  } else if (msg.content === "shop") {
    shop.shop(msg);
  } else if (msg.content === "buy") {
    buy.buy(msg);
  }
});

client.login(process.env.BOT_TOKEN);
