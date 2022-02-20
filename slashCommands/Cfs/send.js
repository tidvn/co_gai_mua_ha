const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
const isImageUrl = require('is-image-url');
module.exports = {
  name: "cfs", //the command name for the Slash Command
  description: "Send a cfs to channel", //the command description for Slash Command Overview
  cooldown: 5,
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  options: [ //OPTIONAL OPTIONS, make the array empty / dont add this option if you don't need options!
	//INFORMATIONS! You can add Options, but mind that the NAME MUST BE LOWERCASED! AND NO SPACES!!!, for the CHOCIES you need to add a array of arrays; [ ["",""] , ["",""] ] 
		//{"Integer": { name: "ping_amount", description: "How many times do you want to ping?", required: true }}, //to use in the code: interacton.getInteger("ping_amount")
		{"String": { name: "title", description: "Tiêu đề của confession ?", required: true }}, //to use in the code: interacton.getString("title")
		{"String": { name: "description", description: "Viết nội dung Cfs của bạn ? [ +n+ = xuống dòng ]", required: true }}, //to use in the code: interacton.getString("description")
		{"String": { name: "image", description: " link ảnh bạn muốn thêm vào", required: false }},
		//{"String": { name: "color", description: "What should be the Embed Color?", required: false }}, //to use in the code: interacton.getString("color")
		//{"User": { name: "ping_a_user", description: "To Ping a user lol", required: false }}, //to use in the code: interacton.getUser("ping_a_user")
		//{"Channel": { name: "in_where", description: "In What Channel should I send it?", required: false }}, //to use in the code: interacton.getChannel("what_channel")
		//{"Role": { name: "what_role", description: "To Ping a Role lol", required: false }}, //to use in the code: interacton.getRole("what_role")
		//{"IntChoices": { name: "what_ping", description: "What Ping do you want to get?", required: true, choices: [["Bot", 1], ["Discord Api", 2]] }}, //here the second array input MUST BE A NUMBER // TO USE IN THE CODE: interacton.getInteger("what_ping")
		//{"StringChoices": { name: "what_ping", description: "What Ping do you want to get?", required: true, choices: [["Bot", "botping"], ["Discord Api", "api"]] }}, //here the second array input MUST BE A STRING // TO USE IN THE CODE: interacton.getString("what_ping")
	
  ],
  run: async (client, interaction) => {
    try{
	    //console.log(interaction, StringOption)
		
		//things u can directly access in an interaction!
		const { member, channelId, guildId, applicationId, 
		        commandName, deferred, replied, ephemeral, 
				options, id, createdTimestamp 
		} = interaction; 
		const { guild } = member;
		//let IntOption = options.getInteger("OPTIONNAME"); //same as in IntChoices //RETURNS NUMBER 
		const EmbedTitle = options.getString("title"); 
		const img = options.getString("image"); 
		let Embedimg ='';
		if (isImageUrl(img)) {Embedimg = img } else {Embedimg=`https://i.imgur.com/WTwbQJH.png`}
		
		const EmbedDescription = options.getString("description"); //same as in StringChoices //RETURNS STRING 
		 //same as in StringChoices //RETURNS STRING 
		//let UserOption = options.getUser("OPTIONNAME"); //RETURNS USER OBJECT 
		//const ChannelOption = `944946380403798026`; //RETURNS CHANNEL OBJECt
		//let RoleOption = options.getRole("OPTIONNAME"); //RETURNS ROLE OBJECT
		const channel = guild.channels.cache.get(`944946380403798026`);
		let embed = new MessageEmbed().setColor('RANDOM')
		.setTitle(String(EmbedTitle).substr(0, 256))
		.setDescription(String(EmbedDescription).substr(0, 2048).split("+n+").join("\n"))
		.setTimestamp()
		.setImage(String(Embedimg).substr(0, 256))
		.setFooter(guild.name, guild.iconURL({dynamic: true}));
		//update it without a response!
		await interaction.reply({content: `Sending ...`, ephemeral: true}); 
		//SEND THE EMBED!
		await channel.send({embeds: [embed]});
		//Edit the reply
		interaction.editReply({content: `✅ confession sent!`, ephemeral: true}); 
    } catch (e) {
        console.log(String(e.stack))
    }
  }
}

