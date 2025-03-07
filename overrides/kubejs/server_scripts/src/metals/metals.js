ServerEvents.recipes((e) => {
	//BASIC RECIPES
	let metals = [`manganese`, `mangalloy`, 'aluminum'].forEach((metal) => {
		e.recipes.tfc
			.heating(`kubejs:metal/ingot/${metal}`, 1485.0)
			.resultFluid(Fluid.of(`kubejs:molten_${metal}`, 100));
		e.recipes.tfc
			.heating(`kubejs:metal/double_ingot/${metal}`, 1485.0)
			.resultFluid(Fluid.of(`kubejs:molten_${metal}`, 200));
		e.recipes.tfc
			.heating(`kubejs:metal/sheet/${metal}`, 1485.0)
			.resultFluid(Fluid.of(`kubejs:molten_${metal}`, 200));
		e.recipes.tfc
			.heating(`kubejs:metal/double_sheet/${metal}`, 1485.0)
			.resultFluid(Fluid.of(`kubejs:molten_${metal}`, 400));
		e.recipes.tfc.welding(
			`kubejs:metal/double_ingot/${metal}`,
			`kubejs:metal/ingot/${metal}`,
			`kubejs:metal/ingot/${metal}`
		);
		e.recipes.tfc.welding(
			`kubejs:metal/double_sheet/${metal}`,
			`kubejs:metal/sheet/${metal}`,
			`kubejs:metal/sheet/${metal}`
		);
		e.recipes.tfc
			.anvil(
				`kubejs:metal/sheet/${metal}`,
				`kubejs:metal/double_ingot/${metal}`,
				[`hit_any`, `hit_any`, `hit_any`]
			)
			.tier(5);

		e.shapeless(`kubejs:metal/double_ingot/${metal}`, [
			`kubejs:metal/ingot/${metal}`,
			`kubejs:metal/ingot/${metal}`,
			`tfc:powder/flux`,
			`createbigcannons:cannon_welder`,
		])
			.damageIngredient(`createbigcannons:cannon_welder`)
			.id(`welding_${metal}_double_ingot_manual_only`);

		e.shapeless(`kubejs:metal/double_sheet/${metal}`, [
			`kubejs:metal/sheet/${metal}`,
			`kubejs:metal/sheet/${metal}`,
			`tfc:powder/flux`,
			`createbigcannons:cannon_welder`,
		])
			.damageIngredient(`createbigcannons:cannon_welder`)
			.id(`welding_${metal}_double_sheet_manual_only`);

		e.recipes.create
			.sequenced_assembly(
				[`kubejs:metal/double_ingot/${metal}`],
				`kubejs:metal/ingot/${metal}`,
				[
					e.recipes.createDeploying(
						Item.of(`kubejs:metal/ingot/${metal}`),
						[
							Ingredient.of(`kubejs:metal/ingot/${metal}`),
							`tfc:powder/flux`,
						]
					),
					e.recipes.createDeploying(
						Item.of(`kubejs:metal/ingot/${metal}`),
						[
							Ingredient.of(`kubejs:metal/ingot/${metal}`),
							Ingredient.of(`kubejs:metal/ingot/${metal}`),
						]
					),
					e.recipes
						.createDeploying(
							Item.of(`kubejs:metal/ingot/${metal}`),
							[
								Ingredient.of(`kubejs:metal/ingot/${metal}`),
								`createbigcannons:cannon_welder`,
							]
						)
						.keepHeldItem(),
				]
			)
			.transitionalItem(Ingredient.of(`kubejs:metal/ingot/${metal}`))
			.loops(1);

		e.recipes.create
			.sequenced_assembly(
				[`kubejs:metal/double_sheet/${metal}`],
				`kubejs:metal/sheet/${metal}`,
				[
					e.recipes.createDeploying(
						Item.of(`kubejs:metal/sheet/${metal}`),
						[
							Ingredient.of(`kubejs:metal/sheet/${metal}`),
							`tfc:powder/flux`,
						]
					),
					e.recipes.createDeploying(
						Item.of(`kubejs:metal/sheet/${metal}`),
						[
							Ingredient.of(`kubejs:metal/sheet/${metal}`),
							Ingredient.of(`kubejs:metal/sheet/${metal}`),
						]
					),
					e.recipes
						.createDeploying(
							Item.of(`kubejs:metal/sheet/${metal}`),
							[
								Ingredient.of(`kubejs:metal/sheet/${metal}`),
								`createbigcannons:cannon_welder`,
							]
						)
						.keepHeldItem(),
				]
			)
			.transitionalItem(Ingredient.of(`kubejs:metal/sheet/${metal}`))
			.loops(1);

		e.recipes.tfc.casting(
			`kubejs:metal/ingot/${metal}`,
			`tfc:ceramic/ingot_mold`,
			Fluid.of(`kubejs:molten_${metal}`, 100),
			0.1
		);
		e.recipes.tfc.casting(
			`kubejs:metal/ingot/${metal}`,
			`tfc:ceramic/fire_ingot_mold`,
			Fluid.of(`kubejs:molten_${metal}`, 100),
			0.01
		);
	});

    e.recipes.tfc.alloy('kubejs:mangalloy', [
        TFC.alloyPart('tfc:steel', 0.8, 0.9),
        TFC.alloyPart('kubejs:manganese', 0.2, 0.1),
    ])

	//Manganese processing
	e.recipes.tfc.blast_furnace(
		Fluid.of(`kubejs:molten_manganese`, 1),
		`tfc:powder/flux`,
		Fluid.of(`kubejs:molten_raw_manganese`, 1)
	);
	e.recipes.tfc
		.heating(`#kubejs:processed_manganese_powder`, 1328)
		.resultFluid(Fluid.of(`kubejs:molten_raw_manganese`, 100));
	e.recipes.tfc
		.heating(`kubejs:manganite_chunk`, 1528)
		.resultItem(`kubejs:processed_manganite_powder`);

        e.recipes.tfc
		.heating(`kubejs:rhodocrosite_fragment`, 1528)
		.resultItem('kubejs:processed_rhodocrosite_powder');

	//aluminum processing
	e.recipes.create
		.mixing(Fluid.of('kubejs:kaolinite_mixture', 50), [
			'tfc:powder/kaolinite',
			Fluid.of('tfc:lye', 250),
		])
		.superheated();
	e.custom({
		type: 'createdieselgenerators:distillation',
		ingredients: [
			{
				fluid: `kubejs:kaolinite_mixture`,
				amount: 100,
			},
		],
		heatRequirement: 'heated',
		processingTime: 100,
		results: [
			{
				fluid: 'kubejs:alumina_slurry',
				amount: 75,
			},
			{
				fluid: 'create:potion',
				nbt: {
					Bottle: 'REGULAR',
					Potion: 'minecraft:thick',
				},
				amount: 25,
			},
		],
	});

	e.recipes.tfc
		.pot([], Fluid.of('kubejs:alumina_slurry', 100), 300, 500)
		.itemOutput('kubejs:alumina_powder');
	e.recipes.create
		.mixing(
			['kubejs:alumina_powder'],
			[Fluid.of('kubejs:alumina_slurry', 100)]
		)
		.heated();
	e.recipes.tfc.blast_furnace(
		Fluid.of('kubejs:molten_aluminum', 1),
		'tfc:ore/cryolite',
		Fluid.of('kubejs:molten_alumina', 1)
	);
	e.recipes.tfc
		.heating('kubejs:alumina_powder', 1328)
		.resultFluid(Fluid.of('kubejs:molten_alumina', 100));
});

TFCEvents.data((event) => {
	event.itemHeat(`kubejs:processed_manganite_powder`, 2.857, 921, 1228);
    event.itemHeat(`kubejs:processed_rhodocrosite_powder`, 2.857, 921, 1228);

	event.itemHeat(`kubejs:manganite_chunk`, 2.857, 921, 1228);
	event.itemHeat('kubejs:alumina_powder', 2.857, 921, 1228);
});
