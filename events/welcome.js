const {MessageEmbed} = require('discord.js');


module.exports =  {
    name: 'guildMemberAdd',
    once: false,
    execute(member) {
        
        const welcome_eEmbed = new MessageEmbed()
        .setColor('#ff99ff')
        .setTitle(`chào mừng đến với Genshin VN`)
        .setDescription(`looxi`)
        .setThumbnail('https://media2.giphy.com/media/HTVeYVXjLiunFlUOeu/giphy.gif?cid=ecf05e47q73m9htvgy80z6cwnpe5d3czv780mf5w3xns1nia&rid=giphy.gif&ct=g')
        .setImage('https://i.imgur.com/8dClSxu.png');
    
//     const welcomechannelId = '868324979324895268' //Channel You Want to Send The Welcome Message
//     //const targetChannelId = `891591900862222406` //Channel For Rules

//             let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Umay');
//             member.roles.add(welcomeRole);

//             const channel = member.guild.channels.cache.get(welcomechannelId)

//             const WelcomeEmbed = new Discord.MessageEmbed()
//             .setTitle(`Welcome To ${member.guild.name}`)
//             .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
//             .setDescription(`Hello <@${member.user.id}>, Welcome to **${member.guild.name}**. Thanks For Joining Our Server.
// Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}, and assign yourself some roles at <#846341532520153088>. You can chat in <#753484351882133507> and talk with other people.`)
//          // You Can Add More Fields If You Want
//             .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
//             .setColor('RANDOM')
//         member.guild.channels.cache.get(welcomechannelId).send(WelcomeEmbed)
const channel = member.guild.channels.cache.get('893546436933865475');
    channel.send(`Hello <@${member.id }> ! `);
    channel.send({ embeds: [welcome_eEmbed] });


    }
}