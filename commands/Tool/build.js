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
const data1 = ` ${prefix}build ganyu \n ${prefix}build sara \n ${prefix}build baal \n ${prefix}build sayu \n ${prefix}build yoimiya \n ${prefix}build ayaka \n ${prefix}build jean \n ${prefix}build jean \n ${prefix}build venti \n ${prefix}build xiao \n ${prefix}build chongyun \n ${prefix}build diona \n ${prefix}build keaya \n ${prefix}build qiqi \n ${prefix}build beidou \n ${prefix}build rosaria \n ${prefix}build mona \n ${prefix}build eula \n ${prefix}build yanfei\n `
const data2 =` ${prefix}build fischl\n ${prefix}build keqing\n ${prefix}build albedo\n ${prefix}build ningguang\n ${prefix}build noelle\n ${prefix}build zhongli\n ${prefix}build babara\n ${prefix}build childe\n ${prefix}build xingqiu\n ${prefix}build bennett\n ${prefix}build diluc\n ${prefix}build klee\n ${prefix}build xiangling\n ${prefix}build kazuha\n ${prefix}build razor\n ${prefix}build amber\n ${prefix}build aloy\n ${prefix}build kokomi\n ${prefix}build hutao\n `
        if (data[text]) return message.reply(embedsfc(text));
        const help = {
            color: 'RANDOM',
            title: 'Đã xảy ra lỗi :( ',	
            description: `sử dụng lệnh \"\ ${prefix}build \+ tên nhân vật\"\n lưu ý : tên nhân vật phải viết thường.\n 1 số nhân vật có tên 2 chữ như kamisato ayaka , kaedehara kazuha thì chỉ sử dụng tên (ayaka, kazuha) .\n 1 số nhân vật đặc biệt: tartaglia=childe , raiden shogun = baal,main-geo,main-anemo,main-electro`,
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
