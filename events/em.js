const {MessageEmbed} = require('discord.js');
const ms = require('ms');
//const countdown=`<t:1634130000:R>`;
module.exports = {
	name: 'message',
	once: false,
	execute(message) {

        if(message.content === 'em'){
    
			const Embed = new MessageEmbed()
			.setTitle('GIVEAWAYS CHÀO MỪNG 2.2')
			.setDescription(` cách thức tham gia điểm danh tại : <#${'895567488354512926'}> \n thời hạn đóng comment  : <t:1634058000:R> \n thời gian quay thưởng  : <t:1634086800:R> vào lúc 20h ngày 13/10 \n \`\`\`lần giveaways này sẽ có 2 thẻ tháng . 1 là dành cho các bạn chăm hoạt động ( tỷ lệ trúng khoảng 1/20) và 1 cái dành cho toàn bộ thành viên trong server (tỷ lệ 1/ tổng số người tham gia ) \`\`\` Lưu ý: event chỉ dành cho những bạn tham gia trước 6/10/2021 ,có tham gia trò chuyện ở server . và  có mặt tại room voice lúc diễn ra trao thưởng \n `)
			.setColor('RANDOM')
			.setTimestamp(Date.now())
			
			
		message.channel.send({ embeds: [Embed] });	
            
    }
	if(message.content === 'em2'){
    
		const Embed = new MessageEmbed()
		.setTitle('góc kêu gọi nhà hảo tâm:')
		.setDescription(`\`\`\`bash\n  "để có thể tổ chức nhiều giveaways và các hoạt động khác.Mình rất mong nhận được sự giúp đỡ của các anh em. rất cảm ơn tấm lòng của mọi người" \`\`\` \n  anh em nào muốn donate cho server thì liên hệ <@!${'468302752158580736'}> nhé `)
		.setColor('RANDOM')
		
		
		
	message.channel.send({ embeds: [Embed] });	
	}
		
	},
}
