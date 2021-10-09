

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({ activities: [{ name: 'Genshin Impact',type: "STREAMING",url: "https://www.twitch.tv/tidvn" }], status: 'online' });
		
	},
};
