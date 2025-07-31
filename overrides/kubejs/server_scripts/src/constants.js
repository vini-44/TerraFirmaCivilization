// priority: 100

const ADDED_ANVIL_RECIPES = [];

const CIV_REMOVE = [
	'crafting/sextant',
	'anvil/unfinished_sextant',
	'crafting/nav_clock',
	'anvil/unfinished_nav_clock',
	'crafting/barometer',
	'anvil/unfinished_barometer',
];

const WIRE_METALS = {
	'firmalife:metal/rod/chromium': 'kubejs:chromium_wire',
	'tfc:metal/rod/copper': 'createaddition:copper_wire',
	'tfc:metal/rod/wrought_iron': 'createaddition:iron_wire',
	'tfc:metal/rod/gold': 'createaddition:gold_wire',
};

const COPYCAT_BLOCKS = [
	'create:copycat_step',
	'create:copycat_panel',
	'create_connected:copycat_slab',
	'create_connected:copycat_block',
	'create_connected:copycat_beam',
	'create_connected:copycat_vertical_step',
	'create_connected:copycat_stairs',
	'create_connected:copycat_fence',
	'create_connected:copycat_wall',
	'create_connected:copycat_fence_gate',
	'create_connected:copycat_board',
	'create_connected:copycat_box',
	'create_connected:copycat_catwalk',
];

const REMOVE_TFC = ['crankshaft', 'quern', 'handstone', 'trip_hammer'];
const METAL_DEFS = [
	'bismuth',
	'bismuth_bronze',
	'black_bronze',
	'bronze',
	'brass',
	'copper',
	'gold',
	'nickel',
	'rose_gold',
	'silver',
	'tin',
	'zinc',
	'sterling_silver',
	'wrought_iron',
	'cast_iron',
	'steel',
	'black_steel',
	'blue_steel',
	'red_steel',
];

const CHROMITE_CRUSHING_DEFS = {
	small: 1,
	poor: 3,
	normal: 5,
	rich: 7,
};

const ORE_DEFS = [
	{ ore: 'limonite', meltingTemp: 1535, metal: 'cast_iron' },
	{ ore: 'sphalerite', meltingTemp: 420, metal: 'zinc' },
	{ ore: 'tetrahedrite', meltingTemp: 1080, metal: 'copper' },
	{ ore: 'magnetite', meltingTemp: 1535, metal: 'cast_iron' },
	{ ore: 'malachite', meltingTemp: 1080, metal: 'copper' },
	{ ore: 'garnierite', meltingTemp: 1453, metal: 'nickel' },
	{ ore: 'bismuthinite', meltingTemp: 270, metal: 'bismuth' },
	{ ore: 'cassiterite', meltingTemp: 230, metal: 'tin' },
	{ ore: 'native_silver', meltingTemp: 961, metal: 'silver' },
	{ ore: 'hematite', meltingTemp: 1535, metal: 'cast_iron' },
	{ ore: 'native_gold', meltingTemp: 1060, metal: 'gold' },
	{ ore: 'native_copper', meltingTemp: 1080, metal: 'copper' },
	//{ore: 'chromite', meltingTemp: 1250, metal: 'chromium'},
];

const POWDER_HEAT_DEFS = {
	tetrahedrite: 1.143,
	native_copper: 1.143,
	malachite: 1.143,
	sphalerite: 1.905,
	native_silver: 0.833,
	native_gold: 0.667,
	magnetite: 1.143,
	limonite: 1.143,
	hematite: 1.143,
	garnierite: 0.833,
	cassiterite: 2.857,
	bismuthinite: 2.857,
};

const FERTILIZER_DEFS = {
	//item                     N   P   K
	'tfc:groundcover/guano': [0.8, 0.5, 0.1],
	'tfc:compost': [0.4, 0.2, 0.4],
	'tfc:powder/saltpeter': [0.1, 0.4, 0],
	'tfc:powder/sylvite': [0, 0, 0.5],
	'tfc:powder/wood_ash': [0, 0.1, 0.3],
	bone_meal: [0, 0.1, 0],
};

const CHROMITE_POWDER_TAGS = [
	//'tfc:glassworking_powders',
	'c:dusts',
	'forge:dusts',
	'tfc:powders',
	'supplementaries:hourglass_dusts',
];

