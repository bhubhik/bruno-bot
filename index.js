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
  if(msg.content === '!meme'){
    msg.channel.send("Lu hasnus hajur! hahaha");
    const img = await getMeme();
    msg.channel.send(img);
  }
});


async function getMeme(){
  try {
    const res = await axios.get('https://meme-api.com/gimme/memes');
    return res.data.url;
  } catch (error) {
    console.error('Error fetching meme:', error);
    return 'Failed to fetch a meme. Sorry!';
  }
}


// Make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); 
