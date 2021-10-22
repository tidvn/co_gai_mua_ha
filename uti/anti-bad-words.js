const {badword} = require('../assets/badwords.json');
module.exports= async (message)=>{
    
    let foundInText = false;
    for (var i in badword) {
      if (message.content.toLowerCase().includes(badword[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
       
        await  message.delete();// Deletes the message
        await  message.channel.send(`tin nhắn chứa từ bị cấm`);
      }
    }
