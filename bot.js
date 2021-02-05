require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = process.env.TOKEN
console.log('boo');
client.login(TOKEN);
console.log('foo');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
console.log('zoo');
