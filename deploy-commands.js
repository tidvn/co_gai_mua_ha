const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
//const { clientId, guildId, token } = { , process.env.GUILDID , process.env.TOKEN}


const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CHIENTID, process.env.GUILDID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);