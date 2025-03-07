//priority: -100
ServerEvents.recipes((e) => {
	//slag from melting raw ores
	e.forEachRecipe({ type: 'tfc:heating' }, (recipe) => {
		let json = recipe.json;
		if (
			json.get('ingredient').get('item') != null &&
			Item.of(json.get('ingredient').get('item')).hasTag('tfc:ore_pieces')
		) {
			json.add('result_item', { item: 'thermal:slag' });
			e.custom(json).id(recipe.getId());
		}
	});

	//sawmill recipes
	WOOD_TYPES.forEach((wood) => {
		e.recipes.thermal.sawmill(
			`8x tfc:wood/lumber/${wood}`,
			`tfc:wood/log/${wood}`
		);
		e.recipes.thermal.sawmill(
			`4x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}`
		);
		e.recipes.thermal.sawmill(
			`7x tfc:wood/lumber/${wood}`,
			`tfc:wood/log/${wood}_loom`
		);
		e.recipes.thermal.sawmill(
			`7x tfc:wood/lumber/${wood}`,
			`tfc:wood/barrel/${wood}`
		);
		e.recipes.thermal.sawmill(
			`10x tfc:wood/lumber/${wood}`,
			`tfc:wood/lectern/${wood}`
		);
		e.recipes.thermal.sawmill(
			`14x tfc:wood/lumber/${wood}`,
			`tfc:wood/jar_shelf/${wood}`
		);
		e.recipes.thermal.sawmill(
			`3x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_door`
		);

		e.recipes.thermal.sawmill(
			`2x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_trapdoor`
		);
		e.recipes.thermal.sawmill(
			`2x tfc:wood/lumber/${wood}`,
			`tfc:wood/sign/${wood}`
		);
		e.recipes.thermal.sawmill(
			`4x tfc:wood/lumber/${wood}`,
			`everycomp:q/tfc/vertical_${wood}_planks`
		);
		e.recipes.thermal.sawmill(
			`3x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_tool_rack`
		);
		e.recipes.thermal.sawmill(
			`3x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_stairs`
		);
		e.recipes.thermal.sawmill(
			`2x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_slab`
		);
		e.recipes.thermal.sawmill(
			`3x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_pressure_plate`
		);

		e.recipes.thermal.sawmill(
			`4x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_button`
		);
		e.recipes.thermal.sawmill(
			`6x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_fence_gate`
		);
		e.recipes.thermal.sawmill(
			`2x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_fence`
		);
		e.recipes.thermal.sawmill(
			`8x tfc:wood/lumber/${wood}`,
			`tfc:wood/planks/${wood}_chest`
		);
	});

	AFC_WOOD_TYPES.forEach((wood) => {
		e.recipes.thermal.sawmill(
			`8x afc:wood/lumber/${wood}`,
			`afc:wood/log/${wood}`
		);
		e.recipes.thermal.sawmill(
			`4x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}`
		);
		e.recipes.thermal.sawmill(
			`7x afc:wood/lumber/${wood}`,
			`afc:wood/log/${wood}_loom`
		);
		e.recipes.thermal.sawmill(
			`7x afc:wood/lumber/${wood}`,
			`afc:wood/barrel/${wood}`
		);
		e.recipes.thermal.sawmill(
			`10x afc:wood/lumber/${wood}`,
			`afc:wood/lectern/${wood}`
		);
		e.recipes.thermal.sawmill(
			`14x afc:wood/lumber/${wood}`,
			`afc:wood/jar_shelf/${wood}`
		);
		e.recipes.thermal.sawmill(
			`3x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_door`
		);

		e.recipes.thermal.sawmill(
			`2x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_trapdoor`
		);
		e.recipes.thermal.sawmill(
			`2x afc:wood/lumber/${wood}`,
			`afc:wood/sign/${wood}`
		);
		e.recipes.thermal.sawmill(
			`4x afc:wood/lumber/${wood}`,
			`everycomp:q/afc/vertical_${wood}_planks`
		);
		e.recipes.thermal.sawmill(
			`3x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_tool_rack`
		);
		e.recipes.thermal.sawmill(
			`3x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_stairs`
		);
		e.recipes.thermal.sawmill(
			`2x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_slab`
		);
		e.recipes.thermal.sawmill(
			`3x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_pressure_plate`
		);

		e.recipes.thermal.sawmill(
			`4x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_button`
		);
		e.recipes.thermal.sawmill(
			`6x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_fence_gate`
		);
		e.recipes.thermal.sawmill(
			`2x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_fence`
		);
		e.recipes.thermal.sawmill(
			`8x afc:wood/lumber/${wood}`,
			`afc:wood/planks/${wood}_chest`
		);
	});

	e.recipes.thermal
		.pyrolyzer(
			['minecraft:charcoal', Fluid.of('thermal:creosote', 50)],
			'#tfc:log_pile_logs'
		)
		.energy(8000);

	e.recipes.thermal
		.pyrolyzer(
			['thermal:coal_coke', Fluid.of('thermal:creosote', 50)],
			[
				[
					'minecraft:charcoal',
					'tfc:ore/bituminous_coal',
					'tfc:ore/lignite',
				],
			]
		)
		.energy(8000);

	/*e.recipes.thermal.smelter('tfc:metal/ingot/pig_iron', [
        '2x minecraft:charcoal',
        'tfc:metal/ingot/cast_iron',
        'tfc:powder/flux',
    ]);*/

	//shale oil

	e.recipes.thermal
		.pyrolyzer(
			[
				'thermal:slag',
				Fluid.of('thermal:crude_oil', 1500),
				'thermal:coal_coke',
			],
			['#forge:ores/oil_shale']
		)
		.energy(5000);

});
