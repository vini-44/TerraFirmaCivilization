//Register new items here.
const $FlintAndSteelItem = Java.loadClass(
	'net.minecraft.world.item.FlintAndSteelItem'
);
const $ItemProperties = Java.loadClass(
	'net.minecraft.world.item.Item$Properties'
);

const registryDef = {
	//pistol_barrel: {name: "Pistol Barrel"},
	//musket_barrel: {name: "Musket Barrel"},
	musket_ball: { name: 'Musket Balls' },

	chromite_powder: { name: 'Chromite Powder' },
	unfired_andesite_alloy: { name: 'Unfired Cerametal' },
	chromium_wire: { name: 'Chromium Wire' },
	unfinished_distillation_controller: {
		name: 'Unfinished Distillation Controller',
	},
	unfinished_oil_scanner: { name: 'Unfinished Oil Detector' },
	empty_fuel_can: {
		name: 'Empty Fuel Package',
		tags: ['create:upright_on_belt'],
	},
	diesel_fuel_can: {
		name: 'Packaged Diesel',
		tags: ['create:upright_on_belt'],
	},
	gasoline_fuel_can: {
		name: 'Packaged Gasoline',
		tags: ['create:upright_on_belt'],
	},
	biodiesel_fuel_can: {
		name: 'Packaged Biodiesel',
		tags: ['create:upright_on_belt'],
	},
	ethanol_fuel_can: {
		name: 'Packaged Ethanol',
		tags: ['create:upright_on_belt'],
	},

	kaolinite: {
		name: 'Kaolinite',
		tags: ['tfc:ore_pieces', 'sns:allowed_in_ore_sack'],
	},

	kaolinite_sludge: { name: 'Kaolinite Sludge' },
	hardened_kaolinite_sludge: { name: 'Dried Kaolinite Sludge' },
	alumina_powder: { name: 'Alumina Powder' },

	unfinished_gun_parts: { name: 'Unfinished Gun Parts' },
	unfinished_heavy_gun_parts: { name: 'Unfinished Heavy Gun Parts' },
	unfinished_iron_gun_frame: { name: 'Unfinished Steel Gun Frame' },
	unfinished_diamond_steel_gun_frame: {
		name: 'Unfinished Blue Steel Gun Frame',
	},

	rocket_fuel: { name: 'Rocket Fuel' },
	wood_pulp: { name: 'Wood Pulp' },
	washed_wood_pulp: { name: 'Washed Wood Pulp' },
	scrap: { name: 'Unknown Metal Scrap' },

	//relics
	horse_relic: { name: 'Horse Relic' },
	horse_relic_gold: { name: 'Golden Horse Relic' },
	humanlike_relic: { name: 'Human-like Relic' },
	humanlike_relic_gold: { name: 'Golden Human-like Relic' },
	rusty_sword: { name: 'Rusty Copper Sword' },
	rusty_axe: { name: 'Rusty Copper Axe' },
	rusty_shovel: { name: 'Rusty Copper Shovel' },
	rusty_scythe: { name: 'Rusty Copper Scythe' },
	rusty_mace: { name: 'Rusty Copper Mace' },
	rusty_pickaxe: { name: 'Rusty Copper Pickaxe' },
	straw_doll_0: { name: 'Lost Doll' },
	straw_doll_1: { name: 'Lost Doll' },
	automaton_head: { name: 'Automaton Head' },
	bee_trinket: { name: 'Bee Trinket' },

	//diamond steel set
	unfinished_diamond_steel_helmet: {
		name: 'Unfinished Caoivish Helmet',
		unstackable: true,
	},
	unfinished_diamond_steel_chestplate: {
		name: 'Unfinished Caoivish Chestplate',
		unstackable: true,
	},
	unfinished_diamond_steel_boots: {
		name: 'Unfinished Caoivish Boots',
		unstackable: true,
	},
	manganite_chunk: {
		name: 'Manganite Chunk',
		texture: 'thermal:item/raw_nickel',
		tags: ['kubejs:manganese_ore', 'tfc:ore_pieces'],
	},
	rhodocrosite_fragment: {
		name: 'Rhodocrosite Fragment',
		texture: 'thermal:item/rich_slag',
		tags: ['kubejs:manganese_ore', 'tfc:ore_pieces'],
	},

	kyanite_dust: {
		name: 'Kyanite Dust',
		tags: [
			'supplementaries:hourglass_dusts',
			'forge:dusts',
			'forge:dusts/kyanite',
		],
		texture: 'thermal:item/apatite_dust',
	},

	unfired_refractory_brick: {
		name: 'Unfired Refractory Brick',
		tags: ['tfc:unfired_pottery'],
	},
	refractory_brick: {
		name: 'Refractory Brick',
	},

	ilmenite_chunk: {
		name: 'Ilmenite',
		tags: ['tfc:ore_pieces', 'sns:allowed_in_ore_sack'],
		texture: 'thermal:item/raw_tin',
	},
	ilmenite_powder: {
		name: 'Ilmenite Powder',
		tags: [
			'forge:dusts',
			'forge:dusts/ilmenite',
			'supplementaries:hourglass_dusts',
			'kubejs:metal_powders',
		],
		texture: 'thermal:item/tin_dust',
	},
	titanium_powder: {
		name: 'Titanium Powder',
		tags: [
			'forge:dusts',
			'forge:dusts/titanium',
			'supplementaries:hourglass_dusts',
			'kubejs:metal_powders',
		],
		texture: 'thermal:item/silver_dust',
	},

	wolframite_chunk: {
		name: 'Wolframite',
		tags: ['tfc:ore_pieces', 'sns:allowed_in_ore_sack'],
		texture: 'thermal:item/raw_lead',
	},
	wolframite_powder: {
		name: 'Wolframite Powder',
		tags: [
			'forge:dusts',
			'forge:dusts/wolframite',
			'supplementaries:hourglass_dusts',
			'kubejs:metal_powders',
		],
		texture: 'thermal:item/lead_dust',
	},

	unrefined_tungsten_powder: {
		name: 'Unrefined Tungsten Powder',
		tags: ['forge:dusts', 'supplementaries:hourglass_dusts'],
		texture: 'thermal:item/netherite_dust',
	},

	tungsten_powder: {
		name: 'Tungsten Powder',
		tags: [
			'forge:dusts',
			'forge:dusts/tungsten',
			'supplementaries:hourglass_dusts',
			'kubejs:metal_powders',
		],
		texture: 'thermal:item/tin_dust',
	},
	tungsten_carbide_parts: {
		name: 'Tungsten Carbide Parts',
		texture: 'thermal:item/lead_gear',
	},
    plasma_gun_parts: {
        name: "Magnetic Acceletor Coil"
    },
    unfinished_energy_cell: {
        name: "Unfinished Plasma Cell",
        texture: "scguns:item/shock_cell"
    },
    //plastic: {
    //    name: "Plastic Sheet",
    //    texture: "thermal:item/rubber"
    //},
};

