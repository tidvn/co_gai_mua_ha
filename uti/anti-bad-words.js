const {badword} = require('../assets/badwords.json');
module.exports= async(message)=>{
    
    const isbad = async (bw, msg) => {
        return await new Promise((resolve) => {
         
            for (var i in bw) {
                
              if (msg.toLowerCase().includes(badword[i].toLowerCase())) {
                resolve(true)
                return
              }
            }
      
            resolve(false)
          })
        
      }
      const ibad = await isbad(badword, message.content);


      if (ibad) {
        message.delete();
        message.channel.send(`tin nhắn có chứa từ bị cấm`);
         // Deletes the message
        
        }

    // let foundInText = false;
    // for (var i in badword) {
    //   if (message.content.toLowerCase().includes(badword[i].toLowerCase())) foundInText = true;
    // }
    // if (foundInText) {
       
       
    //   }
    }
