const { MessageActionRow, MessageSelectMenu} = require('discord.js');
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
			},
			{
				label: `Nữ`,
				//description: 'This is a description',
				value: 'Nu',
			},
			{
				label: `Khác`,
				//description: 'This is a description',
				value: 'Khac',
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
			},
			{
				label: `Newbie`,
				description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Newbie',
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
			},
			{
				label: `Mobile`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Mobile',
			},
			{
				label: `PlayStation`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Ps',
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
			},
			{
				label: `Honkai Impact`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Honkai_Impact',
			},
			{
				label: `league of legends`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'League_of_Legends',
			},
			{
				label: `Valorant`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'Valorant',
			},
			{
				label: `CSGO`,
				//description: 'Mới chơi game, cần tìm kiếm sự giúp đỡ , kiến thức chơi game',
				value: 'CSGO',
			},
					
		]),
);

module.exports = {
	name: 'message',
	once: false,
	execute(msg) {
		if (msg.content === 'gt1') {
            msg.channel.send({ content: '\n\*\*\*<a:PinkStar2:894052602860408853>Giới Tính của bạn là :\*\*\*', components: [Gioitinh] });
		}if (msg.content === 'gt2') {
            msg.channel.send({ content: '\n\*\*\*<a:sparkle5:894052603707654184> Bạn là Oldbie hay Newbie :\*\*\*', components: [ON] });
		}if (msg.content === 'gt3') {
            msg.channel.send({ content: '\n\*\*\*<a:sparkle7:894052603141443685> Bạn chơi Genshin trên hệ máy gì :\*\*\*', components: [Device] });
		}if (msg.content === 'gt4') {
            msg.channel.send({ content: '\n\*\*\*<:Kwc_horn:894052603179196476>Bạn chơi những game gì ?  :\*\*\*', components: [Game] });
            
        }
	},
};