// priority: 50

ServerEvents.recipes((event) => {
	event.shaped('4x scguns:grenade', ['A', 'B', 'C'], {
		A: 'tfc:metal/sheet/zinc',
		B: 'scguns:nitro_powder',
		C: '#forge:rods/wooden',
	});

	event.shapeless('4x scguns:molotov_cocktail', [
		'4x #firmalife:empty_wine_bottles',
		'kubejs:ethanol_fuel_can',
		['#tfc:sewing_light_cloth', '#tfc:sewing_dark_cloth'],
	]);

	event.custom({
		type: 'tfc:knapping',
		knapping_type: 'tfc:leather',
		pattern: [' XXX ', 'X   X', 'XXXXX', 'XXXXX', 'XXXXX'],
		result: {
			item: 'scguns:empty_casing_pouch',
		},
	});

	let ammo_boxes = [
		'scguns:pistol_ammo_box',
		'scguns:rifle_ammo_box',
		'scguns:shotgun_ammo_box',
		'scguns:rocket_ammo_box',
	];

	ammo_boxes.forEach((ammo_box) => {
		event.recipes.tfc.anvil(
			ammo_box,
			'firmalife:metal/sheet/stainless_steel',
			['bend_last', 'bend_second_last', 'bend_third_last']
		);

        ADDED_ANVIL_RECIPES.push([ammo_box, 'firmalife:metal/sheet/stainless_steel', 4]);
	});

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:iron_bayonet').copyForgingBonus(),
		[' A', 'B '],
		{
			A: 'tfc:metal/sword_blade/wrought_iron',
			B: '#tfc:lumber',
		},
		0,
		1
	);

	event.shaped('scguns:light_grip', ['ABA'], {
		A: 'firmaciv:copper_bolt',
		B: 'minecraft:leather',
	});
	event.shaped('scguns:vertical_grip', ['ABA', ' C ', ' D '], {
		A: 'firmaciv:copper_bolt',
		B: 'tfc:wood/lumber/acacia',
		C: 'tfc:metal/rod/steel',
		D: 'afc:rubber_bar',
	});
	event.shaped('scguns:wooden_stock', ['AAB', 'AA '], {
		A: 'tfc:wood/lumber/acacia',
		B: 'firmaciv:copper_bolt',
	});
	event.shaped('scguns:medium_scope', [' A ', ' B ', ' C '], {
		A: 'firmaciv:copper_bolt',
		B: 'tfc:lens',
		C: 'tfc:metal/sheet/steel',
	});

	event.shaped('scguns:weighted_stock', ['ABC', 'AA '], {
		A: 'tfc:wood/lumber/acacia',
		B: 'tfc:metal/sheet/steel',
		C: 'tfc:metal/rod/steel',
	});
	event.shaped('scguns:long_scope', [' A ', 'BCB', ' A '], {
		A: 'firmaciv:copper_bolt',
		B: 'tfc:lens',
		C: 'tfc:metal/sheet/steel',
	});
	event.shaped('scguns:light_stock', ['AAA', 'A  '], {
		A: 'tfc:metal/rod/steel',
	});

	event.shaped('scguns:extended_barrel', [' A ', 'BCB', ' A '], {
		A: 'firmaciv:copper_bolt',
		B: 'scguns:gun_barrel',
		C: 'tfc:metal/sheet/steel',
	});
	event
		.shapeless('scguns:muzzle_brake', [
			'scguns:heavy_gun_barrel',
			'#tfc:saws',
		])
		.damageIngredient('#tfc:saws', 10);

	event.shaped('scguns:adrien_chestplate', ['ABA', 'CDC', 'BAB'], {
		A: 'kubejs:metal/sheet/mangalloy',
		B: 'minecraft:leather',
		C: 'firmaciv:copper_bolt',
		D: 'kubejs:metal/double_sheet/mangalloy',
	});
	event.shaped('scguns:adrien_helm', ['ABA', 'CDC'], {
		A: 'firmaciv:copper_bolt',
		B: 'kubejs:metal/double_sheet/mangalloy',
		C: 'kubejs:metal/sheet/mangalloy',
		D: 'minecraft:leather',
	});

	event.recipes.create.milling('quark:moss_paste', ['tfc:plant/moss']);

	event.shapeless('4x scguns:basic_poultice', [
		'quark:moss_paste',
		['tfc:unrefined_paper', 'paper'],
	]);
	event.shapeless('4x scguns:honey_sulfur_poultice', [
		'quark:moss_paste',
		'paper',
		'firmalife:raw_honey',
		'tfc:powder/sulfur',
	]);
	event.shapeless('scguns:honey_sulfur_poultice', [
		'scguns:basic_poultice',
		'firmalife:raw_honey',
		'tfc:powder/sulfur',
	]);
	event.shaped('scguns:anthralite_respirator', ['ABA', 'CDC', ' E '], {
		A: 'tfc:lens',
		B: 'tfc:metal/sheet/black_steel',
		C: 'afc:rubber_bar',
		D: 'tfc:powder/charcoal',
		E: '#tfc:high_quality_cloth',
	});
	event.shaped('scguns:silencer', [' A ', 'BCB', ' A '], {
		A: ['#tfc:sewing_dark_cloth', '#tfc:sewing_light_cloth'],
		B: 'afc:rubber_bar',
		C: 'firmalife:metal/sheet/stainless_steel',
	});

	event.shaped('scguns:basic_turret', [' A ', ' B ', 'CDC'], {
		A: 'scguns:m3_carabine',
		B: 'create:precision_mechanism',
		C: 'tfc:metal/double_sheet/black_steel',
		D: 'thermal:machine_frame',
	});
	event.shaped('scguns:auto_turret', ['ABA', ' C ', 'DED'], {
		A: 'scguns:greaser_smg',
		B: 'create:shaft',
		C: 'create:precision_mechanism',
		D: 'tfc:metal/double_sheet/black_steel',
		E: 'thermal:machine_frame',
	});
	event.shaped('scguns:shotgun_turret', [' A ', ' B ', 'CDC'], {
		A: 'scguns:combat_shotgun',
		B: 'create:precision_mechanism',
		C: 'tfc:metal/double_sheet/black_steel',
		D: 'thermal:machine_frame',
	});
	event.shapeless('scguns:enemy_log', [
		'minecraft:book',
		'minecraft:red_dye',
	]);

	event.shapeless('scguns:team_log', [
		'minecraft:purple_dye',
		'minecraft:book',
	]);
	event.shaped('scguns:hostile_turret_targeting_module', ['A', 'B'], {
		A: 'createaddition:gold_spool',
		B: 'tfc:metal/sheet/cast_iron',
	});
	event.shaped('scguns:turret_targeting_module', ['A', 'B'], {
		A: 'createaddition:gold_spool',
		B: 'tfc:metal/sheet/cast_iron',
	});
	event.shaped('scguns:player_turret_targeting_module', ['A', 'B'], {
		A: 'createaddition:gold_spool',
		B: 'tfc:metal/sheet/cast_iron',
	});
	event.shaped('scguns:shell_catcher_turret_module', ['A', 'B'], {
		A: 'minecraft:hopper',
		B: 'tfc:metal/sheet/cast_iron',
	});
	event.shaped('scguns:fire_rate_turret_module', ['AAA', ' B '], {
		A: 'createaddition:copper_spool',
		B: 'tfc:metal/sheet/cast_iron',
	});
	event.shaped('scguns:range_turret_module', ['A', 'B', 'C'], {
		A: 'tfc:metal/double_sheet/cast_iron',
		B: 'simpleradio:transmitting_module',
		C: 'simpleradio:receiving_module',
	});
	event.shaped('scguns:damage_turret_module', ['ABA', ' C '], {
		A: 'create:andesite_alloy',
		B: 'kubejs:rocket_fuel',
		C: 'tfc:metal/sheet/cast_iron',
	});
	event.shaped('scguns:ammo_turret_module', ['A', 'B'], {
		A: 'scguns:ammo_box',
		B: 'tfc:metal/sheet/cast_iron',
	});

    event.recipes.tfc.sewing('scguns:diamond_steel_leggings', [
        0, 1, 1, 0, 1, 1, 1, 1, 0, 
        0, 0, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 1,
        0, 1, 1, 0, 1, 1, 1, 1, 0
    ], [
         0,  0,  0, 0,  1, 1,  1,  -1,
        -1, -1, -1, 0,  1, 1,  1,   1,
        -1, -1, -1, 0,  1, 1,  1,   1,
         0,  0,  0, 0,  1, 1,  1,  -1
    ])

    event.recipes.tfc.anvil('kubejs:unfinished_diamond_steel_chestplate', 'tfc:metal/double_sheet/steel', ['hit_last', 'hit_second_last', 'upset_third_last']).tier(4)
    event.recipes.tfc.anvil('kubejs:unfinished_diamond_steel_boots', 'tfc:metal/double_sheet/steel', ['bend_last', 'bend_second_last', 'shrink_third_last']).tier(4)
    event.recipes.tfc.anvil('kubejs:unfinished_diamond_steel_helmet', 'tfc:metal/double_sheet/steel', ['hit_last', 'bend_second_last', 'bend_third_last']).tier(4)

    ADDED_ANVIL_RECIPES.push(['kubejs:unfinished_diamond_steel_chestplate', 'tfc:metal/double_sheet/steel', 4])
    ADDED_ANVIL_RECIPES.push(['kubejs:unfinished_diamond_steel_boots', 'tfc:metal/double_sheet/steel', 4])
    ADDED_ANVIL_RECIPES.push(['kubejs:unfinished_diamond_steel_helmet', 'tfc:metal/double_sheet/steel', 4])

    event.shapeless('scguns:diamond_steel_chestplate', [['textile:black_bear_shirt', 'textile:grizzly_bear_shirt'], 'kubejs:unfinished_diamond_steel_chestplate'])
    event.shapeless('scguns:diamond_steel_boots', [['textile:black_bear_boots', 'textile:grizzly_bear_boots'], 'kubejs:unfinished_diamond_steel_boots'])
    event.shapeless('scguns:diamond_steel_helmet', [['textile:black_bear_hat', 'textile:grizzly_bear_hat'], 'kubejs:unfinished_diamond_steel_helmet'])


});


/*ColdSweatEvents.registries(event => {
    event.addInsulator(insulator => {
        insulator.items('scguns:diamond_steel_chestplate')
        .slot('armor')
        .insulation(8, 2)
    })
    event.addInsulator(insulator => {
        insulator.items('scguns:diamond_steel_helmet')
        .slot('armor')
        .insulation(6, 1)
    })
    event.addInsulator(insulator => {
        insulator.items('scguns:diamond_steel_leggings')
        .slot('armor')
        .insulation(6, 3)
    })
    event.addInsulator(insulator => {
        insulator.items('scguns:diamond_steel_boots')
        .slot('armor')
        .insulation(7, 2)
    })
})*/