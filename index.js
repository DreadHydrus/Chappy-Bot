const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
	if (message.content === '!c pyon') {
		message.channel.send('Pyon-pyon!');
	}
});


client.on('message', message => {
	if (message.content === '!c armbreak') {
		const replies = ["*Breaks your arm*", "And your arm goes... bweak."]
		message.replytext = Math.floor((Math.random() * replies.length) + 0);
		message.channel.send(replies[message.replytext]);
	}
});

//Rock, Paper, Scissor!
client.on('message', message => {
	if (message.content == '!c rock'|| message.content == '!C rock'|| message.content == '!c Rock'|| message.content == '!C rock'|| message.content == '!C Paper'|| message.content == '!C paper'|| message.content == '!c paper'|| message.content == '!c Paper'|| message.content == '!c scissor'|| message.content == '!c Scissor'|| message.content == '!C Scissor'|| message.content == '!C scissor') {
		const replies = ["Rock :fist:", "Paper :hand_splayed:", "Scissor :v:"]
		message.replytext = Math.floor((Math.random() * replies.length) + 0);
		message.channel.send(replies[message.replytext]);
	}
});

//Code for embeds
client.on('message', message=>{
	
	let args = message.content.substring(prefix.length).split(" ");
  
	switch(args[0]){
		case 'embed':
			const embed = new Discord.RichEmbed()
			.addField('Chappy', message.author.username);
			message.channel.sendEmbed(embed);
		break;
	}
		
})

client.login(token);