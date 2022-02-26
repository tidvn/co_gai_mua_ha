const {MessageEmbed} = require('discord.js');
const fetch = require('node-fetch')
var ee = require("../../botconfig/embed.json");
module.exports = {
  name: "genshin++", //the command name for execution & for helpcmd [OPTIONAL]
  category: "img", //the command category for helpcmd [OPTIONAL]
  aliases: ["g+","genshin hentai"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 0, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "genshin++", //the command usage for helpcmd [OPTIONAL]
  description: "gửi 1 bức hình genshin hentai", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  minargs: 0, // minimum args for the message, 0 == none [OPTIONAL]
  maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
  minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
    run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
		try {
        if (message.channel.nsfw){
        fetch(`https://www.reddit.com/r/GenshinImpactHentai.json?sort=top&t=week`)
        .then((res) => res.json())
        .then((body) => {          
            //url=data['data']['children'][Math.floor(Math.random() * 25)]['data']['url'];
            const allowed = message.channel.nsfw ? body['data'].children : body['data'].children.filter(post => !post['data'].over_18);
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const url = allowed[randomnumber]['data'].url;
            
            if(url){
                message.reply({embeds: [new MessageEmbed()
                    .addField("Genshin Impact Hentai",`[\`LINK\`](${url})`, true)
                    .setColor('RANDOM')        
                    .setImage(url)
                    

                  ]});
            }
            
        })
    } else {
        message.reply('đây không phải kênh nsfw');  
    }
             
        
         } catch (e) {
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

