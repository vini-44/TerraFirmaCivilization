// priority: 50

ServerEvents.recipes((event) => {
	event.recipes.tfc
		.anvil('kubejs:unfinished_gun_parts', 'tfc:metal/sheet/steel', [
			'punch_last',
			'bend_second_last',
			'draw_third_last',
		])
		.tier(4)
		.bonus(true);

	event.recipes.tfc
		.anvil(
			'kubejs:unfinished_heavy_gun_parts',
			'kubejs:metal/double_sheet/mangalloy',
			['punch_last', 'bend_second_last', 'draw_third_last']
		)
		.tier(5)
		.bonus(true);

	ADDED_ANVIL_RECIPES.push([
		'kubejs:unfinished_gun_parts',
		'tfc:metal/sheet/steel',
		4,
	]);
	ADDED_ANVIL_RECIPES.push([
		'kubejs:unfinished_heavy_gun_parts',
		'kubejs:metal/double_sheet/mangalloy',
		5,
	]);

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:gun_parts').copyForgingBonus(),
		['AB', 'BC'],
		{
			A: 'kubejs:unfinished_gun_parts',
			B: 'firmaciv:copper_bolt',
			C: 'tfc:brass_mechanisms',
		},
		0,
		0
	);

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:heavy_gun_parts').copyForgingBonus(),
		['AB', 'BC'],
		{
			A: 'kubejs:unfinished_heavy_gun_parts',
			B: 'firmaciv:copper_bolt',
			C: 'create:precision_mechanism',
		},
		0,
		0
	);

	event.recipes.tfc
		.anvil(
			'kubejs:unfinished_iron_gun_frame',
			'tfc:metal/double_sheet/steel',
			['bend_last', 'punch_any', 'draw_not_last']
		)
		.tier(4);
	event.recipes.tfc
		.anvil(
			'kubejs:unfinished_diamond_steel_gun_frame',
			'tfc:metal/double_sheet/blue_steel',
			['bend_last', 'punch_any', 'draw_not_last']
		)
		.tier(4);

	ADDED_ANVIL_RECIPES.push([
		'kubejs:unfinished_iron_gun_frame',
		'tfc:metal/double_sheet/steel',
		4,
	]);
	ADDED_ANVIL_RECIPES.push([
		'kubejs:unfinished_diamond_steel_gun_frame',
		'tfc:metal/double_sheet/blue_steel',
		4,
	]);

	event.shaped('scguns:iron_gun_frame', ['ABA', 'ACA'], {
		A: 'firmaciv:copper_bolt',
		B: 'kubejs:unfinished_iron_gun_frame',
		C: 'kubejs:metal/sheet/mangalloy',
	});
	event
		.shapeless('scguns:diamond_steel_gun_frame', [
			'createbigcannons:cannon_welder',
			'kubejs:metal/sheet/mangalloy',
			'kubejs:unfinished_diamond_steel_gun_frame',
		])
		.damageIngredient('createbigcannons:cannon_welder');

	event.shaped('scguns:rapid_firing_unit', [' A ', 'BCD', ' A '], {
		A: 'kubejs:metal/sheet/mangalloy',
		B: 'create:precision_mechanism',
		C: 'createbigcannons:recoil_spring',
		D: 'tfc:metal/rod/black_steel',
	});

	event.shaped('scguns:firing_unit', ['AB'], {
		A: 'tfc:metal/sheet/steel',
		B: 'kubejs:metal/rod/mangalloy',
	});

	event.recipes.tfc
		.anvil(
			'scguns:heavy_gun_barrel',
			'kubejs:metal/double_sheet/mangalloy',
			['punch_last', 'bend_any', 'draw_not_last']
		)
		.bonus(true)
		.tier(4);
	event.recipes.tfc
		.anvil('scguns:gun_barrel', 'kubejs:metal/sheet/mangalloy', [
			'punch_last',
			'bend_any',
			'draw_not_last',
		])
		.bonus(true)
		.tier(4);

	event.recipes.tfc
		.anvil('scguns:stone_gun_barrel', 'tfc:metal/sheet/steel', [
			'punch_last',
			'bend_any',
			'draw_not_last',
		])
		.bonus(true)
		.tier(4);

	event.recipes.tfc
		.anvil('scguns:gun_magazine', 'tfc:metal/sheet/steel', [
			'draw_last',
			'bend_any',
			'draw_not_last',
		])
		.bonus(true)
		.tier(4);

	ADDED_ANVIL_RECIPES.push([
		'scguns:heavy_gun_barrel',
		'kubejs:metal/double_sheet/mangalloy',
		4,
	]);
	ADDED_ANVIL_RECIPES.push([
		'scguns:gun_barrel',
		'kubejs:metal/sheet/mangalloy',
		4,
	]);
	ADDED_ANVIL_RECIPES.push([
		'scguns:stone_gun_barrel',
		'tfc:metal/sheet/steel',
		4,
	]);
	ADDED_ANVIL_RECIPES.push([
		'scguns:gun_magazine',
		'tfc:metal/sheet/steel',
		4,
	]);

	event
		.shapeless('scguns:treated_brass_gun_frame', [
			'kubejs:unfinished_diamond_steel_gun_frame',
			'kubejs:metal/double_sheet/carotine_steel',
			'kubejs:metal/rod/titanium',
			'createbigcannons:cannon_welder',
		])
		.damageIngredient('createbigcannons:cannon_welder');


	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('kubejs:plasma_gun_parts').copyForgingBonus(),
		['AB', 'CD'],
		{
			A: 'kubejs:unfinished_heavy_gun_parts',
			B: 'kubejs:metal/sheet/carotine_steel',
			C: 'createaddition:gold_spool',
			D: 'createaddition:capacitor',
		},
		0,
		0
	);
});
