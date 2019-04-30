const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NTcwOTEzMTE2ODkyOTU0NjI0.XMGGbA.egLE5lHNPVR2lKCOuvZCTgjDXd8';

const prefix = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('guildMemberAdd', member =>{
    let guild = member.guild;
    member.guild.channels.get('571152294868156432').send(`Welcome to our server, ${member}!`)
  });

bot.on('message', message=>{
   
    if(message.content.indexOf(prefix) !==0) return;
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'website':
            message.channel.send('http://kuilin.net/cc_n/clan.php?tag=L2RJC0CV')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version ' + version);
            }else{
                message.channel.send('Invalid Args')
            }
            break; 
        case 'clear':
            if(!args[1]) return message.reply('Error plese define second arg')
            message.channel.bulkDelete(args[1]);
            break; 
    }        
    switch(args[0]){      
        case 'sendclan':
            const attachment1 = new Attachment('./My-clan.jpg')
            message.channel.send(message.author, attachment1);
        break;            
        case 'sendlogo':
            const attachment2 = new Attachment('./My-clan-logo.png');
            message.channel.send(message.author, attachment2);
        break; 
        case 'rules':
            const attachment3 = new Attachment('./rules.txt');
            message.channel.send(message.author, attachment3);   
        break;   
    }
})       

bot.login(token);