/**
 * @param {Registry.Item} event - The event object to create the item with.
 * @param {string} name - The name of the item.
 * @param {Object} recipe - The definition of the item.
 * @param {boolean} recipe.unstackable - Whether the item is unstackable.
 * @param {number} recipe.maxDamage - The maximum damage the item can take.
 * @param {string} recipe.name - Actual naem of the item.
 * @param {string[]} recipe.tags - Tags of the item.
 * @param {string} recipe.texture - The texture of the item.
 * @return {Internal.BuilderBase<Internal.Item>} The created item.
 */
function registerItem(event, name, def) {
	let item = event.create(name).displayName(def.name);

	if (def.tags) {
		def.tags.forEach((tag) => {
			item.tag(tag);
		});
	}

	if (def.texture) {
		item.texture(def.texture);
	}

	if (def.unstackable) {
		item.unstackable();
	}

	if (def.maxDamage) {
		item.maxDamage(def.maxDamage);
	}
	return item;
}

StartupEvents.registry('item', (event) => {
	for (const [name, def] of Object.entries(registryDef)) {
		registerItem(event, name, def);
	}

	event
		.create('unfinished_upgrade_augment_3', 'create:sequenced_assembly')
		.displayName('Unfinished High-Efficiency Component Replacement');

	let metal_item_types = {
		ingot: 'Ingot',
		double_ingot: 'Double Ingot',
		sheet: 'Sheet',
		double_sheet: 'Double Sheet',
		rod: 'Rod',
	};

	let new_metals = [
		'Aluminum',
		'Mangalloy',
		'Manganese',
		'Titanium',
		'Tungsten',
		'Carotine Steel',
	];

	new_metals.forEach((metal) => {
		for (const [name, _item] of Object.entries(metal_item_types)) {
			let metal_id = metal.toLowerCase().replace(' ', '_');
			let item = event
				.create(`metal/${name}/${metal_id}`)
				.displayName(`${metal} ${_item}`);

			item.tag(`tfc:metal_item/${metal_id}`);

			switch (name) {
				case 'ingot':
					item.tag('tfc:pileable_ingots');
					item.tag('forge:ingots');
					item.tag(`forge:ingots/${metal_id}`);
					break;
				case 'double_ingot':
					item.tag('tfc:pileable_double_ingots');
					item.tag('forge:double_ingots');
					item.tag(`forge:double_ingots/${metal_id}`);
					break;
				case 'sheet':
					item.tag('tfc:pileable_sheets');
					item.tag('forge:sheets');
					item.tag(`forge:sheets/${metal_id}`);
					break;
				case 'double_sheet':
					item.tag('forge:double_sheets');
					item.tag(`forge:double_sheets/${metal_id}`);
					break;
				case 'rod':
					item.tag('forge:rods');
					item.tag(`forge:rods/${metal_id}`);
					break;
			}
		}
	});

	event.createCustom(
		'flint_and_pyrite',
		() =>
			new $FlintAndSteelItem(
				new $ItemProperties().defaultDurability(32).durability(32)
			)
	);
});
