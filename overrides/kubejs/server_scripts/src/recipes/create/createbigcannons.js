// priority: 50

ServerEvents.recipes((e) => {
	e.remove({
		mod: 'createbigcannons',
		not: [
			{ id: /.*fuzing.*/ },
			{ input: 'createbigcannons:tracer_tip' },
			{ id: /.*fuze_removal.*/ },
			{ id: /.*tracer_removal.*/ },
			{ id: /.*tracer.*item.*/ },
			{ id: /.*tracer_deployer.*/ },
			{
				type: 'createbigcannons:autocannon_ammo_container_filling_deployer',
			},
			{ type: 'createbigcannons:big_cartridge_filling' },
			{ type: 'createbigcannons:big_cartridge_filling_deployer' },
			{ type: 'createbigcannons:cartridge_assembly' },
			{ type: 'createbigcannons:cartridge_assembly_deployer' },
			{ type: 'createbigcannons:fuze_removal' },
			{ type: 'createbigcannons:munition_fuzing' },
			{ type: 'createbigcannons:munition_fuzing_deployer' },
			{ type: 'createbigcannons:tracer_application' },
			{ type: 'createbigcannons:tracer_application_deployer' },
			{ type: 'createbigcannons:tracer_removal' },
		],
	});

	e.shapeless('4x createbigcannons:wired_fuze', [
		'tfc:metal/rod/copper',
		'redstone',
	]);

	e.shapeless('2x createbigcannons:nitropowder', [
		'tfc:pure_nitrogen',
		'tfc:powder/sulfur',
		'tfc:powder/graphite',
	]);

	e.recipes.create.compacting('createbigcannons:packed_gunpowder', [
		'3x gunpowder',
	]);

	e.shapeless('createbigcannons:powder_charge', [
		'#tfc:high_quality_cloth',
		'4x createbigcannons:packed_gunpowder',
	]);

	e.recipes.tfc
		.anvil(
			'8x createbigcannons:ap_autocannon_round',
			'tfc:metal/ingot/steel',
			['hit_last', 'hit_second_last', 'draw_third_last']
		)
		.tier(4);

        ADDED_ANVIL_RECIPES.push(['8x createbigcannons:ap_autocannon_round', 'tfc:metal/ingot/steel', 4] );


	e.shaped(
		'8x createbigcannons:flak_autocannon_round',
		['BSB', 'BGB', 'BSB'],
		{
			B: 'kubejs:musket_ball',
			S: 'tfc:metal/sheet/brass',
			G: 'createbigcannons:packed_gunpowder',
		}
	);

	e.shapeless('createbigcannons:machine_gun_round', [
		'createbigcannons:empty_machine_gun_round',
		'createbigcannons:nitropowder',
		'magistuarmory:steel_nugget',
	]);

	e.recipes.tfc
		.anvil(
			'16x createbigcannons:empty_machine_gun_round',
			'tfc:metal/sheet/brass',
			['punch_last', 'bend_second_last', 'draw_third_last']
		)
		.tier(2);

        ADDED_ANVIL_RECIPES.push(['8x createbigcannons:empty_machine_gun_round', 'tfc:metal/sheet/brass', 2] );


	e.recipes.tfc
		.anvil(
			'8x createbigcannons:empty_autocannon_cartridge',
			'tfc:metal/sheet/brass',
			['punch_last', 'bend_second_last', 'draw_third_last']
		)
		.tier(2);

        ADDED_ANVIL_RECIPES.push(['8x createbigcannons:empty_autocannon_cartridge', 'tfc:metal/sheet/brass', 2] );

	e.recipes.tfc
		.anvil(
			'createbigcannons:big_cartridge',
			'tfc:metal/double_sheet/brass',
			['punch_last', 'bend_second_last', 'draw_third_last']
		)
		.tier(2);

        ADDED_ANVIL_RECIPES.push(['createbigcannons:big_cartridge', 'tfc:metal/double_sheet/brass', 2] );

	//wrought iron

	e.recipes.tfc
		.anvil(
			'createbigcannons:wrought_iron_cannon_end',
			'tfc:metal/sheet/wrought_iron',
			['draw_last', 'hit_second_last', 'upset_third_last']
		)
		.tier(3);

        ADDED_ANVIL_RECIPES.push(['createbigcannons:wrought_iron_cannon_end', 'tfc:metal/sheet/wrought_iron', 3] );
	e.recipes.tfc
		.anvil(
			'createbigcannons:wrought_iron_cannon_chamber',
			'tfc:metal/double_sheet/wrought_iron',
			['hit_last', 'bend_second_last', 'bend_third_last']
		)
		.tier(3);

        ADDED_ANVIL_RECIPES.push(['createbigcannons:wrought_iron_cannon_chamber', 'tfc:metal/double_sheet/wrought_iron', 3] );
	e.recipes.tfc
		.welding(
			'createbigcannons:wrought_iron_drop_mortar_end',
			'createbigcannons:wrought_iron_cannon_end',
			'tfc:metal/rod/wrought_iron'
		)
		.tier(3);

	//bronze

	e.recipes.tfc
		.anvil(
			'createbigcannons:autocannon_ammo_container',
			'tfc:metal/sheet/cast_iron',
			['hit_last', 'bend_second_last', 'bend_third_last']
		)
		.tier(3);

        ADDED_ANVIL_RECIPES.push(['createbigcannons:autocannon_ammo_container', 'tfc:metal/sheet/cast_iron', 4] );

	//recoil spring melting
	e.recipes.tfc
		.heating('createbigcannons:recoil_spring', 1540)
		.resultFluid(Fluid.of(`tfc:metal/red_steel`, 50));

	//quick firing mech.

	e.shapeless('createbigcannons:quickfiring_mechanism', [
		'create:hand_crank',
		'tfc:brass_mechanisms',
	]);

	//welder

	WELDER_FUELS.forEach((fuel) => {
		e.shaped('createbigcannons:cannon_welder', ['TPV', '  C'], {
			T: 'tfc:metal/tuyere/wrought_iron',
			P: 'tfc:metal/double_sheet/brass',
			V: '#create:valve_handles',
			C: Item.of(
				'createdieselgenerators:canister',
				'{BlockEntityTag:{Tanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:16000,FluidName:"' + fuel +
					'"}}]}}'
			).strongNBT(),
		});
	});
	e.shaped('createbigcannons:cannon_welder', ['TPV', '  C'], {
		T: 'tfc:metal/tuyere/wrought_iron',
		P: 'tfc:metal/double_sheet/brass',
		V: '#create:valve_handles',
		C: Item.of(
			'createdieselgenerators:canister',
			'{BlockEntityTag:{Tanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:16000,FluidName:"kubejs:kerosene"}}]}}'
		).strongNBT(),
	});

	//welder welding

	e.forEachRecipe({ type: 'tfc:welding' }, (recipe) => {
		let firstInput = recipe.json.get('first_input');
		let secondInput = recipe.json.get('second_input');
		let result = recipe.json.get('result');

		e.shapeless(result, [
			firstInput,
			secondInput,
			'tfc:powder/flux',
			'createbigcannons:cannon_welder',
		])
			.damageIngredient('createbigcannons:cannon_welder')
			.id('welding_' + Item.of(result).id + '_manual_only');

		e.recipes.create
			.sequenced_assembly(
				[Ingredient.of(result)],
				Ingredient.of(firstInput),
				[
					e.recipes.createDeploying(Item.of(firstInput), [
						Ingredient.of(firstInput),
						'tfc:powder/flux',
					]),
					e.recipes.createDeploying(Item.of(firstInput), [
						Ingredient.of(firstInput),
						Ingredient.of(secondInput),
					]),
					e.recipes
						.createDeploying(Item.of(firstInput), [
							Ingredient.of(firstInput),
							'createbigcannons:cannon_welder',
						])
						.keepHeldItem(),
				]
			)
			.transitionalItem(Ingredient.of(firstInput))
			.loops(1);
	});

	//fuzes

	e.shapeless('4x createbigcannons:impact_fuze', [
		'#minecraft:stone_buttons',
		'redstone',
	]);
	e.shapeless('4x createbigcannons:delayed_impact_fuze', [
		'#minecraft:stone_buttons',
		'redstone',
		'create:pulse_repeater',
	]);

	e.shapeless('4x createbigcannons:timed_fuze', [
		'redstone',
		'create:pulse_repeater',
	]);
	e.shapeless('4x createbigcannons:proximity_fuze', [
		'redstone',
		'create:redstone_link',
	]);

	//shots

	e.shapeless('createbigcannons:mortar_stone', [
		'#forge:smooth_stone',
		['#tfc:sewing_dark_cloth', '#tfc:sewing_light_cloth'],
	]);
	e.recipes.tfc
		.anvil(
			'createbigcannons:solid_shot',
			'tfc:metal/double_sheet/cast_iron',
			['hit_last', 'hit_second_last', 'hit_third_last']
		)
		.tier(3);

        ADDED_ANVIL_RECIPES.push(['createbigcannons:solid_shot', 'tfc:metal/double_sheet/cast_iron', 3])
	e.recipes.tfc
		.welding(
			'createbigcannons:ap_shot',
			'createbigcannons:solid_shot',
			'tfc:metal/double_sheet/wrought_iron'
		)
		.tier(3);

	e.shapeless('createbigcannons:bag_of_grapeshot', [
		['#tfc:sewing_dark_cloth', '#tfc:sewing_light_cloth'],
		'8x #tfc:rock_knapping',
	]);

	//shells
	e.shapeless('createbigcannons:ap_shell', [
		'tfc:metal/sheet/brass',
		'createbigcannons:ap_shot',
		'createbigcannons:nitropowder',
	]);
	e.shapeless('createbigcannons:drop_mortar_shell', [
		'tfc:metal/sheet/brass',
		'2x createbigcannons:packed_gunpowder',
		'#minecraft:stone_buttons',
	]);
	e.shapeless('createbigcannons:smoke_shell', [
		'tfc:metal/sheet/brass',
		'8x tfc:powder/sphalerite',
	]);
	e.shapeless('createbigcannons:fluid_shell', [
		'tfc:metal/sheet/brass',
		'createdieselgenerators:canister',
	]);
	e.shapeless('createbigcannons:he_shell', [
		'tfc:metal/sheet/brass',
		'2x createbigcannons:nitropowder',
	]);
	e.shapeless('createbigcannons:shrapnel_shell', [
		'tfc:metal/sheet/brass',
		'createbigcannons:nitropowder',
		'4x kubejs:musket_ball',
	]);

	//e.shapeless('createbigcannons:ap_shell', ['createbigcannons:ap_shot', 'createbigcannons:nitropowder'])

	//loader stuff

	e.shaped('createbigcannons:ram_head', ['LLL', ' P ', ' P '], {
		L: '#tfc:lumber',
		P: 'create:piston_extension_pole',
	});

	e.shaped('createbigcannons:worm_head', ['LLL', ' P ', ' P '], {
		L: 'tfc:metal/rod/cast_iron',
		P: 'create:piston_extension_pole',
	});

	e.shaped('createbigcannons:ram_rod', ['H', 'P', 'P'], {
		H: 'createbigcannons:ram_head',
		P: 'create:piston_extension_pole',
	});

	e.shaped('createbigcannons:worm', ['H', 'P', 'P'], {
		H: 'createbigcannons:worm_head',
		P: 'create:piston_extension_pole',
	});

	e.shaped('createbigcannons:cannon_loader', ['LPL', 'CPC', 'AAA'], {
		L: '#tfc:lumber',
		C: 'create:cogwheel',
		P: 'create:piston_extension_pole',
		A: 'create:andesite_alloy',
	});

	e.shaped('createbigcannons:fixed_cannon_mount', ['S', 'P', 'C'], {
		S: 'create:shaft',
		P: 'tfc:metal/double_sheet/cast_iron',
		C: 'create:andesite_casing',
	});

	e.shapeless('createbigcannons:cannon_mount', [
		'createbigcannons:fixed_cannon_mount',
		'create:precision_mechanism',
		'tfc:metal/double_sheet/cast_iron',
	]);

	e.shaped('createbigcannons:cannon_carriage', [' ML', 'WLW'], {
		M: 'createbigcannons:fixed_cannon_mount',
		L: '#tfc:lumber',
		W: '#tfcastikorcarts:cart_wheel',
	});

	e.shapeless('16x createbigcannons:tracer_tip', ['tfc:pure_phosphorus']);

	e.custom({
		type: 'create:sequenced_assembly',
		ingredient: {
			item: 'createbigcannons:empty_autocannon_cartridge',
		},
		transitionalItem: {
			item: 'createbigcannons:partially_filled_autocannon_cartridge',
		},
		sequence: [
			{
				type: 'create:deploying',
				ingredients: [
					{
						item: 'createbigcannons:partially_filled_autocannon_cartridge',
					},
					{
						tag: 'createbigcannons:gunpowder_pinch',
					},
				],
				results: [
					{
						item: 'createbigcannons:partially_filled_autocannon_cartridge',
					},
				],
			},
		],
		results: [
			{
				item: 'createbigcannons:filled_autocannon_cartridge',
			},
		],
		loops: 2,
	});

	let moulds = [
		'createbigcannons:small_cast_mould',
		'createbigcannons:medium_cast_mould',
		'createbigcannons:large_cast_mould',
		'createbigcannons:very_large_cast_mould',
		'createbigcannons:screw_breech_cast_mould',
		'createbigcannons:sliding_breech_cast_mould',
		'createbigcannons:autocannon_breech_cast_mould',
		'createbigcannons:autocannon_recoil_spring_cast_mould',
		'createbigcannons:autocannon_barrel_cast_mould',
		'createbigcannons:cannon_end_cast_mould',
		'createbigcannons:very_small_cast_mould',
	].forEach((mould) => {
		e.shapeless(mould, [
			'2x #minecraft:planks',
			'#tfc:saws',
		]).damageIngredient('#tfc:saws', 1);
	});

	e.shaped('createbigcannons:cannon_drill', [' A ', 'BCB', ' D '], {
		A: 'create:piston_extension_pole',
		B: 'create:fluid_pipe',
		C: 'create:andesite_casing',
		D: 'tfc:metal/double_sheet/wrought_iron',
	});

	e.shapeless('8x createbigcannons:casting_sand', [
		'4x #forge:sand',
		'4x minecraft:clay_ball',
	]);

	e.recipes.tfc
		.anvil(
			'createbigcannons:steel_autocannon_breech_extractor',
			'tfc:metal/ingot/steel',
			['bend_last', 'draw_second_last', 'draw_third_last']
		)
		.tier(4);
        ADDED_ANVIL_RECIPES.push(['createbigcannons:steel_autocannon_breech_extractor', 'tfc:metal/ingot/steel', 4]);
	e.recipes.tfc
		.anvil('createbigcannons:steel_screw_lock', 'tfc:metal/ingot/steel', [
			'bend_last',
			'hit_second_last',
			'hit_third_last',
		])
		.tier(4);
        ADDED_ANVIL_RECIPES.push(['createbigcannons:steel_screw_lock', 'tfc:metal/ingot/steel', 4]);

	e.recipes.tfc
		.anvil(
			'createbigcannons:steel_sliding_breechblock',
			'tfc:metal/double_ingot/steel',
			['upset_last', 'hit_second_last', 'upset_third_last']
		)
		.tier(4);
        ADDED_ANVIL_RECIPES.push(['createbigcannons:steel_sliding_breechblock', 'tfc:metal/double_ingot/steel', 4]);
	e.recipes.tfc
		.anvil(
			'createbigcannons:bronze_sliding_breechblock',
			'tfc:metal/double_ingot/bronze',
			['upset_last', 'hit_second_last', 'upset_third_last']
		)
		.tier(4);
        ADDED_ANVIL_RECIPES.push(['createbigcannons:bronze_sliding_breechblock', 'tfc:metal/double_ingot/bronze', 4]);
	e.recipes.tfc
		.anvil(
			'createbigcannons:cast_iron_sliding_breechblock',
			'tfc:metal/double_ingot/cast_iron',
			['upset_last', 'hit_second_last', 'upset_third_last']
		)
		.tier(4);
        ADDED_ANVIL_RECIPES.push(['createbigcannons:cast_iron_sliding_breechblock', 'tfc:metal/double_ingot/cast_iron', 4]);

	e.recipes.tfc
		.anvil(
			'createbigcannons:nethersteel_screw_lock',
			'kubejs:metal/ingot/mangalloy',
			['bend_last', 'hit_second_last', 'hit_third_last']
		)
		.tier(4);
        ADDED_ANVIL_RECIPES.push(['createbigcannons:nethersteel_screw_lock', 'kubejs:metal/ingot/mangalloy', 4]);

	e.recipes.tfc
		.anvil('createbigcannons:recoil_spring', 'tfc:metal/rod/red_steel', [
			'bend_last',
			'hit_second_last',
			'bend_third_last',
		])
		.tier(4);
        ADDED_ANVIL_RECIPES.push(['createbigcannons:recoil_spring', 'tfc:metal/rod/red_steel', 4]);

	e.recipes.tfc
		.heating('createbigcannons:steel_scrap', 1540)
		.resultFluid(Fluid.of(`tfc:metal/steel`, 5));

	e.recipes.tfc
		.heating('createbigcannons:cast_iron_nugget', 1535)
		.resultFluid(Fluid.of(`tfc:metal/cast_iron`, 5));

	e.recipes.tfc
		.heating('createbigcannons:nethersteel_nugget', 1535)
		.resultFluid(Fluid.of(`kubejs:molten_mangalloy`, 5));

	e.recipes.tfc
		.heating('createbigcannons:bronze_scrap', 985)
		.resultFluid(Fluid.of(`tfc:metal/bronze`, 5));


	e.shaped('createbigcannons:gas_mask', ['ABA', 'ACA', ' D '], {
		A: 'afc:rubber_bar',
		B: 'firmalife:reinforced_glass',
		C: 'tfc:powder/charcoal',
		D: 'tfc:wool_cloth',
	});

	e.shaped('gunpowder', ['AAA', 'AAA', 'AAA'], {
		A: '#createbigcannons:gunpowder_pinch',
	});
	e.shapeless('9x createbigcannons:gunpowder_pinch', ['gunpowder']);
});

