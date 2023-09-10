require('dotenv').config(); 
const { default: axios } = require('axios');
const { Client, GatewayIntentBits  } = require('discord.js'); 

const client = new Client({ 
  intents : [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
}); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async msg => {
  if (msg.content.toLowerCase() === 'vok lagyo') {
    msg.reply('Vukk na ta!');
  }
})


// Make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); 
