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
	once: true,
	execute(msg) {
		if (msg.content === 'gt') {
            msg.channel.send({ content: '\n\*\*\*Giới Tính của bạn là :\*\*\*', components: [Gioitinh] });
            msg.channel.send({ content: '\n\*\*\*Bạn là Oldbie hay Newbie :\*\*\*', components: [ON] });
            msg.channel.send({ content: '\n\*\*\*Bạn chơi Genshin trên hệ máy gì :\*\*\*', components: [Device] });
            msg.channel.send({ content: '\n\*\*\*Bạn chơi những game gì ?  :\*\*\*', components: [Game] });
            
        }
	},
};