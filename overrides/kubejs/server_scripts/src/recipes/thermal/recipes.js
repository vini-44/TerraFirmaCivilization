ServerEvents.recipes((e) => {
	// Remove old recipes
	e.remove({ mod: 'thermal' });

	//blocks

	//casing
	e.shaped('thermal:machine_frame', ['SDS', 'WPW', 'SDS'], {
		S: 'afc:rubber_bar',
		D: 'firmalife:metal/double_sheet/stainless_steel',
		W: 'createaddition:capacitor',
		P: 'create:precision_mechanism',
	});

	//nullifier
	e.shaped('thermal:device_nullifier', ['RRR', 'SCS', 'PSP'], {
		R: 'tfc:metal/rod/cast_iron',
		S: 'createaddition:copper_spool',
		C: 'thermal:machine_frame',
		P: 'firmalife:metal/sheet/stainless_steel',
	});

	//sawmill
	e.shaped('thermal:machine_sawmill', [' B ', 'SFS', ' P '], {
		B: 'thermal:saw_blade',
		S: 'createaddition:copper_spool',
		F: 'thermal:machine_frame',
		P: 'firmalife:metal/sheet/stainless_steel',
	});

	//pyrolyzer
	e.shaped('thermal:machine_pyrolyzer', ['SCS', 'SFS', 'PDP'], {
		S: 'createaddition:copper_spool',
		C: 'tfc:crucible',
		F: 'thermal:machine_frame',
		P: 'tfc:metal/sheet/black_steel',
		D: 'tfc:metal/double_sheet/black_steel',
	});

	//tinker's workbench
	e.shaped('thermal:tinker_bench', ['PPP', 'SFS', 'LLL'], {
		S: 'createaddition:copper_spool',
		F: 'thermal:machine_frame',
		P: 'tfc:metal/sheet/steel',
		L: '#tfc:lumber',
	});

	//induction smelter
	//e.shaped('thermal:machine_smelter', ['SSS', 'SFS', 'PPP'], {
	//	S: 'createaddition:gold_spool',
	//	F: 'thermal:machine_frame',
	//	P: 'tfc:metal/double_sheet/black_steel',
	//});

	//materials & misc
	//slag block
	e.shaped('thermal:slag_block', ['AA', 'AA'], {
		A: 'thermal:slag',
	});

    e.shaped('4x thermal:polished_slag', ['AA', 'AA'], {
        A: 'thermal:slag_block',
    })

	//TODO: smithing recipes instead?
	//drill head
	e.recipes.tfc
		.anvil('thermal:drill_head', 'tfc:metal/double_sheet/steel', [
			'punch_last',
			'bend_any',
			'draw_not_last',
		])
		.bonus(true)
		.tier(4);

	//saw blade
	e.recipes.tfc
		.anvil('thermal:saw_blade', 'tfc:metal/sheet/steel', [
			'punch_last',
			'bend_any',
			'draw_not_last',
		])
		.bonus(true)
		.tier(4);

	//slot seal
	e.shaped('thermal:slot_seal', ['R R', ' R ', 'R R'], {
		R: 'tfc:metal/rod/cast_iron',
	});

	//tools
	//drill
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('thermal:flux_drill').copyForgingBonus(),
		['DFR', ' CC'],
		{
			D: 'thermal:drill_head',
			F: 'thermal:machine_frame',
			R: 'tfc:metal/rod/blue_steel',
			C: 'createaddition:capacitor',
		},
		0,
		0
	);

	//saw
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('thermal:flux_saw').copyForgingBonus(),
		['DFR', ' CC'],
		{
			D: 'thermal:saw_blade',
			F: 'thermal:machine_frame',
			R: 'tfc:metal/rod/red_steel',
			C: 'createaddition:capacitor',
		},
		0,
		0
	);

	//capacitor
	e.shaped('thermal:flux_capacitor', ['SSS', 'SPS', 'SSS'], {
		S: 'createaddition:capacitor',
		P: 'tfc:metal/sheet/blue_steel',
	});

	//redprint
	e.shapeless('thermal:redprint', ['minecraft:paper', '#forge:dyes/red']);

	//wrench
	e.shaped('thermal:wrench', [' P ', ' RP', 'R  '], {
		R: 'tfc:metal/rod/blue_steel',
		P: 'create:andesite_alloy',
	});

	//detonator
	e.shapeless('thermal:detonator', [
		'#minecraft:buttons',
		'tfc:metal/sheet/wrought_iron',
		'create:redstone_link',
	]);

	//upgrades
	/////////
	e.shaped('thermal:item_filter_augment', ['   ', 'ABA', '   '], {
		A: 'tfc:metal/rod/zinc',
		B: 'create:filter',
	});
	e.shaped('thermal:fluid_filter_augment', [' A ', ' B ', ' A '], {
		A: 'tfc:metal/rod/zinc',
		B: 'create:filter',
	});
	e.shaped('thermal:fluid_tank_augment', [' A ', 'BCB', ' A '], {
		A: 'tfc:metal/sheet/zinc',
		B: 'tfc:metal/rod/zinc',
		C: 'create:fluid_tank',
	});

	e.shaped('thermal:rf_coil_augment', ['ABA', 'ACA', 'ABA'], {
		A: 'createaddition:copper_spool',
		B: 'tfc:metal/rod/zinc',
		C: 'tfc:metal/sheet/zinc',
	});
	e.shaped('thermal:side_config_augment', [' A ', 'BCB', ' A '], {
		A: 'tfc:metal/sheet/zinc',
		B: 'minecraft:dispenser',
		C: 'create:precision_mechanism',
	});

	e.shaped('thermal:machine_efficiency_augment', [' A ', 'BCB', ' A '], {
		A: 'createaddition:gold_spool',
		B: 'tfc:metal/rod/zinc',
		C: 'minecraft:redstone',
	});
	e.shaped('thermal:rf_coil_storage_augment', ['ABC', 'ADC', 'ABC'], {
		A: 'createaddition:copper_spool',
		B: 'tfc:metal/rod/zinc',
		C: 'createaddition:gold_spool',
		D: 'tfc:metal/sheet/zinc',
	});

	e.shaped('thermal:machine_speed_augment', [' A ', 'BCB', ' A '], {
		A: 'createaddition:gold_spool',
		B: 'tfc:metal/sheet/zinc',
		C: 'tfc:lens',
	});
	e.shaped('thermal:rf_coil_xfer_augment', ['ABA', 'ACA', 'ABA'], {
		A: 'createaddition:gold_spool',
		B: 'tfc:metal/rod/zinc',
		C: 'tfc:metal/sheet/zinc',
	});

	e.shaped('thermal:upgrade_augment_2', ['ABC', 'BDB', 'CBA'], {
		A: 'minecraft:redstone',
		B: 'tfc:metal/sheet/black_steel',
		C: '#tfc:gem_powders',
		D: 'thermal:upgrade_augment_1',
	});
	e.shaped('thermal:upgrade_augment_1', ['ABA', 'BCB', 'ABA'], {
		A: 'minecraft:redstone',
		B: 'tfc:metal/sheet/steel',
		C: 'tfc:lens',
	});
	e.shaped('thermal:upgrade_augment_3', ['ABA', 'BCB', 'ABA'], {
		A: '#tfc:gem_powders',
		B: 'tfc:metal/sheet/blue_steel',
		C: 'thermal:upgrade_augment_2',
	});
	e.shaped('thermal:rs_control_augment', [' A ', 'BCB', ' A '], {
		A: 'tfc:metal/sheet/zinc',
		B: 'minecraft:observer',
		C: 'create:precision_mechanism',
	});

	e.recipes.create.milling('4x tfc:powder/coke', ['thermal:coal_coke']);
	e.recipes.create.crushing(
		['4x tfc:powder/coke', Item.of('tfc:powder/coke', 2).withChance(0.5)],
		'thermal:coal_coke'
	);

	e.shaped('thermal:machine_refinery', ['ABA', 'CDC', 'BEB'], {
		A: 'createaddition:capacitor',
		B: 'tfc:metal/sheet/black_steel',
		C: 'createaddition:gold_spool',
		D: 'create:fluid_tank',
		E: 'thermal:machine_frame',
	});

    e.recipes.thermal.refinery(Fluid.of('tfc:lye', 500), Fluid.of('tfc:salt_water')).energy(20000);
});