const METAL_POWDERS = [
	'tfc:powder/magnetite',
	'tfc:powder/limonite',
	'tfc:powder/sphalerite',
	'tfc:powder/tetrahedrite',
	'kubejs:chromite_powder',
	'tfc:powder/magnetite',
	'tfc:powder/malachite',
	'tfc:powder/garnierite',
	'tfc:powder/bismuthinite',
	'tfc:powder/cassiterite',
	'tfc:powder/native_silver',
	'tfc:powder/hematite',
	'tfc:powder/native_gold',
	'tfc:powder/native_copper',
];

const CHAINS = [
	'tfc:metal/chain/bismuth_bronze',
	'tfc:metal/chain/black_bronze',
	'tfc:metal/chain/bronze',
	'tfc:metal/chain/copper',
	'tfc:metal/chain/wrought_iron',
	'tfc:metal/chain/steel',
	'tfc:metal/chain/black_steel',
	'tfc:metal/chain/blue_steel',
	'tfc:metal/chain/red_steel',
];

const STONE_DEFS = [
	'granite',
	'andesite',
	'dacite',
	'diorite',
	'gabbro',
	'quartzite',
	'slate',
	'shale',
	'claystone',
	'phyllite',
	'schist',
	'limestone',
	'conglomerate',
	'gneiss',
	'marble',
	'dolomite',
	'chert',
	'chalk',
	'rhyolite',
	'basalt',
];

const METAL_BARS = [
	'tfc:metal/bars/black_steel',
	'tfc:metal/bars/blue_steel',
	'tfc:metal/bars/red_steel',
	'quark:gold_bars',
	'create:brass_bars',
	'tfc:metal/bars/bismuth_bronze',
	'tfc:metal/bars/black_bronze',
	'tfc:metal/bars/bronze',
	'tfc:metal/bars/copper',
	'tfc:metal/bars/wrought_iron',
	'tfc:metal/bars/steel',
];

const WOODEN_STUFF = {
	'#minecraft:fences': 2,
	'#tfc:lumber': 1,
	'#minecraft:planks': 4,
	'#minecraft:wooden_doors': 3,
	'#minecraft:wooden_trapdoors': 2,
	'#tfc:bookshelves': 6,
	'#minecraft:wooden_slabs': 2,
	'#minecraft:wooden_stairs': 3,
	'#tfc:barrels': 7,
	'#forge:chests/wooden': 8,
	'#minecraft:logs': 8,
};

//kind like the wooden stuff, but with TFC filepaths, instead of tags, for use with the WOOD_TYPES constant
//loom, door, trapdoor, stairs, tool_rack, slab, pressure_plate, button, fence_gate, log_fence, fence, vertical_*_planks
const SAWING_DEFS = [
	'tfc:wood/log/',
	'tfc:wood/planks/',
	'tfc:wood/barrel/',
	'tfc:wood/lectern/',
	'tfc:wood/jar_shelf/',
	'tfc:wood/sign/',
	'tfc:wood/support/',
	'tfc:wood/boat/',
	'everycomp:q/tfc/',
	'tfc:wood/chest/',
];

const NONMETAL_POWDERS = [
	'lime',
	'kaolinite',
	'flux',
	'wood_ash',
	'charcoal',
	'sylvite',
	'sulfur',
	'soda_ash',
	'saltpeter',
	'graphite',
	'salt',
];

const GEM_TYPES = [
	'topaz',
	'sapphire',
	'ruby',
	'pyrite',
	'opal',
	'lapis_lazuli',
	'emerald',
	'diamond',
	'amethyst',
];

const TFC_WOOD_TYPES = [
	'pine',
	'sycamore',
	'white_cedar',
	'rosewood',
	'maple',
	'douglas_fir',
	'aspen',
	'birch',
	'hickory',
	'oak',
	'sequoia',
	'willow',
	'mangrove',
	'chestnut',
	'ash',
	'kapok',
	'blackwood',
	'acacia',
	'palm',
	'spruce',
];

const AFC_WOOD_TYPES = [
	'ironwood',
	'ipe',
	'ironwood',
	'fig',
	'cypress',
	'teak',
	'tualang',
	'hevea',
	'mahogany',
	'eucalyptus',
	'baobab',
];

