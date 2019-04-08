const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.login(process.env.BOT_TOKEN);




var prefix = "-";//برفيكس حقك
 
client.on('message', function(message) {//Toxic Codes //n3k4a is one
    if(!message.channel.guild) return; //Toxic Codes //n3k4a is one
    if (message.author.bot) return; //Toxic Codes //n3k4a is one  
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return; //Toxic Codes //n3k4a is one
    if (!message.content.startsWith(prefix)) return;//Toxic Codes //n3k4a is one
     //Toxic Codes //n3k4a is one //Toxic Codes //n3k4a is one //Toxic Codes //n3k4a is one //Toxic Codes //n3k4a is one //Toxic Codes //n3k4a is one //Toxic Codes //n3k4a is one //Toxic Codes //n3k4a is one //Toxic Codes //n3k4a is one
    var args = message.content.substring(prefix.length).split(' ');
    switch (args[0].toLocaleLowerCase()) {//Toxic Codes //n3k4a is one
    case "clear" :
    message.delete()//Toxic Codes //n3k4a is one
    if(!message.channel.guild) return
    if(message.member.hasPermissions(0x2000)){ if (!args[1]) {
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);//Toxic Codes //n3k4a is one
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "**```fix\n" + messagesDeleted + " " +  ': عدد الرسائل التي تم مسحها' + "```**").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ': عدد الرسائل التي تم مسحها' + "```**").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {//Toxic Codes //n3k4a is one  
    var manage = new Discord.RichEmbed()//Toxic Codes //n3k4a is one  
    .setDescription('You Do Not Have Permission MANAGE_MESSAGES :(') //Toxic Codes //n3k4a is one
    .setColor("RANDOM")
    message.channel.sendEmbed(manage) //Toxic Codes //n3k4a is one
    return;
    }
    }
    }); //Toxic Codes //n3k4a is one






















