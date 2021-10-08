require("http").createServer((req, res) => res.end(process.version)).listen()
const fs = require('fs');
const { Client, Collection, Intents,MessageEmbed} = require('discord.js');

//const { token } = require('./config.json');
require('dotenv').config();
const client = new Client({intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MEMBERS,
	//Intents.FLAGS.GUILD_BANS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
	Intents.FLAGS.DIRECT_MESSAGES,
	Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
	//Intents.FLAGS.GUILD_VOICE_STATES,
	//Intents.FLAGS.GUILD_PRESENCES,
]});

////commands


client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});



//////////events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}





client.login(process.env.TOKEN);
