//const { MessageAttachment,MessageEmbed } = require('discord.js')
const Canvas = require('canvas')
const config = require("../../botconfig/config.json"); //loading config file with token and prefix
const settings = require("../../botconfig/settings.json"); //loading settings file with the settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
//here the event starts
module.exports = async (client, member) => { 
    const channel = member.guild.channels.cache.get('879273823390826506');
    const canvas = Canvas.createCanvas(1772, 900);
    const context = canvas.getContext('2d');   
    //set the Background to the welcome.png
    const background = await Canvas.loadImage(`./assets/background.png`);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.strokeStyle = '#f2f2f2';
    context.strokeRect(0, 0, canvas.width, canvas.height);
    //set the first text string 
    var textString3 = `${member.user.username}#${member.user.discriminator}`.toUpperCase();
    //if the text is too big then smaller the text
    if (textString3.length >= 14) {
      context.font = 'bold 90px Genta';
      context.fillStyle = '#fff';
      context.textAlign = "center";
      context.fillText(textString3, canvas.width / 2 , 750);
    }
    //else dont do it
    else {
      context.font = 'bold 70px Genta';
      context.fillStyle = '#fff';
      context.textAlign = "center";
      context.fillText(textString3, canvas.width / 2 , 750);
    }      
    //get the Guild Name
    var textString4 = `WELCOME`;
    context.font = 'bold 180px Genta';
    context.fillStyle = '#b3d9ff';
    context.textAlign = "center";
    context.fillText(textString4, canvas.width / 2 , 660);
    //create a circular "mask"
    context.beginPath();
    context.arc(canvas.width / 2 , canvas.height / 2 - 175, 225, 0, Math.PI * 2, true);//position of img
    context.strokeStyle = '#ff99cc';
    context.lineWidth = 30;
    context.stroke();
    context.save();
    context.closePath();
    context.clip();
    //define the user avatar
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({size: 4096, dynamic: true, format: 'jpg' }));
    //draw the avatar
    context.drawImage(avatar, canvas.width / 2 - 225 , canvas.height / 2 - 400, 450, 450);
    
    



    //get it as a discord attachment
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');


    const welcome_eEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`chào mừng đến với Genshin VN`)
    .setDescription("dfgsfgfdg")
    //.setDescription(`<:Kwc_horn:894052603179196476> Vui lòng đọc kỹ luật tại :\n <a:sparkle5:894052603707654184> ${member.guild.channels.cache.get('878862246414020628').toString()}\n <a:PinkStar2:894052602860408853> Và chọn role tại:\n<a:sparkle7:894052603141443685>${member.guild.channels.cache.get('879271959853154344').toString()}\n<:WannyHypeDONTSTEAL:894052603443429376> Chúc bạn có nhưng giây phút vui vẻ tại server của chúng tôi`)
    .setThumbnail('https://media2.giphy.com/media/HTVeYVXjLiunFlUOeu/giphy.gif?cid=ecf05e47q73m9htvgy80z6cwnpe5d3czv780mf5w3xns1nia&rid=giphy.gif&ct=g')
    .setImage("attachment://welcome-image.png");



    

channel.send(`Hello <@${member.id }> ! `);
channel.send({ embeds: [welcome_eEmbed],files: [attachment] });
member.roles.add('882970392728322048');



}
