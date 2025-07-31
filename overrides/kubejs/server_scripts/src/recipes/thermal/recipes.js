// priority: 50

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

	e.shapeless('4x thermal:slag', ['thermal:slag_block']);

	e.shapeless('thermal:polished_slag', [
		'thermal:slag_block',
		'#tfc:chisels',
	]).damageIngredient('#tfc:chisels');
	e.shapeless('thermal:chiseled_slag', [
		'thermal:polished_slag',
		'#tfc:chisels',
	]).damageIngredient('#tfc:chisels');
	e.shaped('4x thermal:slag_bricks', ['ABA', 'BAB', 'ABA'], {
		A: 'thermal:slag',
		B: 'tfc:mortar',
	});
	e.shapeless('thermal:cracked_slag_bricks', [
		'thermal:slag_bricks',
		'#tfc:hammers',
	]).damageIngredient('#tfc:hammers');

	//TODO: smithing recipes instead?
	//drill head
	e.recipes.tfc
		.anvil('thermal:drill_head', 'kubejs:metal/ingot/titanium', [
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

	ADDED_ANVIL_RECIPES.push([
		'thermal:drill_head',
		'kubejs:metal/ingot/titanium',
		4,
	]);
	ADDED_ANVIL_RECIPES.push(['thermal:saw_blade', 'tfc:metal/sheet/steel', 4]);

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

	e.recipes.create
		.sequenced_assembly(
			'thermal:upgrade_augment_3',
			'tfc:metal/double_sheet/blue_steel',
			[
				e.recipes.create.deploying(
					'kubejs:unfinished_upgrade_augment_3',
					[
						'kubejs:unfinished_upgrade_augment_3',
						'createaddition:gold_wire',
					]
				),
				e.recipes.create.deploying(
					'kubejs:unfinished_upgrade_augment_3',
					[
						'kubejs:unfinished_upgrade_augment_3',
						'kubejs:tungsten_carbide_parts',
					]
				),
				e.recipes.create.deploying(
					'kubejs:unfinished_upgrade_augment_3',
					[
						'kubejs:unfinished_upgrade_augment_3',
						'createaddition:capacitor',
					]
				),
				e.recipes.create.deploying(
					'kubejs:unfinished_upgrade_augment_3',
					[
						'kubejs:unfinished_upgrade_augment_3',
						'tfc:metal/double_sheet/blue_steel',
					]
				),
				e.recipes.create
					.deploying('kubejs:unfinished_upgrade_augment_3', [
						'kubejs:unfinished_upgrade_augment_3',
						'createbigcannons:cannon_welder',
					])
					.damageIngredient('createbigcannons:cannon_welder'),
			],
			'kubejs:unfinished_upgrade_augment_3'
		)
		.loops(0);

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

	e.recipes.thermal
		.refinery(Fluid.of('tfc:lye', 500), Fluid.of('tfc:salt_water'))
		.energy(20000);

	e.recipes.thermal
		.refinery(
			[
				Fluid.of('kubejs:liquid_hydrogen', 600),
				Fluid.of('kubejs:liquid_oxygen', 300),
			],
			Fluid.of('water', 1000)
		)
		.energy(20000);

	e.shaped('thermal:machine_furnace', ['AAA', 'BCB', 'DED'], {
		A: 'createaddition:copper_spool',
		B: 'tfc:fire_bricks',
		C: 'thermal:machine_frame',
		D: 'tfc:metal/rod/black_steel',
		E: 'tfc:metal/double_sheet/black_steel',
	});

	e.shaped('thermal:machine_crystallizer', ['ABA', 'CDE', 'FBF'], {
		A: 'firmalife:metal/rod/chromium',
		B: 'create:fluid_tank',
		C: 'tfc:metal/tuyere/black_steel',
		D: 'thermal:machine_frame',
		E: 'tfc:ceramic/ingot_mold',
		F: 'kubejs:metal/sheet/titanium',
	});
});
