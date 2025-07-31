ServerEvents.recipes((e) => {
	//BASIC RECIPES
	let metals = [
		`manganese`,
		`mangalloy`,
		'aluminum',
		'titanium',
		'tungsten',
        'carotine_steel'
	].forEach((metal) => {
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

		e.recipes.tfc
			.heating(`kubejs:metal/rod/${metal}`, 1485.0)
			.resultFluid(Fluid.of(`kubejs:molten_${metal}`, 50));

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
				`2x kubejs:metal/rod/${metal}`,
				`kubejs:metal/ingot/${metal}`,
				['bend_last', 'draw_second_last', 'draw_third_last']
			)
			.tier(5);

            ADDED_ANVIL_RECIPES.push(['2x kubejs:metal/rod/' + metal, 'kubejs:metal/ingot/' + metal, 5] );

		e.recipes.tfc
			.anvil(
				`kubejs:metal/sheet/${metal}`,
				`kubejs:metal/double_ingot/${metal}`,
				[`hit_any`, `hit_any`, `hit_any`]
			)
			.tier(5);

            ADDED_ANVIL_RECIPES.push(['kubejs:metal/sheet/' + metal, 'kubejs:metal/double_ingot/' + metal, 5] );

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
		e.custom({
			type: 'createaddition:rolling',
			input: Item.of(`kubejs:metal/ingot/${metal}`),
			result: Item.of(`kubejs:metal/rod/${metal}`, 2),
		});

		e.recipes.create
			.sequenced_assembly(
				[`kubejs:metal/sheet/${metal}`],
				`kubejs:metal/double_ingot/${metal}`,
				[
					e.recipes.create.pressing(
						`kubejs:metal/double_ingot/${metal}`,
						`kubejs:metal/double_ingot/${metal}`
					),
				]
			)
			.transitionalItem(`kubejs:metal/double_ingot/${metal}`)
			.loops(5);

		e.recipes.tfc.casting(
			`kubejs:metal/ingot/${metal}`,
			`tfc:ceramic/fire_ingot_mold`,
			Fluid.of(`kubejs:molten_${metal}`, 100),
			0.01
		);
	});

	e.recipes.tfc
		.heating('kubejs:titanium_powder_block', 1250)
		.resultFluid(Fluid.of(`kubejs:molten_titanium`, 5 * 9));

	e.recipes.tfc
		.heating('kubejs:tungsten_powder_block', 1250)
		.resultFluid(Fluid.of(`kubejs:molten_tungsten`, 5 * 9));
});

TFCEvents.data((event) => {
	event.itemHeat(`kubejs:processed_manganite_powder`, 2.857, 921, 1228);
	event.itemHeat(`kubejs:processed_rhodocrosite_powder`, 2.857, 921, 1228);

	event.itemHeat(`kubejs:manganite_chunk`, 2.857, 921, 1228);
	event.itemHeat('kubejs:alumina_powder', 2.857, 921, 1228);

	event.itemHeat('kubejs:titanium_powder', 2.857, 921, 1228);
	event.itemHeat('kubejs:titanium_powder_block', 2.857, 921, 1228);

	event.itemHeat('kubejs:tungsten_powder', 2.857, 921, 1228);
	event.itemHeat('kubejs:tungsten_powder_block', 2.857, 921, 1228);
});
