// priority: 0

// Visit the wiki for more info - https://kubejs.com/
const ALL_ROCKS = [
	'chalk',
	'chert',
	'conglomerate',
	'dolomite',
	'limestone',
	'claystone',
	'shale',
	'granite',
	'diorite',
	'rhyolite',
	'basalt',
	'andesite',
	'dacite',
	'quartzite',
	'slate',
	'phyllite',
	'schist',
	'gneiss',
	'marble',
	'gabbro',
];

ClientEvents.lang('en_us', (event) => {
	event.renameBlock('minecraft:gravel', 'Debris');
	event.renameBlock('minecraft:suspicious_gravel', 'Suspicious Debris');
	event.renameBlock('createlowheated:basic_burner', 'Solid Burner'); //TODO rename other references

    event.renameBlock('createdieselgenerators:burner', "Gas Burner")

	event.renameItem(
		'immersive_aircraft:hull_reinforcement',
		'Lightweight Hull'
	);

	event.renameItem('quark:rope', 'Thick Rope');

	event.renameBlock(
		'refurbished_furniture:light_electricity_generator',
		'Light Househoud Transformer'
	);
	event.renameBlock(
		'refurbished_furniture:dark_electricity_generator',
		'Dark Househoud Transformer'
	);

	event.renameItem('scguns:diamond_steel_boots', 'Caoivish Boots');
	event.renameItem('scguns:diamond_steel_leggings', 'Uniform');
	event.renameItem('scguns:diamond_steel_chestplate', 'Caoivish Chestplate');
	event.renameItem('scguns:diamond_steel_helmet', 'Caoivish Helmet');

	event.renameBlock('gilded_blackstone', 'Radio Components');

	event.renameItem('scguns:stone_gun_barrel', 'Steel Gun Barrel');
	event.renameItem('scguns:gun_barrel', 'Mangalloy Gun Barrel');
	event.renameItem('scguns:heavy_gun_barrel', 'Mangalloy Heavy Gun Barrel');
	event.renameItem('simpleradio:copper_wire', 'Audio Cable');

	event.renameItem(
		'createdieselgenerators:chemical_sprayer_lighter',
		'Chemical Burner'
	);

	event.renameBlock('createdieselgenerators:andesite_girder', 'Steel Girder');

	event.renameItem('thermal:upgrade_augment_3', 'High-Efficiency Component Replacement');

	let colors = [
		'red',
		'green',
		'brown',
		'blue',
		'purple',
		'cyan',
		'light_gray',
		'gray',
		'pink',
		'lime',
		'yellow',
		'light_blue',
		'magenta',
		'orange',
		'black',
		'white',
	];

	let dyeables = {
		seat: 'Seat',
		stool: 'Stool',
		valve: 'Valve',
		sofa: 'Sofa',
		flag: 'Flag',
		present: 'Present',
		chalk: 'Chalk',
		awning: 'Awning',
		bunting: 'Bunting',
		locometal: 'Locometal',
		locometal_boiler: 'Locometal',
		locometal_brass_boiler: 'Locometal Boiler',
		locometal_iron_boiler: 'Locometal Boiler',
		locometal_copper_boiler: 'Locometal Boiler',
		locometal_brass: 'Locometal',
		locometal_iron: 'Locometal',
		locometal_copper: 'Locometal',
		postbox: 'Postbox',
	};

	for (const color of colors) {
		for (const [dyeable, name] of Object.entries(dyeables)) {
			event.add(
				'tfc.recipe.barrel.kubejs.dyeing_' + dyeable + '_' + color,
				'Dyeing ' + name + ' ' + color[0].toUpperCase() + color.slice(1)
			);
		}
	}

	for (const [dyeable, name] of Object.entries(dyeables)) {
		event.add(
			'tfc.recipe.barrel.kubejs.bleaching_' + dyeable,
			'Bleaching ' + name
		);
	}

	event.renameBlock('amethyst_block', 'Kyanite Block');
	event.renameBlock('amethyst_cluster', 'Kyanite Cluster');
	event.renameItem('amethyst_shard', 'Kyanite Shard');

	event.add('block.minecraft.amethyst_block.prospected', 'Kyanite');
	event.add('block.minecraft.amethyst_cluster.prospected', 'Kyanite');

	ALL_ROCKS.forEach((rock) => {
		event.add(`block.kubejs.${rock}_ilmenite.prospected`, 'Ilmenite');
		event.add(`block.kubejs.${rock}_wolframite.prospected`, 'Wolframite');
	});

	event.add('metal.kubejs.titanium', 'Titanium');
	event.add('metal.kubejs.tungsten', 'Tungsten');
	event.add('metal.kubejs.carotine_steel', 'Carotine Steel');

	event.add('mold.createdieselgenerators.bar', 'Mold');

    event.add('block.kubejs.industrial_furnace', "Industrial Furnace Controller")
    event.add('block.kubejs.industrial_furnace_fluid_input', "Insulated Fluid Input Hatch")
    event.add('block.kubejs.industrial_furnace_fluid_output_hatch', "Insulated Fluid Output Hatch")

    event.add('block.kubejs.industrial_furnace_item_input_hatch', "Insulated Item Input Hatch")
    event.add('block.kubejs.industrial_furnace_item_output_hatch', "Insulated Item Output Hatch")

    event.add('block.kubejs.industrial_furnace_energy_acceptor', "Insulated Energy Acceptor")
    event.add('kubejs.industrial_furnace', "Industrial Blasting")

    event.add('block.kubejs.metal_former', "Metal Former Controller")
    event.add('block.kubejs.metal_former_su_input', "Metal Former Lathe")
    event.add('block.kubejs.metal_former_fluid_input', "Metal Former Internal Fluid Tank")

    event.add('block.kubejs.atmospheric_condenser', "Atmospheric Condenser")


    event.add('kubejs.metal_former', "Metal Forming")

    event.renameItem('scguns:treated_brass_gun_frame', 'Carotine Gun Frame')

    event.renameBlock('refurbished_furniture:door_mat', "Painted Doormat")

});
