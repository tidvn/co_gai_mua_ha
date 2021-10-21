const { DiscordTogether } = require('discord-together');
const { MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
  name: "together", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Tool", //the command category for helpcmd [OPTIONAL]
  aliases: [], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 3, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "together", //the command usage for helpcmd [OPTIONAL]
  description: "", //the command description for helpcmd [OPTIONAL]
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
     
          const row = new MessageActionRow()
            .addComponents(              
              new MessageButton()
              .setCustomId('youtube')
              .setLabel('youtube')
              .setStyle('DANGER')	
            )
            .addComponents(              
              new MessageButton()
              .setCustomId('poker')
              .setLabel('poker')
              .setStyle('SECONDARY')	
            )
            .addComponents(              
              new MessageButton()
              .setCustomId('chess')
              .setLabel('chess')
              .setStyle('SUCCESS')	
            )
            .addComponents(              
              new MessageButton()
              .setCustomId('betrayal')
              .setLabel('betrayal')
              .setStyle('PRIMARY')	
            );
      
      
      
            try{
        
         message.reply({content: "chọn 1",components: [row]});
       
         client.on('interactionCreate', interaction => {
          if (!interaction.isButton()) return;
          client.discordTogether = new DiscordTogether(client);     
          
                if(message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, interaction.customId).then(async invite => {
                           
                         return message.reply(`${invite.code}`);
                        
                         
                     });
               };
        });


       
         
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