ServerEvents.tags('item', (event) => {});

const cannonParts = [
	'createbigcannons:bronze_cannon_end',
	'createbigcannons:bronze_sliding_breech',
	'createbigcannons:bronze_quickfiring_breech',
	'createbigcannons:bronze_cannon_chamber',
	'createbigcannons:bronze_cannon_barrel',
	'createbigcannons:steel_sliding_breech',
	'createbigcannons:steel_quickfiring_breech',
	'createbigcannons:steel_screw_breech',
	'createbigcannons:thick_steel_cannon_chamber',
	'createbigcannons:built_up_steel_cannon_chamber',
	'createbigcannons:steel_cannon_chamber',
	'createbigcannons:built_up_steel_cannon_barrel',
	'createbigcannons:steel_cannon_barrel',
	'createbigcannons:steel_autocannon_breech',
	'createbigcannons:steel_autocannon_recoil_spring',
	'createbigcannons:steel_autocannon_barrel',
	'createbigcannons:bronze_cannon_end',
	'createbigcannons:cast_iron_cannon_barrel',
	'createbigcannons:cast_iron_cannon_chamber',
	'createbigcannons:cast_iron_quickfiring_breech',
	'createbigcannons:cast_iron_sliding_breech',
	'createbigcannons:cast_iron_cannon_end',
	'createbigcannons:wrought_iron_drop_mortar_end',
	'createbigcannons:wrought_iron_cannon_chamber',
	'createbigcannons:wrought_iron_cannon_end',
	'createbigcannons:unbored_bronze_autocannon_breech',
	'createbigcannons:unbored_medium_steel_cannon_layer',
	'createbigcannons:unbored_small_steel_cannon_layer',
	'createbigcannons:unbored_very_small_steel_cannon_layer',
	'createbigcannons:unbored_bronze_sliding_breech',
	'createbigcannons:unbored_bronze_cannon_chamber',
	'createbigcannons:unbored_bronze_cannon_barrel',
	'createbigcannons:unbored_cast_iron_sliding_breech',
	'createbigcannons:unbored_cast_iron_cannon_chamber',
	'createbigcannons:unbored_cast_iron_cannon_barrel',
	'createbigcannons:unbored_steel_screw_breech',
	'createbigcannons:unbored_very_small_nethersteel_cannon_layer',
	'createbigcannons:unbored_small_nethersteel_cannon_layer',
	'createbigcannons:unbored_medium_nethersteel_cannon_layer',
	'createbigcannons:unbored_large_nethersteel_cannon_layer',
	'createbigcannons:unbored_nethersteel_screw_breech',
	'createbigcannons:unbored_steel_autocannon_barrel',
	'createbigcannons:unbored_cast_iron_autocannon_breech',
	'createbigcannons:unbored_bronze_autocannon_recoil_spring',
	'createbigcannons:unbored_steel_autocannon_breech',
	'createbigcannons:unbored_steel_sliding_breech',
	'createbigcannons:unbored_very_large_steel_cannon_layer',
	'createbigcannons:unbored_large_steel_cannon_layer',
	'createbigcannons:unbored_bronze_autocannon_barrel',
	'createbigcannons:unbored_cast_iron_autocannon_barrel',
	'createbigcannons:unbored_very_large_nethersteel_cannon_layer',
	'createbigcannons:unbored_cast_iron_autocannon_recoil_spring',
	'createbigcannons:unbored_steel_autocannon_recoil_spring',
	'createbigcannons:nethersteel_screw_breech',
	'createbigcannons:thick_nethersteel_cannon_chamber',
	'createbigcannons:nethersteel_cannon_chamber',
	'createbigcannons:nethersteel_cannon_barrel',
	'createbigcannons:unbored_very_small_nethersteel_cannon_layer',
	'createbigcannons:unbored_small_nethersteel_cannon_layer',
	'createbigcannons:unbored_medium_nethersteel_cannon_layer',
	'createbigcannons:unbored_large_nethersteel_cannon_layer',
	'createbigcannons:unbored_very_large_nethersteel_cannon_layer',
	'createbigcannons:unbored_nethersteel_screw_breech',
];
LootJS.modifiers((e) => {
	cannonParts.forEach((part) => {
		e.addBlockLootModifier(part)
			.matchEquip('MAINHAND', ItemFilter.PICKAXE)
			.removeLoot(/.*/)
			.addLoot(part);
	});
});
