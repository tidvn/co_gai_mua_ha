const { DiscordTogether } = require('discord-together');
module.exports = {
  name: "youtube", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Tool", //the command category for helpcmd [OPTIONAL]
  aliases: ["yt", "youtube", "youtube_together"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 3, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "youtube", //the command usage for helpcmd [OPTIONAL]
  description: "Returns all Commmands, or one specific command", //the command description for helpcmd [OPTIONAL]
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
        client.discordTogether = new DiscordTogether(client);

        
            
                if(message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                        return message.channel.send(`${invite.code}`);
                    });
                };
            
        
  }
}