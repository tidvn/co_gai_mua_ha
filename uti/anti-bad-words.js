const {badword} = require('../assets/badwords.json');
module.exports= async (message)=>{

    let foundInText = false;
    for (var i in badword) {
      if (message.content.toLowerCase().includes(badword[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
       message.delete().then(message.channel.send(`tin nhắn có chứa từ bị cấm`));
       
      }
    }
