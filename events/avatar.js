const {MessageEmbed} = require('discord.js');
module.exports = {
	name: 'message',
	once: false,
	execute(message) {

        if(message.content.startsWith('!avt ')){
    
        
            if (!message && !message.channel)
                throw new Error(`The channel is inaccessible.`);
                     
            let target = message.mentions.users.first();
        
            if (!target)
                target = message.author;
        
            let avatarURL = target.displayAvatarURL({
                size: 4096,
                dynamic: true
            });
        
           
        
            const Embed = new MessageEmbed()
                .setTitle(target.username +`'s avatar`)
                //.setDescription(`[${currentLang.AVATAR_URL}](${avatarURL})`)
                .setColor('RANDOM')
                .setImage(avatarURL)
                .setFooter(message.author.tag, `${message.author.displayAvatarURL({
                    size: 4096,
                    dynamic: true
                })}`);
        
            message.channel.send({ embeds: [Embed] });
    }

		
	},
}
