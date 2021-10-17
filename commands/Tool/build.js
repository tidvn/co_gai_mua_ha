const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
const data = require('../../assets/buildchar.json');

function embedsfc(mess) {
	
	let tid = new MessageEmbed()
	
	.setColor('RANDOM')
	.setTitle(data[mess].Title)
	.setThumbnail(data[mess].Thumbnail)
	.setImage(data[mess].Image)
	.setFooter(data[mess].Footer);

	return { embeds: [tid] };   
  }
 
module.exports = {
  name: "build", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Tool", //the command category for helpcmd [OPTIONAL]
  aliases: ["nuoi", "build", "nuôi"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 3, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "build <Char>", //the command usage for helpcmd [OPTIONAL]
  description: "Returns all Commmands, or one specific command", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  minargs: 1, // minimum args for the message, 0 == none [OPTIONAL]
  maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
  minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
    run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
const data1 = ` ${prefix}build Ganyu \n ${prefix}build Sara \n ${prefix}build Baal \n ${prefix}build Sayu \n ${prefix}build Yoimiya \n ${prefix}build Ayaka \n ${prefix}build Jean \n ${prefix}build Jean \n ${prefix}build Venti \n ${prefix}build Xiao \n ${prefix}build Chongyun \n ${prefix}build Diona \n ${prefix}build Keaya \n ${prefix}build Qiqi \n ${prefix}build Beidou \n ${prefix}build Rosaria \n ${prefix}build Mona \n ${prefix}build Eula \n ${prefix}build Yanfei\n `
const data2 =` ${prefix}build Fischl\n ${prefix}build keqing\n ${prefix}build Albedo\n ${prefix}build Ningguang\n ${prefix}build Noelle\n ${prefix}build Zhongli\n ${prefix}build Babara\n ${prefix}build Childe\n ${prefix}build Xingqiu\n ${prefix}build Bennett\n ${prefix}build Diluc\n ${prefix}build Klee\n ${prefix}build Xiangling\n ${prefix}build Kazuha\n ${prefix}build Razor\n ${prefix}build Amber\n ${prefix}build Aloy\n ${prefix}build Kokomi\n ${prefix}build Hutao\n `
        if (data[text]) return message.reply(embedsfc(text));
        const help = {
            color: 'RANDOM',
            title: 'Đã xảy ra lỗi :( ',	
            description: `sử dụng lệnh \"\ ${prefix}build \+ tên nhân vật\"\n lưu ý : tên nhân vật phải viết Hoa ký tự đầu tiên.\n 1 số nhân vật có tên 2 chữ như Kamisato Ayaka , Kaedehara Kazuha thì chỉ sử dụng tên (Ayaka, Kazuha) .\n 1 số nhân vậT đặc biệt: Tartaglia=Childe , raiden shogun = Baal `,
            fields: [
                            {
                                name: `${prefix}build `,
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
		return message.reply({ embeds: [help] }, prefix)
        
            
        
  }
}
