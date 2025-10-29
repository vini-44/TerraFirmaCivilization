// priority: 50

ServerEvents.recipes((e) => {
	e.remove({ mod: 'createdieselgenerators' });

	e.recipes.tfc
		.anvil(
			'createdieselgenerators:canister',
			'tfc:metal/double_sheet/wrought_iron',
			['bend_last', 'draw_second_last', 'upset_third_last']
		)
		.tier(3);
	ADDED_ANVIL_RECIPES.push([
		'createdieselgenerators:canister',
		'tfc:metal/double_sheet/wrought_iron',
		3,
	]);

	e.shapeless('4x createdieselgenerators:oil_barrel', [
		'tfc:metal/sheet/wrought_iron',
		'4x firmaciv:copper_bolt',
	]);

	for (const [key, amount] of Object.entries(WOODEN_STUFF)) {
		e.recipes.create.crushing(
			Item.of('createdieselgenerators:wood_chip', amount),
			key
		);
	}

	e.shaped('createdieselgenerators:chip_wood_block', ['CC', 'CC'], {
		C: 'createdieselgenerators:wood_chip',
	});

	e.shaped('6x createdieselgenerators:chip_wood_slab', ['CCC'], {
		C: 'createdieselgenerators:chip_wood_block',
	});

	e.shaped(
		'4x createdieselgenerators:chip_wood_stairs',
		['C  ', 'CC ', 'CCC'],
		{
			C: 'createdieselgenerators:chip_wood_block',
		}
	);

	e.shaped('2x createdieselgenerators:chip_wood_beam', ['C', 'C'], {
		C: 'createdieselgenerators:chip_wood_block',
	});

	e.recipes.tfc
		.anvil(
			'kubejs:unfinished_oil_scanner',
			'firmalife:metal/ingot/stainless_steel',
			['hit_last', 'bend_second_last', 'draw_third_last']
		)
		.tier(4);

	ADDED_ANVIL_RECIPES.push([
		'kubejs:unfinished_oil_scanner',
		'firmalife:metal/ingot/stainless_steel',
		4,
	]);

	e.recipes.tfc
		.anvil(
			'4x kubejs:unfinished_distillation_controller',
			'firmalife:metal/double_sheet/stainless_steel',
			['hit_last', 'bend_second_last', 'draw_third_last']
		)
		.tier(4);

	ADDED_ANVIL_RECIPES.push([
		'4x kubejs:unfinished_distillation_controller',
		'firmalife:metal/double_sheet/stainless_steel',
		4,
	]);

	e.recipes.tfc.welding(
		'createdieselgenerators:oil_scanner',
		'clock',
		'kubejs:unfinished_oil_scanner'
	);

	e.shapeless('createdieselgenerators:distillation_controller', [
		'kubejs:unfinished_distillation_controller',
		'tfc:brass_mechanisms',
	]);

	e.recipes.tfc
		.anvil(
			'createdieselgenerators:engine_turbocharger',
			'kubejs:metal/sheet/aluminum',
			['bend_last', 'hit_second_last', 'draw_third_last']
		)
		.tier(4);
	e.recipes.tfc
		.anvil(
			'createdieselgenerators:engine_silencer',
			'firmalife:metal/double_sheet/stainless_steel',
			['draw_last', 'hit_second_last', 'upset_third_last']
		)
		.tier(4);
	e.recipes.tfc
		.anvil(
			'createdieselgenerators:engine_piston',
			'tfc:metal/double_ingot/steel',
			['hit_last', 'draw_second_last', 'upset_third_last']
		)
		.tier(4);

	ADDED_ANVIL_RECIPES.push([
		'createdieselgenerators:engine_turbocharger',
		'kubejs:metal/sheet/aluminum',
		4,
	]);
	ADDED_ANVIL_RECIPES.push([
		'createdieselgenerators:engine_silencer',
		'firmalife:metal/double_sheet/stainless_steel',
		4,
	]);
	ADDED_ANVIL_RECIPES.push([
		'createdieselgenerators:engine_piston',
		'tfc:metal/double_ingot/steel',
		4,
	]);

	e.shaped('createdieselgenerators:pumpjack_bearing', ['T', 'M', 'S'], {
		T: 'create:turntable',
		M: 'tfc:brass_mechanisms',
		S: 'firmalife:metal/double_sheet/stainless_steel',
	});

	e.shaped('createdieselgenerators:pumpjack_head', ['PRP', 'AAA'], {
		P: 'firmalife:metal/sheet/stainless_steel',
		R: 'firmalife:metal/rod/stainless_steel',
		A: 'create:andesite_alloy',
	});

	e.shaped('createdieselgenerators:pumpjack_crank', ['R R', 'SCS', 'AAA'], {
		R: 'tfc:metal/rod/cast_iron',
		S: 'firmalife:metal/sheet/stainless_steel',
		C: 'create:andesite_casing',
		A: 'create:andesite_alloy',
	});

	e.shaped('createdieselgenerators:pumpjack_hole', [' P ', 'PCP', ' P '], {
		P: 'create:fluid_pipe',
		C: 'create:copper_casing',
	});

	//distilling.

	e.custom({
		type: 'createdieselgenerators:distillation',
		ingredients: [
			{
				fluidTag: 'forge:crude_oil',
				amount: 100,
			},
		],
		heatRequirement: 'heated',
		processingTime: 100,
		results: [
			{
				fluid: 'kubejs:lubricant',
				amount: 30,
			},
			{
				fluid: 'createdieselgenerators:diesel',
				amount: 30,
			},
			{
				fluid: 'createdieselgenerators:gasoline',
				amount: 20,
			},
			{
				fluid: 'kubejs:kerosene',
				amount: 20,
			},
		],
	});

	e.custom({
		type: 'createdieselgenerators:distillation',
		ingredients: [
			{
				fluid: 'tfc:salt_water',
				amount: 1000,
			},
		],
		heatRequirement: 'heated',
		processingTime: 20,
		results: [
			{
				fluid: 'minecraft:water',
				amount: 1000,
			},
		],
	});

	e.custom({
		type: 'createdieselgenerators:distillation',
		ingredients: [
			{
				fluidTag: 'tfc:alcohols',
				amount: 100,
			},
		],
		heatRequirement: 'heated',
		processingTime: 100,
		results: [
			{
				fluid: 'createdieselgenerators:ethanol',
				amount: 30,
			},
		],
	});

	//lpg
	/*e.custom({
		type: 'createdieselgenerators:distillation',
		ingredients: [
			{
				fluidTag: 'kubejs:lpg_ingredients',
				amount: 100,
			},
		],
		heatRequirement: 'heated',
		processingTime: 100,
		results: [
			{
				fluid: 'kubejs:liquid_petroleum_gas',
				amount: 30,
			},
		],
	});*/

    //e.recipes.thermal.crystallizer('kubejs:plastic', [Fluid.of('kubejs:liquid_petroleum_gas', 90), 'kubejs:ilmenite_powder', 'tfc:powder/graphite']);
    //e.recipes.thermal.crystallizer('afc:rubber_bar', [Fluid.of('kubejs:liquid_petroleum_gas', 90), 'kubejs:ilmenite_powder', 'tfc:powder/sulfur']);

	//aslphalt

	e.recipes.create.mixing('8x createdieselgenerators:asphalt_block', [
		'#tfc:rock/gravel',
		Fluid.of('createdieselgenerators:crude_oil', 100),
	]);

	e.shaped('6x createdieselgenerators:asphalt_slab', ['CCC'], {
		C: 'createdieselgenerators:asphalt_block',
	});

	e.shaped(
		'4x createdieselgenerators:asphalt_stairs',
		['C  ', 'CC ', 'CCC'],
		{
			C: 'createdieselgenerators:asphalt_block',
		}
	);

	//engines
	e.shaped('createdieselgenerators:diesel_engine', ['PSP', 'PTP'], {
		P: 'createdieselgenerators:engine_piston',
		S: 'tfc:metal/double_sheet/brass',
		T: 'railways:fuel_tank',
	});

	e.shaped(
		'createdieselgenerators:huge_diesel_engine',
		[' I ', 'BIB', 'BTB'],
		{
			I: 'firmalife:metal/double_ingot/stainless_steel',
			B: 'tfc:metal/double_sheet/brass',
			T: 'railways:fuel_tank',
		}
	);

	e.shapeless('createdieselgenerators:large_diesel_engine', [
		'createdieselgenerators:diesel_engine',
		'tfc:metal/sheet/brass',
	]);

	e.recipes.create.compacting(
		Fluid.of('createdieselgenerators:plant_oil', 50),
		['#tfc:seeds']
	);

	//technically not aircraft but its closely related

	e.recipes.tfc
		.anvil('8x kubejs:empty_fuel_can', 'tfc:metal/double_sheet/steel', [
			'bend_last',
			'bend_not_last',
			'shrink_third_last',
		])
		.tier(4);
	e.recipes.tfc
		.anvil('4x kubejs:empty_fuel_can', 'tfc:metal/sheet/steel', [
			'bend_last',
			'bend_not_last',
			'shrink_third_last',
		])
		.tier(4);

	ADDED_ANVIL_RECIPES.push([
		'8x kubejs:empty_fuel_can',
		'tfc:metal/double_sheet/steel',
		4,
	]);
	ADDED_ANVIL_RECIPES.push([
		'4x kubejs:empty_fuel_can',
		'tfc:metal/sheet/steel',
		4,
	]);

	const fuel_types = ['diesel', 'gasoline', 'biodiesel', 'ethanol'].forEach(
		(type) => {
			e.recipes.create.filling(`kubejs:${type}_fuel_can`, [
				Fluid.of(`createdieselgenerators:${type}`, 1000),
				`kubejs:empty_fuel_can`,
			]);

			e.recipes.create.emptying(
				[
					Fluid.of(`createdieselgenerators:${type}`, 1000),
					`kubejs:empty_fuel_can`,
				],
				`kubejs:${type}_fuel_can`
			);
		}
	);

	e.shaped(
		'createdieselgenerators:chemical_sprayer_lighter',
		['AB ', 'CDE', '  A'],
		{
			A: 'afc:rubber_bar',
			B: '#forge:rods/wooden',
			C: 'createdieselgenerators:canister',
			D: 'create:mechanical_pump',
			E: 'create:fluid_pipe',
		}
	);

	e.shaped('createdieselgenerators:burner', ['ABA', 'CDC', 'EFE'], {
		A: 'tfc:metal/sheet/cast_iron',
		B: 'firmalife:metal/double_sheet/stainless_steel',
		C: 'create:shaft',
		D: 'create:fluid_pipe',
		E: 'afc:rubber_bar',
		F: 'tfc:metal/double_sheet/cast_iron',
	});
	e.shaped('createdieselgenerators:chemical_turret', [' A ', 'BCB', 'DED'], {
		A: 'createdieselgenerators:chemical_sprayer_lighter',
		B: 'create:shaft',
		C: 'create:precision_mechanism',
		D: 'create:copper_casing',
		E: 'create:fluid_tank',
	});
});
