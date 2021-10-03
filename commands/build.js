const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const data = require('./data/buildchar.json');
function embedsfc(mess) {
	
	let tid = new MessageEmbed()
	
	.setColor('RANDOM')
	.setTitle(data[mess].Title)
	.setThumbnail(data[mess].Thumbnail)
	.setImage(data[mess].Image)
	.setFooter(data[mess].Footer);

	return { embeds: [tid] };   
  }
  const help = {
	color: 'RANDOM',
	title: 'Đã xảy ra lỗi :( ',
	
	
	description: 'sử dụng lệnh \"\/build \+ tên nhân vật\"\n lưu ý : tên nhân vật phải viết Hoa ký tự đầu tiên.\n 1 số nhân vật có tên 2 chữ như Kamisato Ayaka , Kaedehara Kazuha thì chỉ sử dụng tên (Ayaka, Kazuha) .\n 1 số nhân vậT đặc biệt: Childe = Tartaglia , raiden shogun = Baal ',
	
	
	
};
module.exports = {
	data: new SlashCommandBuilder()
		.setName('build')
		.setDescription('Hướng dẫn cách build.')
		.addStringOption(option => option.setName('character').setDescription('nhập tên nhân vật:')),
	async execute(interaction) {
		const value = interaction.options.getString('character');
		
			
			
		if (data[value]) return interaction.reply(embedsfc(value));
		
		return interaction.reply({ embeds: [help] })
		
		
	},
};
