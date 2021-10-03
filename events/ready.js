const antiAd = require('./module_ready_events/anti-ad.js')

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		antiAd(client);
	},
};
