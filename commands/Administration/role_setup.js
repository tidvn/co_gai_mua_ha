const { MessageEmbed,MessageButton,MessageActionRow, MessageSelectMenu } = require("discord.js");

const ee = require("../../botconfig/embed.json");


const diemdanh = new MessageActionRow()
            .addComponents(              
              new MessageButton()
              .setCustomId('diemdanh_on')
              .setLabel('Bật điểm danh')
              .setStyle('SUCCESS')	
            	
            )
			.addComponents(              
				new MessageButton()
				.setCustomId('diemdanh_off')
				.setLabel('Tắt điểm danh')
				.setStyle('DANGER')	
			);
		
const verify = new MessageActionRow()
            .addComponents(              
              new MessageButton()
              .setCustomId('confirm_rules')
              .setLabel('Vào server')
              .setStyle('SUCCESS')	
            	
            );

const Gioitinh = new MessageActionRow()
.addComponents(
	new MessageSelectMenu()
		.setCustomId('Sex')
		.setPlaceholder('select one')
		.setMinValues(1)
		.setMaxValues(1)
		.addOptions([
			{
				label: 'Nam',
				//description: 'This is a description',
				value: 'Nam',
				emoji:"<:diluc_01:879400089674723378>",
			},
			{
				label: `Nữ`,
				//description: 'This is a description',
				value: 'Nu',
				emoji:"<:847378103197892638:880450521574555699>",
			},
			{
				label: `Khác`,
				//description: 'This is a description',
				value: 'Khac',
				emoji:"⚧",
			},
			
			
		]),
);
const ON = new MessageActionRow()
.addComponents(
	new MessageSelectMenu()
		.setCustomId('ON')
		.setPlaceholder('select one')
		.setMinValues(1)
		.setMaxValues(1)
		.addOptions([
			{
				label: 'Oldbie',
				description: 'đã chơi đủ lâu , có kinh nghiệm và có khả năng giúp đỡ Newbie',
				value: 'Oldbie',
				emoji:"<:765130388032192552:884981844771237939>",
			},
			{
				label: `Newbie`,
				description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Newbie',
				emoji:"<:765132887842226186:884981844909625384>",
			},
			
					
		]),
);

const Device = new MessageActionRow()
.addComponents(
	new MessageSelectMenu()
		.setCustomId('Device')
		.setPlaceholder('select one')
		.setMinValues(1)
		.setMaxValues(3)
		.addOptions([
			{
				label: 'PC hoặc Laptop',
				//description: 'đã chơi đủ lâu , có kinh nghiệm và có khả năng giúp đỡ Newbie',
				value: 'Pc',
				emoji:"<:2292038:884982650325061642>",
			},
			{
				label: `Mobile`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Mobile',
				emoji:"<:MobileSmartphoneicon:884982888221786113>",
			},
			{
				label: `PlayStation`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Ps',
				emoji:"<:ps5controllervector36584336:884983170758475787>",
			},
					
		]),
);

const Game = new MessageActionRow()
.addComponents(
	new MessageSelectMenu()
		.setCustomId('Game')
		.setPlaceholder('select one')
		.setMinValues(1)
		.setMaxValues(5)
		.addOptions([
			{
				label: 'Genshin Impact',
				//description: 'đã chơi đủ lâu , có kinh nghiệm và có khả năng giúp đỡ Newbie',
				value: 'Genshin_Impact',
				emoji:"<:genshin:879285793259155486>",
			},
			{
				label: `Honkai Impact`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Honkai_Impact',
				emoji:"<:honkai:879374891885928519>",
			},
			{
				label: `league of legends`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'League_of_Legends',
				emoji:"<:lol:879435600502087732>",
			},
			{
				label: `Valorant`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Valorant',
				emoji:"<:valorant:879285791292006440>",
			},
			{
				label: `CSGO`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'CSGO',
				emoji:"<:CSGO:879435217536946216>",
			},
					
		]),
);
module.exports = {
    name: "roles_menu", //the Command Name
    category: "Administration", //the Command Category [OPTIONAL]
    aliases: [], //the command aliases [OPTIONAL]
    cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
    usage: "roles_menu", //the Command usage [OPTIONAL]
    description: "setup role menu", //the command description [OPTIONAL]
    memberpermissions: ["MANAGE_SERVER"], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
    requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
    alloweduserids: ["468302752158580736"], //Only allow specific Users to execute a Command [OPTIONAL]
    minargs: 0, // minimum args for the message, 0 == none [OPTIONAL]
    maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
    minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
    maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
    argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
    argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
    run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
		try{
        if (text === "verify"){
			message.channel.send({ content: '\n\*\*\*✅Tôi xác nhận đã đọc kỹ luật:\*\*\*', components: [verify] });
		}else if (text === "role"){
			message.channel.send({ content: '\n\*\*\*<a:PinkStar2:894052602860408853>Giới Tính của bạn là :\*\*\*', components: [Gioitinh] });
			message.channel.send({ content: '\n\*\*\*<a:sparkle5:894052603707654184> Bạn là Oldbie hay Newbie :\*\*\*', components: [ON] });
			message.channel.send({ content: '\n\*\*\*<a:sparkle7:894052603141443685> Bạn chơi Genshin trên hệ máy gì :\*\*\*', components: [Device] });
			message.channel.send({ content: '\n\*\*\*<:Kwc_horn:894052603179196476>Bạn chơi những game gì ?  :\*\*\*', components: [Game] });
			message.channel.send({ content: '\n\*\*\*<:lumine_derp:882814154858180709> Bạn muốn bot nhắc điểm danh Hoyolab mỗi ngày không ? :\*\*\*', components: [diemdanh] });
			
		}
		}catch (e){
				console.log(String(e.stack).bgRed)
				return message.reply({embeds: [new MessageEmbed()
					.setColor(ee.wrongcolor)
					.setFooter(ee.footertext, ee.footericon)
					.setTitle(`❌ ERROR | An error occurred`)
					.setDescription(`\`\`\`${e.message ? String(e.message).substr(0, 2000) : String(e).substr(0, 2000)}\`\`\``)
				]});
			}
  }
}

