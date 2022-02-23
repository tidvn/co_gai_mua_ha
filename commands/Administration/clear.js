const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "clear", //the Command Name
    category: "Administration", //the Command Category [OPTIONAL]
    aliases: [], //the command aliases [OPTIONAL]
    cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
    usage: "clear", //the Command usage [OPTIONAL]
    description: "clear", //the command description [OPTIONAL]
    memberpermissions: ["MANAGE_MESSAGES"], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
    requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
    alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
    minargs: 1, // minimum args for the message, 0 == none [OPTIONAL]
    maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
    minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
    maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
    argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
    argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
    run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    try{
      if(!args[0])
        return message.reply({embeds: [new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR `)
            .setDescription(`Usage: \`${prefix}clear <amount>\``)]
        });
      const amount = args[0];
      if (amount <= 1 || amount > 100) {
			return message.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true });
		}
		await message.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			message.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
		});

		return message.reply({ content: `Successfully pruned \`${amount}\` messages.`, ephemeral: true });
      
     // message.reply(text.substr(0, 2000));
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
