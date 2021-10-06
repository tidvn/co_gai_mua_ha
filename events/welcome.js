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
    

const channel = member.guild.channels.cache.get('879273823390826506');
    channel.send(`Hello <@${member.id }> ! `);
    channel.send({ embeds: [welcome_eEmbed] });


    }
}
