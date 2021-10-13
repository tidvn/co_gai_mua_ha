const {MessageEmbed} = require('discord.js');
module.exports = {
	name: 'message',
	once: false,
	execute: async (message) => {

            //if (message.author.id == client.user.id) return;
        
            if (message.content.startsWith("!roles")) {
                const member = message.mentions.members.first() || message.member;
            console.log(message.member)
                const filteredRoles = member.roles.cache.filter(role => role.id != message.guild.id);
                const listedRoles = filteredRoles.sort((a, b) => b.position - a.position).map(role => role.toString());
            
                const embed = new MessageEmbed()
                    .setTitle(member.user.username)
                    .addField("Roles", listedRoles.join(","));
            
                message.channel.send({embeds: [embed]});
            }
		
	},
}
