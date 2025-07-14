// priority: 50

//also ammendments.

ServerEvents.recipes((e) => {
	e.remove({
		mod: 'supplementaries',
		not: { id: 'supplementaries:item_lore_display' },
	});

	e.recipes.tfc
		.anvil('supplementaries:wrench', 'tfc:metal/ingot/copper', [
			'bend_last',
			'draw_second_last',
			'draw_third_last',
		])
		.tier(1);

        ADDED_ANVIL_RECIPES.push(['supplementaries:wrench', 'tfc:metal/ingot/copper', 1]);

	e.shaped('supplementaries:flint_block', ['AAA', 'AAA', 'AAA'], {
		A: 'minecraft:flint',
	});

    e.shapeless('9x flint', ['supplementaries:flint_block']);

	e.shaped('supplementaries:feather_block', ['AAA', 'AAA', 'AAA'], {
		A: 'minecraft:feather',
	});

    e.shapeless('9x feather', ['supplementaries:feather_block']);

	e.shaped('supplementaries:sugar_cube', ['AAA', 'AAA', 'AAA'], {
		A: 'minecraft:sugar',
	});

    e.shapeless('9x sugar', ['supplementaries:sugar_cube']);

	e.shaped('supplementaries:notice_board', ['AAA', 'BBB', 'AAA'], {
		A: '#tfc:lumber',
		B: 'minecraft:paper',
	});

	e.shaped('supplementaries:speaker_block', ['AAA', 'BCB', 'AAA'], {
		A: '#minecraft:planks',
		B: 'minecraft:redstone',
		C: 'tfc:brass_mechanisms',
	});
	e.shaped('supplementaries:soap_block', ['AAA', 'AAA', 'AAA'], {
		A: 'supplementaries:soap',
	});

	e.shaped('supplementaries:timber_cross_brace', ['A A', '   ', 'A A'], {
		A: '#tfc:lumber',
	});
	e.shaped('supplementaries:timber_frame', [' A ', 'A A', ' A '], {
		A: '#tfc:lumber',
	});
	e.shaped('supplementaries:timber_brace', ['  A', 'A A', 'A  '], {
		A: '#tfc:lumber',
	});
	e.shaped('supplementaries:globe', [' A ', 'BCD', ' D '], {
		A: 'minecraft:blue_dye',
		B: 'minecraft:green_dye',
		C: '#minecraft:planks',
		D: 'tfc:metal/rod/gold',
	});
	e.shaped('4x supplementaries:bomb', [' AB', 'ACA', ' A '], {
		A: 'tfc:metal/sheet/cast_iron',
		B: 'supplementaries:rope',
		C: 'createbigcannons:packed_gunpowder',
	});
    
	e.shaped('supplementaries:blackboard', ['ABA', 'BBB', 'ABA'], {
		A: '#tfc:lumber',
		B: 'create:andesite_alloy',
	});
	e.shaped('supplementaries:slingshot', ['ABA', 'C C', ' C '], {
		A: '#forge:string',
		B: 'minecraft:leather',
		C: '#forge:rods/wooden',
	});

	e.shapeless('supplementaries:dispenser_minecart', [
		'minecraft:dispenser',
		'minecraft:minecart',
	]);
	e.shaped('supplementaries:bamboo_spikes', ['AAA', 'BBB'], {
		A: 'minecraft:bamboo',
		B: '#tfc:lumber',
	});

	e.shapeless('supplementaries:globe_sepia', [
		'supplementaries:globe',
		'supplementaries:antique_ink',
	]);
	e.shaped('supplementaries:doormat', ['AAA', 'AAA'], {
		A: 'tfc:straw',
	});
	e.shaped('8x supplementaries:cog_block', ['ABA', 'BCB', 'ABA'], {
		A: 'tfc:metal/rod/copper',
		B: 'tfc:brass_mechanisms',
		C: 'minecraft:redstone',
	});
	e.shaped('supplementaries:spring_launcher', ['ABA', 'ACA'], {
		A: 'tfc:metal/rod/wrought_iron',
		B: 'minecraft:slime_block',
		C: 'minecraft:piston',
	});

	e.shaped('supplementaries:hourglass', [' A ', ' B ', ' A '], {
		A: 'tfc:metal/rod/gold',
		B: 'tfc:lamp_glass',
	});
	e.shaped('supplementaries:relayer', ['AAA', 'BBB', 'AAA'], {
		A: '#forge:cobblestone',
		B: 'minecraft:redstone',
	});
	e.shaped('supplementaries:crystal_display', ['AAA', 'BBB', 'AAA'], {
		A: '#forge:smooth_stone',
		B: '#forge:gems',
	});
	e.shaped('supplementaries:safe', ['ABA', 'BCB', 'ABA'], {
		A: '#tfc:metal/rod/any_bronze',
		B: 'tfc:metal/double_sheet/cast_iron',
		C: '#forge:chests/wooden',
	});

	e.shaped('supplementaries:clock_block', ['AAA', 'ABA', 'AAA'], {
		A: '#tfc:lumber',
		B: 'minecraft:clock',
	});

	e.shaped('supplementaries:present', ['AAA', 'A A', 'AAA'], { A: 'paper' });

	e.custom({
		type: 'tfc:knapping',
		knapping_type: 'tfc:leather',
		pattern: [' XXX ', 'X XXX', ' XXX ', 'XXX  ', 'XX   '],
		result: {
			item: 'supplementaries:quiver',
		},
	});

	e.shaped('supplementaries:hat_stand', ['A', 'B'], {
		A: '#minecraft:planks',
		B: '#forge:smooth_stone_slab',
	});

	e.recipes.tfc.anvil(
		'supplementaries:wind_vane',
		'tfc:metal/rod/wrought_iron',
		['bend_last', 'punch_second_last', 'bend_third_last']
	).tier(3);

    ADDED_ANVIL_RECIPES.push([
        'supplementaries:wind_vane',
        'tfc:metal/rod/wrought_iron',3])

	e.recipes.tfc.anvil(
		'supplementaries:faucet',
		'tfc:metal/sheet/steel',
		['bend_last', 'draw_second_last', 'hit_third_last']
	).tier(3);

    ADDED_ANVIL_RECIPES.push([
        'supplementaries:faucet',
        'tfc:metal/sheet/steel',3])

	e.shaped('supplementaries:lock_block', ['ABA', 'BCB', 'ABA'], {
		A: 'tfc:metal/rod/wrought_iron',
		B: '#tfc:lumber',
		C: 'tfc:brass_mechanisms',
	});

	e.custom({
		type: 'tfc:anvil',
		input: {
			tag: 'forge:sheets/gold',
		},
		result: {
			item: 'supplementaries:gold_door',
		},
		tier: 3,
		rules: ['hit_last', 'draw_not_last', 'punch_not_last'],
	});

	e.custom({
		type: 'tfc:anvil',
		input: {
			tag: 'forge:sheets/gold',
		},
		result: {
			item: 'supplementaries:gold_trapdoor',
		},
		tier: 3,
		rules: ['bend_last', 'draw_second_last', 'draw_third_last'],
	});

	e.custom({
		type: 'tfc:anvil',
		input: {
			tag: 'forge:sheets/gold',
		},
		result: {
			item: 'supplementaries:key',
		},
		tier: 3,
		rules: ['punch_last', 'punch_second_last', 'draw_third_last'],
	});

	e.recipes.tfc.welding(
		'supplementaries:netherite_door',
		'supplementaries:gold_door',
		'tfc:metal/double_sheet/black_steel'
	);
	e.recipes.tfc.welding(
		'supplementaries:netherite_trapdoor',
		'supplementaries:gold_trapdoor',
		'tfc:metal/double_sheet/black_steel'
	);

	e.custom({
		__comment__: 'This file was automatically created by mcresources',
		type: 'tfc:pot',
		ingredients: [
			{
				item: 'tfc:powder/wood_ash',
			},
			{
				item: 'tfc:powder/wood_ash',
			},
			{
				item: 'tfc:powder/wood_ash',
			},
			{
				item: 'tfc:powder/wood_ash',
			},
			{
				item: 'tfc:powder/wood_ash',
			},
		],
		fluid_ingredient: {
			ingredient: 'tfc:tallow',
			amount: 100,
		},
		duration: 1000,
		temperature: 300,
		item_output: [
			{
				item: 'supplementaries:soap',
			},
		],
	});

	e.shaped('supplementaries:flag_white', ['AA', 'B '], {
		A: '#tfc:high_quality_cloth',
		B: '#forge:rods/wooden',
	});

	e.shapeless(Item.of('supplementaries:bunting', 8, '{Color:"white"}'), [
		'#tfc:high_quality_cloth',
		'#forge:string',
	]);
	e.shaped('8x supplementaries:awning', ['AAA', 'B B'], {
		A: '#tfc:sewing_dark_cloth',
		B: '#tfc:lumber',
	});

    WOOD_TYPES.forEach((type) => {
        e.shapeless(`2x supplementaries:tfc/sign_post_${type}`, [`tfc:wood/sign/${type}`]);
    })

    AFC_WOOD_TYPES.forEach((type) => {
        e.shapeless(`2x supplementaries:afc/sign_post_${type}`, [`afc:wood/sign/${type}`]);
    })
});

