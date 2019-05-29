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
    member.guild.channels.get('573754852375658496').send(`━━━━━━━━━━━━━━━━━━━━━━━━
    Hey ${member}!, Welcome to our server 🎉🤗 !
    ━━━━━━━━━━━━━━━━━━━━━━━━
    1. Be sure to read #general_clan-rules📜  first!
    2. Look in #server_rules🚦for server information & rules.
    3- Check out all about FWA rules in #fwa_war-rules🚨 
    4. If you're done go to #chit-chat💬 and chat with us.
    5- Be sure to check if it's Win or Loose war in #📣win_or_loss-war-announcement 
    ━━━━━━━━━━━━━━━━━`);
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
        case 'implinks':
            message.channel.send(`🔥Hey there, Here is few important link used in farm wars.🔥

            💎IMPORTANT LINKS💎:-
            
            ☘Clan chocolate clash link-
            📌ÇHÀMPÎÕÑS
            http://kuilin.net/cc_n/clan.php?tag=L2RJC0CV
                   
            ☘Clan Link through Fwastats:-
            
            📌ÇHÀMPÎÕÑS https://fwastats.com/Clan/L2RJC0CV
        
            ☘Chocolate clash link for searching players in member lookup:-
            http://kuilin.net/cc_n
            
            ☘Clan donation tracker link
            (check from here who donated wrong) :-
            
            📌 ÇHÀMPÎÕÑS
             ✳ http://tiny.cc/Championstracker
            
            ☘Clan rules guide link:- 
            
            ✳https://band.us/band/62858363/post/61
            
            
            ✳https://band.us/band/62858363/post/89
            
            ☘FWA GUIDE:-
            
            📌sites.google.com/site/fwaguide
            
            🔥Hindi FWA GUIDE:- 
            
            📌1Hindi: https://drive.google.com/open?id=1UNlHjWL3kMSx4g_6FZ3x9IoJVMi_LHMpc9ciSJHlsTg
            
            📌2Hindi: https://drive.google.com/open?id=1fXjbFXRdtdWT-5YwEE0cyr0QFGoCghtix7rQ4YnxRwg`);
            break;
        case 'clanlink':
            message.channel.search('https://link.clashofclans.com/?action=OpenClanProfile&tag=L2RJC0CV');
            break; 
        case  'recruitmentpost':
            message.channel.send(`💎OFFICIAL FWA💎  

            📝Details📝:
            
            ✨Clan Name: ÇHÃMPîÕŇŞ
            🎈Level: 16
            🎈Tag: #L2RJC0CV
            🎈Link: http://tiny.cc/Fwachampions
             
            🎁Benefits Of FWA🎁:
            
            💰Easy Loots and War Stars 😚
            💆🏻‍♂Stress Free Wars with Minimal effort🏆
            💫90% Marching Rate💫
            
            🎪Clan Requirements🎪:
            
            🔥Town hall 10+
            🔥FIN must be completed
            🔥XP lvl 100+ acceptable.
            🔥Master League above.
            🔥Should have 1k+ CG points.
            🔥No War Timers (Except the ones who were before in FWA clan only)
            🔥Must have Discord/WhatsApp/Band (Must have 1 thing, or all if you want) 
            
            
            🎯CWL🎯:
            ✌Must inform Leader(If you wanna do CWL) 
            ✌Must get your attacks done within first 12 hours.
            ✌Ask Targets to any co.
            
            🥊Clan Rules🥊:
            
            🎍Follow Clan Mails.
            🎍Must push 1 league up in each session.
            
            🎶🎶🎶Pushing Again to go back to top India 🎶🎶🎶
            
            📢 Primary Language:-Hindi/English.`);
            break;        
        case 'botinfo':
            message.channel.send('Watcher is designed for CHAMPIONS clan. Messages sent by the user will be displayed there and sending a message in that channel will also forward it to that user. This bot is different from the others as it is the one and only private bot, design for CHAMPIONS clan only. This means that it is ensured to be hosted 24/7 without you having to pay extra hosting fees.');
            break;
        case  'clanrules':
            message.channel.send(`📜CLAN RULES: 
    
                General:
                    •	🐝Be active. Be mature. Be respectful of others.
                    •	🐝Be polite - saying please and thank you will make your mother (and us) proud.
                    •	🎟Opting out is not a permanent state - only temporary.
                    •	🛡Get in a league as soon as possible when season starts -don't go around naked.
                    •	📮If you won't be able to war, leave us a note on BAND and go red (opt out).
                    •	😡Failure to comply with rules may result in warning, penalties or removal.
                    •	👤New members must join our BAND site and have a Co-Leader approve your FWA-compliant base when joining the clan. 
                
                Donations and Requests:
                    •	🔁Donate and request at least 1500 per season.
                    •	🔂Donate at least 1 for every 3 you request. 
                    •	⏸Respect request and only donate what is requested.
                    •	⏹If you mess up your donation, admit it and apologize.
                    •	↕Donate the largest troop first to ensure it will fit.
                    •	⏺Don't ask only for troops you cannot make or don't donate yourself.
                    •	⏩Fill open requests before you request yourself.
                
                War:
                    •	📩Watch clan mail for instructions to 2 or 3 star if we match FWA or if we mismatch (very rare).
                    •	⏰Attack in the first 12 hours of war.
                    •	⚔Make both attacks in every war.
                    •	❗Always attack your mirror on your first attack with 2 or 3 stars depending on instructions. (💂🏻‍♀Duty before booty💰.) (unless you using STW program as a Thall 9)
                    •	‼For your second attack, hit the highest base that has already been hit and starred by its mirror or wait until the last 12 hours of war and hit any base.
                    •	🕯Even if someone has hit your base because you are late, you are still expected to attack your mirror in the same way as if it had not already been hit.
                    •	✨You may clean up someone else's mirror at any time after they have screwed it up.
                    •	🤦🏼‍♂If you innocently loot 1 & 2 because you don't know any better (i.e., been living on a foreign planet until lately), You will need an good excuse or be kicked.
                    •	💋If we mismatch, leave your FWA base up unless told otherwise (extremely rare).
                    •	🤦🏻‍♀Never put troops in the war castles in a FWA war.
                
                Clan Games:
                     •  1⃣0⃣0⃣0⃣1000 minimum clan game points each game
                     •  🚫Do not participate if you won’t get the minimum.  It’s not fair to rest of team if you do one game and get all the rewards. We are a team
                
                Earning Elder:
                    •	🏪Be active in chat.
                    •	🏦Be a high donor.
                    •	💒Answer questions and help out your mates.
                
                Earning Co-Leader:
                    •	👨🏻‍💻Be willing to roll your sleeves up and work like a fiend for the betterment of the clan and FWA.
                    •	👩🏼‍💻Be willing to do any one or more of the administrative tasks need to ensure our ongoing membership with FWA.
                
                👉🏻Please acknowledge below that you have read and understand the above.👇🏻`);
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

bot.login(process.env.TOKEN);
