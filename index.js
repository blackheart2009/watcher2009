/*jshint -W030 */
/* eslint no-eval: 0 */
/* jshint expr: true */
/*jshint -W082 */
/*jshint -W061 */
const { Client, Attachment } = require('discord.js');
const bot = new Client();
const vm = require('vm');
const codeContext = {};
vm.createContext(codeContext);

const token = '';

const prefix = '!';

var version = '1.0.1';

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('guildMemberAdd', member => {
    let guild = member.guild;
    member.guild.channels.get('573754852375658496').send(`━━━Hey ${member}!, Welcome to our server!━━━`);
});

bot.on('message', message => {
    if(message.content.startsWith("!ping")) {
        message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
    }
});                

bot.on('message', message => {

    if (message.content.indexOf(prefix) !== 0) return;
    let args = message.content.toLowerCase().substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'cclink':
            message.channel.send('http://kuilin.net/cc_n/clan.php?tag=L2RJC0CV');
            break;
        case  'fwastatslink':
            message.channel.send('http://fwastats.com/Clan/L2RJC0CV');
            break;
        case  'recruitmentpost':
            message.channel.send('https://band.us/band/67130116/post/48014');
            break;        
        case 'botinfo':
            message.channel.send('Watcher is designed for CHAMPIONS clan. Messages sent by the user will be displayed there and sending a message in that channel will also forward it to that user. This bot is different from the others as it is the one and only private bot, design for CHAMPIONS clan only. This means that it is ensured to be hosted 24/7 without you having to pay extra hosting fees.');
            break;
        case 'clear':
            if (message.member.roles.find(r => r.name === "BOSS")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
                .then(msg => msg.delete(10000));
            if (!args[1]) return message.reply('Error plese define second arg');
            message.channel.bulkDelete(args[1]);
            break;
    }
    switch (args[0]) {
        case 'clanprofile':
            const attachment1 = new Attachment('./My-clan.jpg');
            message.channel.send(message.author, attachment1);
            break;
        case 'clanlogo':
            const attachment2 = new Attachment('./My-clan-logo.png');
            message.channel.send(message.author, attachment2);
            break;
        case 'rules':
            const attachment3 = new Attachment('./rules.txt');
            message.channel.send(message.author, attachment3);
            break;
    }
    switch (args[0]) {
        case 'kick':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('You were kick for trolling!').then(() => {
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply("That user isn\'t in this guild");
                }
            } else {
                message.reply("You need to specify a person!");
            }

            break;
    }
    switch (args[0]) {
        case 'ban':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.ban({ ressions: 'You Were Bad!' }).then(() => {
                        message.reply(`Sucessfully Banned! ${user.tag}`);
                    });
                } else {
                    message.reply("That user isn\'t in this guild");
                }
            } else {
                message.reply("You need to specify a person!");
            }

            break;
    }
    switch (args[0]) {
        case 'eval':
            const code = args.splice(1).join(" ");
            const wl = ['452873519433383946'];
            if (wl.includes(message.author.id)) {
                const token = client.token.split("").join("[^]{0,2}");
                const rev = client.token.split("").reverse().join("[^]{0,2}");
                const filter = new RegExp(`$'{token}' | ${rev}`, "g");
                try {
                    let output = eval(code);
                    if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await, output;
                    output = inspect(output, { depth: 0, maxArrayLength: null });
                    output = output.replace(filter, "[TOKEN]");
                    output = clean(output);
                    if (output.length < 1950) {
                        message.channel.send(`\`\`\`js\n${ output }\n\`\`\`);    
                } else {
                    message.channel.send($,{output}`, {split:"\n", code:"js"});
            }
        } catch (error) {
            message.channel.send(`The following error occured\`\`\`js\n${ error }\`\`\``);
        }

  function clean(text)  {
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    }
    } else {
        message.reply('\t FUCK OFF!!');
        message.channel.send('Unauthorized Access!!');
    }
    break;

    }

    });

bot.login(token);
