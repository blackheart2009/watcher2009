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

const prefix = '!';

var version = '1.0.1';

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('guildMemberAdd', member => {
    let guild = member.guild;
    member.guild.channels.get('571152294868156432').send(`Welcome to our server, ${member}!`);
});

bot.on('message', message => {

    if (message.content.indexOf(prefix) !== 0) return;
    let args = message.content.toLowerCase().substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.send('pong!');
            break;
        case 'website':
            message.channel.send('http://kuilin.net/cc_n/clan.php?tag=L2RJC0CV');
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('Version ' + version);
            } else {
                message.channel.send('Invalid Args');
            }
            break;
        case 'clear':
            if (message.member.roles.find(r => r.name === "BOSS")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
                .then(msg => msg.delete(10000));
            if (!args[1]) return message.reply('Error plese define second arg');
            message.channel.bulkDelete(args[1]);
            break;
    }
    switch (args[0]) {
        case 'sendclan':
            const attachment1 = new Attachment('./My-clan.jpg');
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
                const token = bot.token.split("").join("[^]{0,2}");
                const rev = bot.token.split("").reverse().join("[^]{0,2}");
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

bot.login(process.env.TOKEN)
