module.exports= (interaction)=>{
	
	const member = interaction.guild.members.cache.find((member) => member.id === interaction.user.id);
    function crole(rls){
		return interaction.guild.roles.cache.find(role => role.name === rls);
	}
	if (interaction.isSelectMenu()) 
	{		
		
		//member.roles.remove('882970392728322048');
		
		
        if(interaction.customId=='Sex') {
		member.roles.remove(crole(`Nam`)); 
		member.roles.remove(crole(`Nữ`)); 
		member.roles.remove(crole(`giới tính thứ 3`)); 
		
			switch (interaction.values[0]){
			case 'Nam' :
				member.roles.add(crole(`Nam`));
			break;
			case 'Nu' :
				member.roles.add(crole(`Nữ`));
			break;
			case 'Khac' :
				member.roles.add(crole(`giới tính thứ 3`));
			break;
		}
		
		
		}


		if(interaction.customId=='ON') {
			member.roles.remove(crole(`Newbie`)); 
			member.roles.remove(crole(`Oldbie`));
			switch (interaction.values[0]){
				case 'Oldbie' :
					member.roles.add(crole(`Oldbie`));
				break;
				case 'Newbie' :
					member.roles.add(crole(`Newbie`));
				break;
			} 
		}

		if(interaction.customId=='Device') {
			member.roles.remove(crole(`PC`)); 
			member.roles.remove(crole(`Mobile`));
			member.roles.remove(crole(`PS`));
		if (interaction.values.includes(`Pc`)) member.roles.add(crole(`PC`));
		if (interaction.values.includes(`Mobile`)) member.roles.add(crole(`Mobile`));
		if (interaction.values.includes(`Ps`)) member.roles.add(crole(`PS`));
		}

		if(interaction.customId=='Game') {
			member.roles.remove(crole(`Genshin Impact`)); 
			member.roles.remove(crole(`Valorant`));
			member.roles.remove(crole(`League of Legends`));
			member.roles.remove(crole(`Honkai Impact`));
			member.roles.remove(crole(`Counter Strike`));
		if (interaction.values.includes(`Genshin_Impact`)) member.roles.add(crole(`Genshin Impact`));
		if (interaction.values.includes(`Honkai_Impact`)) member.roles.add(crole(`Honkai Impact`));
		if (interaction.values.includes(`League_of_Legends`)) member.roles.add(crole(`League of Legends`));
		if (interaction.values.includes(`Valorant`)) member.roles.add(crole(`Valorant`));
		if (interaction.values.includes(`CSGO`)) member.roles.add(crole(`Counter Strike`));
		}
		
		
		interaction.deferUpdate();

	}


else if (interaction.isButton()) 
{
	if (interaction.customId=='diemdanh_on') member.roles.add(crole(`điểm danh`));
	if (interaction.customId=='diemdanh_off') member.roles.remove(crole(`điểm danh`));
	if (interaction.customId=='confirm_rules') member.roles.remove(crole(`Not verified`));
	interaction.deferUpdate();
}
}
