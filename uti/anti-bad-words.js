const {badword} = require('../assets/badwords.json');
// var fs = require("fs");
// var text = fs.readFileSync('./assets/badwords.txt', {encoding:'utf8', flag:'r'});
// //console.log(text)
// var badwords = text.split('\r\n')
// //console.log(badwords)

module.exports= async(message)=>{


    let foundInText = false;
    for (var i in badwords) {
      if (message.content.toLowerCase().includes(badwords[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
       
        await  message.delete();// Deletes the message
        await  message.channel.send(`tin nhắn chứa từ bị cấm`);
      }
    }
