const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const data = require('./data/buildchar.json');
function embedsfc(mess) {
	
	let tid = new MessageEmbed()
	
	.setColor(data[mess].Color)
	.setTitle(data[mess].Title)
	.setThumbnail(data[mess].Thumbnail)
	.setImage(data[mess].Image)
	.setFooter(data[mess].Footer);

	return { embeds: [tid] };   
  }
module.exports = {
	data: new SlashCommandBuilder()
		.setName('build')
		.setDescription('Hướng dẫn cách build.')
		.addStringOption(option => option.setName('input').setDescription('nhập tên nhân vật:')),
	async execute(interaction) {
		const value = interaction.options.getString('input');
		if (data[value]) return interaction.reply(embedsfc(value));
		return interaction.reply('không tồn tại');
	},
};