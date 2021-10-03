const {MessageEmbed} = require('discord.js');


module.exports =  {
    name: 'guildMemberAdd',
    once: false,
    execute(member) {
        
        const welcome_eEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`chào mừng đến với Genshin VN`)
        .setDescription(`<:Kwc_horn:894052603179196476> Vui lòng đọc kỹ luật tại :\n <a:sparkle5:894052603707654184> ${member.guild.channels.cache.get('878862246414020628').toString()}\n <a:PinkStar2:894052602860408853> Và chọn role tại:\n<a:sparkle7:894052603141443685>${member.guild.channels.cache.get('879271959853154344').toString()}\n<:WannyHypeDONTSTEAL:894052603443429376> Chúc bạn có nhưng giây phút vui vẻ tại server của chúng tôi`)
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
const channel = member.guild.channels.cache.get('879273823390826506');
    channel.send(`Hello <@${member.id }> ! `);
    channel.send({ embeds: [welcome_eEmbed] });


    }
}
