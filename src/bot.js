const Telebot = require("telebot");

const bot = new Telebot({
  token: "5694420943:AAG6aV-vjFu4QvRUT08ayv8Z1HbqL-UG27Q",
  polling: {
    interval: 1000,
  },
});

bot.on("text", (msg) => {
  msg.reply.text("[+] Bot: " + msg.text);
});

bot.start();
