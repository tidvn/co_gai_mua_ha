const discordVoice = require('@discordjs/voice');
const player = discordVoice.createAudioPlayer();
const googleTTS = require('google-tts-api');

module.exports = {
  name: "talk", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Tool", //the command category for helpcmd [OPTIONAL]
  aliases: ["tts","noi","speach","keu","t"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 3, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "talk <text>", //the command usage for helpcmd [OPTIONAL]
  description: "nói đoạn <text> trong room voice", //the command description for helpcmd [OPTIONAL]
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
        try{
        const channel = message.member.voice.channel;
        if (channel) {
        const url = googleTTS.getAudioUrl(`${text}`, {
            lang: 'vi',
            slow: false,
            host: 'https://translate.google.com',
          });
        const resource = discordVoice.createAudioResource(url);
        
        const connection = discordVoice.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
                                
        player.play(resource);
        connection.subscribe(player);
        
    } else {
        message.reply('bạn chưa ở room voice nào');
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
