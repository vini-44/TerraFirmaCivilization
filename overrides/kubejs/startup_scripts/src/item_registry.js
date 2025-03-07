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
    processed_manganite_powder: { name: 'Processed Manganite Powder' },
	unfinished_gun_parts: { name: 'Unfinished Gun Parts' },
	unfinished_heavy_gun_parts: { name: 'Unfinished Heavy Gun Parts' },

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
};

/**
 * @param {Registry.Item} event - The event object to create the item with.
 * @param {string} name - The name of the item.
 * @param {Object} def - The definition of the item.
 * @param {boolean} def.unstackable - Whether the item is unstackable.
 * @param {number} def.maxDamage - The maximum damage the item can take.
 * @param {string} def.name - Actual naem of the item.
 * @return {Internal.BuilderBase<Internal.Item>} The created item.
 */
function registerItem(event, name, def) {
	let item = event.create(name).displayName(def.name);

	if (def.tags) {
		def.tags.forEach((tag) => {
			item.tag(tag);
		});
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

	/*let item = event.create('umbrella')
    item.displayName("Umbrella")
    item.unstackable()
    item.maxDamage(100)
    item.modelJson('kubejs:item/umbrella.json')*/

	//Musket part registry.
	/*event.create('pistol_barrel').displayName('Pistol Barrel');
    event.create('musket_barrel').displayName('Musket Barrel');
    event.create('musket_ball').displayName('Musket Balls');
    event.create('chromite_powder').displayName('Chromite Powder');
    event.create('unfired_andesite_alloy').displayName("Unfired Cerametal");
    event.create('chromium_wire').displayName("Chromium Wire");
    event.create('copper_bullet').displayName('Copper Bullet')
    event.create('unfinished_distillation_controller').displayName('Unfinished Distillation Controller')
    event.create('unfinished_oil_scanner').displayName('Unfinished Oil Detector')

    event.create('handheld_mortar').displayName("Handheld Mortar").unstackable().maxDamage(100);

    event.create('autocannon').displayName("Handheld Autocannon").unstackable().maxDamage(100);*/

    event.create('manganite_chunk').texture('thermal:item/rich_slag').displayName('Manganite Chunk');

	let aluminum_items = {
		ingot: 'Ingot',
		double_ingot: 'Double Ingot',
		sheet: 'Sheet',
		double_sheet: 'Double Sheet',
	};

	for (const [name, _item] of Object.entries(aluminum_items)) {
		let item = event
			.create(`metal/${name}/aluminum`)
			.displayName(`Aluminum ${_item}`);
		item.tag('tfc:metal/item/aluminum');

		switch (name) {
			case 'ingot':
				item.tag('tfc:pileable_ingots');
				item.tag('forge:ingots');
				item.tag('forge:ingots/aluminum');
				break;
			case 'double_ingot':
				item.tag('tfc:pileable_double_ingots');
				item.tag('forge:double_ingots');
				item.tag('forge:double_ingots/aluminum');
				break;
			case 'sheet':
				item.tag('tfc:pileable_sheets');
				item.tag('forge:sheets');
				item.tag('forge:sheets/aluminum');
				break;
			case 'double_sheet':
				item.tag('forge:double_sheets');
				item.tag('forge:double_sheets/aluminum');
				break;
		}
	}

	let mangalloy_items = {
		ingot: 'Ingot',
		double_ingot: 'Double Ingot',
		sheet: 'Sheet',
		double_sheet: 'Double Sheet',
	};

	for (const [name, _item] of Object.entries(mangalloy_items)) {
		let item = event
			.create(`metal/${name}/mangalloy`)
			.displayName(`Mangalloy ${_item}`);
		item.tag('tfc:metal/item/mangalloy');

		switch (name) {
			case 'ingot':
				item.tag('tfc:pileable_ingots');
				item.tag('forge:ingots');
				item.tag('forge:ingots/mangalloy');
				break;
			case 'double_ingot':
				item.tag('tfc:pileable_double_ingots');
				item.tag('forge:double_ingots');
				item.tag('forge:double_ingots/mangalloy');
				break;
			case 'sheet':
				item.tag('tfc:pileable_sheets');
				item.tag('forge:sheets');
				item.tag('forge:sheets/mangalloy');
				break;
			case 'double_sheet':
				item.tag('forge:double_sheets');
				item.tag('forge:double_sheets/mangalloy');
				break;
		}
	}

	let manganese_items = {
		ingot: 'Ingot',
		double_ingot: 'Double Ingot',
		sheet: 'Sheet',
		double_sheet: 'Double Sheet',
	};

	for (const [name, _item] of Object.entries(manganese_items)) {
		let item = event
			.create(`metal/${name}/manganese`)
			.displayName(`Manganese ${_item}`);
		item.tag('tfc:metal/item/manganese');

		switch (name) {
			case 'ingot':
				item.tag('tfc:pileable_ingots');
				item.tag('forge:ingots');
				item.tag('forge:ingots/manganese');
				break;
			case 'double_ingot':
				item.tag('tfc:pileable_double_ingots');
				item.tag('forge:double_ingots');
				item.tag('forge:double_ingots/manganese');
				break;
			case 'sheet':
				item.tag('tfc:pileable_sheets');
				item.tag('forge:sheets');
				item.tag('forge:sheets/manganese');
				break;
			case 'double_sheet':
				item.tag('forge:double_sheets');
				item.tag('forge:double_sheets/manganese');
				break;
		}
	}

	event.createCustom(
		'flint_and_pyrite',
		() =>
			new $FlintAndSteelItem(
				new $ItemProperties().defaultDurability(32).durability(32)
			)
	);
});
