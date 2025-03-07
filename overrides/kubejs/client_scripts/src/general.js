// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ClientEvents.lang('en_us', (event) => {
	event.renameBlock('minecraft:gravel', 'Debris');
	event.renameBlock('minecraft:suspicious_gravel', 'Suspicious Debris');
	event.renameBlock('createlowheated:basic_burner', 'Burner'); //TODO rename other references

	event.renameItem(
		'immersive_aircraft:hull_reinforcement',
		'Lightweight Hull'
	);

	event.renameItem('quark:rope', 'Thick Rope');

    event.renameBlock('refurbished_furniture:light_electricity_generator', "Light Househoud Transformer")
    event.renameBlock('refurbished_furniture:dark_electricity_generator', "Dark Househoud Transformer")


    event.renameItem('scguns:diamond_steel_boots', "Caoivish Boots")
    event.renameItem('scguns:diamond_steel_leggings', 'Uniform')
    event.renameItem('scguns:diamond_steel_chestplate', 'Caoivish Chestplate')
    event.renameItem('scguns:diamond_steel_helmet', 'Caoivish Helmet')
});