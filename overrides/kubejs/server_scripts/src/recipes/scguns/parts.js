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
		.anvil('kubejs:unfinished_heavy_gun_parts', 'kubejs:metal/double_sheet/mangalloy', [
			'punch_last',
			'bend_second_last',
			'draw_third_last',
		])
		.tier(5)
		.bonus(true);


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
		.anvil('scguns:iron_gun_frame', 'tfc:metal/double_sheet/steel', [
			'bend_last',
			'punch_any',
			'draw_not_last',
		])
		.tier(4);
	event.recipes.tfc
		.anvil(
			'scguns:diamond_steel_gun_frame',
			'tfc:metal/double_sheet/blue_steel',
			['bend_last', 'punch_any', 'draw_not_last']
		)
		.tier(4);

	event.shaped('scguns:rapid_firing_unit', [' A ', 'BCD', ' A '], {
		A: 'kubejs:metal/sheet/mangalloy',
		B: 'create:precision_mechanism',
		C: 'createbigcannons:recoil_spring',
		D: 'tfc:metal/rod/black_steel',
	});
	event.shaped('scguns:firing_unit', ['AB'], {
		A: 'kubejs:metal/sheet/mangalloy',
		B: 'tfc:metal/rod/steel',
	});

	event.recipes.tfc
		.anvil('scguns:heavy_gun_barrel', 'tfc:metal/double_sheet/steel', [
			'punch_last',
			'bend_any',
			'draw_not_last',
		])
		.bonus(true)
		.tier(4);
	event.recipes.tfc
		.anvil('scguns:gun_barrel', 'tfc:metal/sheet/steel', [
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
});
