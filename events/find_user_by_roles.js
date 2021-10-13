
const {MessageEmbed} = require('discord.js');
module.exports = {
	name: 'message',
	once: false,
	execute: async (message) => {

            //if (message.author.id == client.user.id) return;
        
            if (message.content.startsWith("!roles")) {
                let roleName = message.content.split(" ").slice(1).join(" ");
                members = message.guild.roles.cache.find(role => role.name === `${roleName}`).members.map(m=>m.user.tag);
            console.log(members)

               // const filteredRoles = member.roles.cache.filter(role => role.id != message.guild.id);
              //  const listedRoles = filteredRoles.sort((a, b) => b.position - a.position).map(role => role.toString());
            
                



                
                 const embed = new MessageEmbed()
                     //.setTitle(member.user.username)
                     .addField("Roles", members.join(","));
            
                 message.channel.send({embeds: [embed]});
            }
		
	},
}