const NONWHITE_COLORS = [
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
];

const ALL_COLORS = [
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

const WELDER_FUELS = ['createdieselgenerators:biodiesel', 'createdieselgenerators:diesel', 'createdieselgenerators:gasoline', 'createdieselgenerators:ethanol', 'kubejs:kerosene', 'kubejs:liquid_hydrogen'];

const POWDERS = [
	'flux',
	'kaolinite',
	'lime',
	'saltpeter',
	'soda_ash',
	'sulfur',
	'sylvite',
	'sphalerite',
	'limonite',
	'magnetite',
	'malachite',
	'garnierite',
	'bismuthinite',
	'cassiterite',
	'salt',
	'native_silver',
	'hematite',
	'graphite',
	'charcoal',
	'native_gold',
	'native_copper',
	'wood_ash',
	'tetrahedrite',
	'chromite',
];

const BREW_BERRIES = [
	'snowberry',
	'strawberry',
	'wintergreen_berry',
	'raspberry',
	'gooseberry',
	'elderberry',
	'cranberry',
	'cloudberry',
	'bunchberry',
	'blueberry',
	'blackberry',
];

const BREW_DURATION_MULTS = [1, 2, 3, 4, 5, 6];

const BREW_FLOWERS = [
	'strelitzia',
	'canna',
	'lotus',
	'blue_ginger',
	'lily_of_the_valley',
	'sargassum',
	'trillium',
	'blood_lily',
	'snapdragon_pink',
	'hibiscus',
	'guzmania',
	'poppy',
	'blue_orchid',
	'yucca',
	'pistia',
	'pulsatilla',
	'goldenrod',
	'marigold',
	'oxeye_daisy',
	'nasturtium',
	'foxglove',
	'rose',
	'calendula',
	'snapdragon_red',
	'butterfly_milkweed',
	'sapphire_tower',
	'sacred_datura',
	'dandelion',
	'tulip_red',
	'water_lily',
	'anthurium',
	'lilac',
	'labrador_tea',
	'grape_hyacinth',
	'sagebrush',
	'black_orchid',
	'snapdragon_white',
	'desert_flame',
	'snapdragon_yellow',
	'kangaroo_paw',
	'tulip_white',
	'silver_spurflower',
	'tulip_pink',
	'tropical_milkweed',
	'toquilla_palm',
	'allium',
	'vriesea',
	'tulip_orange',
	'primrose',
];

const BREW_EFFECTS = [
	'minecraft:weakness',
	'minecraft:luck',
	'quark:resilience',
	'minecraft:strength',
	'minecraft:regeneration',
	'minecraft:poison',
	'minecraft:harming',
	'minecraft:healing',
	'minecraft:slowness',
	'minecraft:swiftness',
	'minecraft:leaping',
];

const VALID_TFC_POWDERS = Ingredient.of('#tfc:powders').itemIds;

const BREW_INGREDIENTS = [
	'firmalife:plant/cilantro',
	'firmalife:plant/basil',
	'firmalife:plant/bay_laurel',
	'firmalife:plant/cardamom',
	'firmalife:plant/cumin',
	'firmalife:plant/oregano',
	'firmalife:plant/pimento',
	'firmalife:plant/vanilla',
	'minecraft:spider_eye',
	'tfc:plant/laminaria',
	'tfc:plant/artists_conk',
	'tfc:food/cattail_root',
	'minecraft:glow_ink_sac',
];

const BREW_FRUIT_INGREDIENTS = ['#tfc:foods/fruits', '#tfc:sweetener'];

const USABLE_ON_TOOL_RACK = [
	'createbigcannons:cannon_welder',
	'musketmod:pistol',
	//'musketmod:musket_with_bayonet',
	//'musketmod:musket',
	'create:wrench',
	//'supplementaries:wrench', doesn't work. it tries rotating it.
	//'thermal:wrench', same with this
	'thermal:detonator',
	'thermal:flux_saw',
	'thermal:flux_drill',
	'thermal:flux_capacitor',
];

const WRENCH_PICKUP = [
	'quark:obsidian_pressure_plate',
	'quark:encased_pipe',
	'quark:pipe',
	'quark:redstone_randomizer',
	'supplementaries:relayer',
	'supplementaries:bellows',
	'supplementaries:crystal_display',
	'supplementaries:faucet',
	'supplementaries:turn_table',
	'supplementaries:spring_launcher',
];

const AVAILABLE_GUNS = [
	'scguns:mas_55',
	'scguns:krauser',
	'scguns:uppercut',
	'scguns:lockewood',
	'scguns:soul_drummer',
	'scguns:inertial',
	'scguns:prush_gun',
	'scguns:flintlock_pistol',
	'scguns:musket',
	'scguns:blunderbuss',
	'scguns:saketini',
	'scguns:pax',
	'scguns:winnie',
	'scguns:auvtomag',
	'scguns:combat_shotgun',
	'scguns:defender_pistol',
	'scguns:m3_carabine',
	'scguns:iron_javelin',
	'scguns:greaser_smg',
	'scguns:callwell',
	'scguns:iron_spear',
    'scguns:cogloader',
    'scguns:m22_waltz'
];

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

const REMOVE_SNS = [
	'sns:quiver',
	'sns:straw_basket',
	'sns:hiking_boots',
	'sns:steel_toe_hiking_boots',
	'sns:black_steel_toe_hiking_boots',
	'sns:blue_steel_toe_hiking_boots',
	'sns:red_steel_toe_hiking_boots',
	'sns:buckle',
];

const REMOVE_FIRMALIFE = [
	'firmalife:exposed_copper_greenhouse_port',
	'firmalife:exposed_copper_greenhouse_port',
	'firmalife:weathered_copper_greenhouse_port',
	'firmalife:oxidized_copper_greenhouse_port',
	'firmalife:iron_greenhouse_port',
	'firmalife:rusted_iron_greenhouse_port',
	'firmalife:pumping_station',
	'firmalife:irrigation_tank',
	'firmalife:oxidized_copper_pipe',
	'firmalife:copper_pipe',
	'firmalife:stainless_steel_greenhouse_port',
	'firmalife:treated_wood_greenhouse_port',
	'firmalife:weathered_treated_wood_greenhouse_port',
	'firmalife:copper_greenhouse_port',
];

//only to be used for getting temp data, since it has both chromium and stainless steel here too.
const METAL_HEATING_DEFS = {
	bismuth: { forging_temp: 162, welding_temp: 216 },
	bismuth_bronze: { forging_temp: 591, welding_temp: 788 },
	black_bronze: { forging_temp: 642, welding_temp: 856 },
	bronze: { forging_temp: 570, welding_temp: 760 },
	brass: { forging_temp: 558, welding_temp: 744 },
	copper: { forging_temp: 648, welding_temp: 864 },
	gold: { forging_temp: 636, welding_temp: 848 },
	nickel: { forging_temp: 872, welding_temp: 1162 },
	rose_gold: { forging_temp: 576, welding_temp: 768 },
	silver: { forging_temp: 577, welding_temp: 769 },
	tin: { forging_temp: 138, welding_temp: 184 },
	zinc: { forging_temp: 252, welding_temp: 336 },
	sterling_silver: { forging_temp: 570, welding_temp: 760 },
	wrought_iron: { forging_temp: 921, welding_temp: 1228 },
	cast_iron: { forging_temp: 921, welding_temp: 1228 },
	steel: { forging_temp: 924, welding_temp: 1232 },
	black_steel: { forging_temp: 891, welding_temp: 1188 },
	blue_steel: { forging_temp: 924, welding_temp: 1232 },
	red_steel: { forging_temp: 591, welding_temp: 788 },
	chromium: { forging_temp: 750, welding_temp: 1000 },
	stainless_steel: { forging_temp: 924, welding_temp: 1232 },
};

/**
 * @param {string} metal - The metal to get the forging temperature for. Without a namespace (e.g. "stainless_steel")
 * @returns {number} The forging temperature of the metal
 */
function getForgingTemp(metal) {
	return METAL_HEATING_DEFS[metal].forging_temp;
}

/**
 * @param {string} metal - The metal to get the welding temperature for. Without a namespace (e.g. "stainless_steel")
 * @returns {number} The welding temperature of the metal
 */
function getWeldingTemp(metal) {
	return METAL_HEATING_DEFS[metal].welding_temp;
}
