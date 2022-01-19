//here the event starts
require('dotenv').config();

let stateswitch = false;
module.exports = client => {
  //SETTING ALL GUILD DATA FOR THE DJ ONLY COMMANDS for the DEFAULT
  //client.guilds.cache.forEach(guild=>client.settings.set(guild.id, ["autoplay", "clearqueue", "forward", "loop", "jump", "loopqueue", "loopsong", "move", "pause", "resume", "removetrack", "removedupe", "restart", "rewind", "seek", "shuffle", "skip", "stop", "volume"], "djonlycmds"))
  try{
    try{
      console.log(`Ready! Logged in as ${client.user.tag}`);
    }catch{ /* */ }
    setInterval(() => {
      stateswitch = !stateswitch; //thay đổi trạng thái
         if (stateswitch) client.user.setActivity(`${process.env.PREFIX}help`, { type: "LISTENING",status: 'idle' });
         else client.user.setPresence({ activities: [{ name: 'Genshin Impact',type: "COMPETING",url: "https://discord.gg/kpEsbYuChe" }], status: 'online' });
   }, 4000); 

  
  } catch (e){
    console.log(String(e.stack).grey.italic.dim.bgRed)
  }
}
