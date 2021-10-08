
module.exports = {
	name: 'message',
	once: false,
	execute: async(message) => {
        
        const { guild,  content } = message
        const code = content.split('discord.gg/')[1]
        const isInvite = async (guild, code) => {
          return await new Promise((resolve) => {
            guild.invites.fetch().then((invites) => {
              for (const invite of invites) {
                if (code === invite[0]) {
                  resolve(true)
                  return
                }
              }
      
              resolve(false)
            })
          })
        }
       
        if (content.includes('discord.gg/')) {
            const isOurInvite = await isInvite(guild, code)
            if (!isOurInvite) {
            
            message.delete(); // Deletes the message
            message.channel.send(`vui lòng không gửi link server khác với bất kỳ lí do nào`);
            }
          }
           
        

		
	},
}
