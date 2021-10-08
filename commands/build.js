const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const data = require('./data/buildchar.json');
const data1 = ` \/build Ganyu \n \/build Sara \n \/build Baal \n \/build Sayu \n \/build Yoimiya \n \/build Ayaka \n \/build Jean \n \/build Jean \n \/build Venti \n \/build Xiao \n \/build Chongyun \n \/build Diona \n \/build Keaya \n \/build Qiqi \n \/build Beidou \n \/build Rosaria \n \/build Mona \n \/build Eula \n \/build Yanfei\n `
const data2 =` \/build Fischl\n \/build keqing\n \/build Albedo\n \/build Ningguang\n \/build Noelle\n \/build Zhongli\n \/build Babara\n \/build Tartaglia\n \/build Xingqiu\n \/build Bennett\n \/build Diluc\n \/build Klee\n \/build Xiangling\n \/build Kazuha\n \/build Razor\n \/build Amber\n \/build Aloy\n \/build Kokomi\n \/build Hutao\n `
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
	fields: [
                    {
                        name: '/build ',
                        value: `\`\`\`${data1}\`\`\``,
                        inline: true,
                    },
                    
                    {
                        name: '\" + tên nhân vật\"',
                        value: `\`\`\`${data2}\`\`\``,
                        inline: true ,
                        
                    },
                ],
	
	
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
