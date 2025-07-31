// priority: 50

ServerEvents.recipes((e) => {
	e.remove({ mod: 'railways' });

	e.shaped('railways:track_switch_andesite', ['L', 'B', 'C'], {
		L: 'lever',
		B: 'create:andesite_casing',
		C: 'create:cogwheel',
	});

	e.shaped('railways:track_switch_brass', ['L', 'B', 'C'], {
		L: 'lever',
		B: 'create:brass_casing',
		C: 'tfc:brass_mechanisms',
	});

	//huh, AFC doesn't have rails...
	TFC_WOOD_TYPES.forEach((wood) => {
		e.recipes.create
			.sequenced_assembly(
				[Item.of(`railways:track_tfc_${wood}`, 32)],
				'tfc:wood/planks/' + wood + '_slab',
				[
					e.recipes.createDeploying(
						`railways:track_incomplete_tfc_${wood}`,
						[
							`railways:track_incomplete_tfc_${wood}`,
							'tfc:metal/rod/steel',
						]
					),
					e.recipes.createDeploying(
						`railways:track_incomplete_tfc_${wood}`,
						[
							`railways:track_incomplete_tfc_${wood}`,
							'firmaciv:copper_bolt',
						]
					),
				]
			)
			.transitionalItem(`railways:track_incomplete_tfc_${wood}`)
			.loops(3);

		e.recipes.create
			.sequenced_assembly(
				[Item.of(`railways:track_tfc_${wood}_wide`, 32)],
				'tfc:wood/planks/' + wood,
				[
					e.recipes.createDeploying(
						`railways:track_incomplete_tfc_${wood}_wide`,
						[
							`railways:track_incomplete_tfc_${wood}_wide`,
							'tfc:metal/rod/steel',
						]
					),
					e.recipes.createDeploying(
						`railways:track_incomplete_tfc_${wood}_wide`,
						[
							`railways:track_incomplete_tfc_${wood}_wide`,
							'firmaciv:copper_bolt',
						]
					),
				]
			)
			.transitionalItem(`railways:track_incomplete_tfc_${wood}_wide`)
			.loops(3);

		e.recipes.create
			.sequenced_assembly(
				[Item.of(`railways:track_tfc_${wood}_narrow`, 32)],
				'tfc:wood/lumber/' + wood,
				[
					e.recipes.createDeploying(
						`railways:track_incomplete_tfc_${wood}_narrow`,
						[
							`railways:track_incomplete_tfc_${wood}_narrow`,
							'tfc:metal/rod/steel',
						]
					),
					e.recipes.createDeploying(
						`railways:track_incomplete_tfc_${wood}_narrow`,
						[
							`railways:track_incomplete_tfc_${wood}_narrow`,
							'firmaciv:copper_bolt',
						]
					),
				]
			)
			.transitionalItem(`railways:track_incomplete_tfc_${wood}_narrow`)
			.loops(3);
	});

	e.shapeless('4x railways:fuel_tank', [
		'4x firmaciv:copper_bolt',
		'tfc:metal/sheet/black_steel',
	]);

	e.shapeless('2x railways:portable_fuel_interface', [
		'2x create:portable_fluid_interface',
		'tfc:metal/sheet/black_steel',
	]);

	e.shaped('railways:handcar', ['SAS', 'LCL', 'ABA'], {
		S: '#forge:rods/wooden',
		A: 'create:andesite_alloy',
		L: '#tfc:lumber',
		C: 'create:contraption_controls',
		B: 'create:cogwheel',
	});

	e.shaped('railways:buffer', ['LLL', 'GGG', 'R R'], {
		L: '#tfc:lumber',
		G: 'create:metal_girder',
		R: 'tfc:metal/rod/cast_iron',
	});

	e.shapeless('railways:track_coupler', [
		'create:railway_casing',
		'redstone',
		'tfc:metal/sheet/wrought_iron',
	]);

	e.shaped('4x railways:semaphore', ['LCE', ' A '], {
		L: '#tfc:lumber',
		C: 'create:andesite_casing',
		E: 'create:electron_tube',
		A: 'create:andesite_alloy',
	});

	e.shapeless('2x create:schedule', ['tfc:metal/sheet/cast_iron', 'paper']);

	e.shapeless('railways:slashed_locometal', [
		'create:industrial_iron_block',
		'#tfc:chisels',
	]).damageIngredient('#tfc:chisels');

	e.shaped('railways:locometal_boiler', [' A ', 'AAA', ' A '], {
		A: '#railways:palettes/cycle_groups/base',
	});

	e.shaped('railways:brass_wrapped_locometal_boiler', [' A ', 'AAA', ' A '], {
		A: 'railways:brass_wrapped_locometal',
	});

	e.shaped('railways:iron_wrapped_locometal_boiler', [' A ', 'AAA', ' A '], {
		A: 'railways:iron_wrapped_locometal',
	});

	e.shaped(
		'railways:copper_wrapped_locometal_boiler',
		[' A ', 'AAA', ' A '],
		{
			A: 'railways:copper_wrapped_locometal',
		}
	);

	e.shaped('4x railways:riveted_locometal', ['AA', 'AA'], {
		A: 'railways:slashed_locometal',
	});
	e.shaped('5x railways:flat_slashed_locometal', ['A A', ' A ', 'A A'], {
		A: 'railways:slashed_locometal',
	});
	e.shaped('4x railways:plated_locometal', ['AA', 'AA'], {
		A: 'railways:riveted_locometal',
	});
	e.shaped('5x railways:flat_riveted_locometal', ['A A', ' A ', 'A A'], {
		A: 'railways:riveted_locometal',
	});

	e.shaped('3x railways:locometal_pillar', ['A', 'A', 'A'], {
		A: 'railways:slashed_locometal',
	});
	e.shaped('4x railways:locometal_smokebox', [' A ', 'A A', ' A '], {
		A: 'railways:slashed_locometal',
	});

	ALL_COLORS.forEach((color) => {
		e.shaped(`4x railways:${color}_riveted_locometal`, ['AA', 'AA'], {
			A: `railways:${color}_slashed_locometal`,
		});
		e.shaped(
			`5x railways:${color}_flat_slashed_locometal`,
			['A A', ' A ', 'A A'],
			{
				A: `railways:${color}_slashed_locometal`,
			}
		);
		e.shaped(`4x railways:${color}_plated_locometal`, ['AA', 'AA'], {
			A: `railways:${color}_riveted_locometal`,
		});
		e.shaped(
			`5x railways:${color}_flat_riveted_locometal`,
			['A A', ' A ', 'A A'],
			{
				A: `railways:${color}_riveted_locometal`,
			}
		);

		e.shaped(`3x railways:${color}_locometal_pillar`, ['A', 'A', 'A'], {
			A: `railways:${color}_slashed_locometal`,
		});
		e.shaped(
			`4x railways:${color}_locometal_smokebox`,
			[' A ', 'A A', ' A '],
			{
				A: `railways:${color}_slashed_locometal`,
			}
		);

		e.shaped(`railways:${color}_locometal_boiler`, [' A ', 'AAA', ' A '], {
			A: `#railways:palettes/cycle_groups/${color}`,
		});

		e.shapeless(`railways:${color}_brass_wrapped_locometal`, [
			`#railways:palettes/cycle_groups/${color}`,
			'tfc:metal/rod/brass',
		]);
		e.shapeless(`railways:${color}_iron_wrapped_locometal`, [
			`#railways:palettes/cycle_groups/${color}`,
			['tfc:metal/rod/wrought_iron', 'tfc:metal/rod/steel'],
		]);
		e.shapeless(`railways:${color}_copper_wrapped_locometal`, [
			`#railways:palettes/cycle_groups/${color}`,
			'tfc:metal/rod/copper',
		]);

		e.shaped(
			`railways:${color}_brass_wrapped_locometal_boiler`,
			[' A ', 'AAA', ' A '],
			{
				A: `railways:${color}_brass_wrapped_locometal`,
			}
		);

		e.shaped(
			`railways:${color}_iron_wrapped_locometal_boiler`,
			[' A ', 'AAA', ' A '],
			{
				A: `railways:${color}_iron_wrapped_locometal`,
			}
		);

		e.shaped(
			`railways:${color}_copper_wrapped_locometal_boiler`,
			[' A ', 'AAA', ' A '],
			{
				A: `railways:${color}_copper_wrapped_locometal`,
			}
		);
	});
});

ServerEvents.lowPriorityData((e) => {
	e.addJson('kubejs:railways_liquid_fuel/diesel', {
		fluids: [
			'createdieselgenerators:biodiesel',
			'createdieselgenerators:diesel',
			'createdieselgenerators:gasoline',
			'createdieselgenerators:ethanol',
		],
		fuel_ticks: 1200,
	});

	e.addJson('kubejs:railways_liquid_fuel/lava', {
		fluids: ['minecraft:lava'],
		invalid: true,
	});
});
