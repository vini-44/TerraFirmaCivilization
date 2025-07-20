// priority: 0
ServerEvents.recipes((e) => {

	e.recipes.thermal
		.pyrolyzer(
			['minecraft:charcoal', Fluid.of('thermal:creosote', 50)],
			'#tfc:log_pile_logs'
		)
		.energy(32000);

	e.recipes.thermal
		.pyrolyzer(
			['thermal:coal_coke', Fluid.of('thermal:creosote', 50)],
			[
				[
					'minecraft:charcoal',
				],
			]
		)
		.energy(16000);

        e.recipes.thermal.pyrolyzer(
            ['tfc:powder/coke', Fluid.of('createdieselgenerators:crude_oil', 15), Item.of('tfc:powder/sulfur').withChance(0.75)],
            [
                [
					'tfc:ore/bituminous_coal',
					'tfc:ore/lignite',
                ],
            ]
        ).energy(32000);

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
				Item.of('tfc:powder/sulfur').withChance(0.75),
			],
			['#forge:ores/oil_shale']
		)
		.energy(5000);

	e.forEachRecipe({ type: 'tfc:heating' }, (recipe) => {
		let _json = JsonIO.toObject(recipe.json);

		//skip recipes with fluid output, no item output or itemstack provider
		if (_json.result_fluid || !_json.result_item) return;

		let _result_item =
			_json.result_item.stack != undefined
				? _json.result_item.stack
				: _json.result_item;

		//check if not food
		if (Item.of(_result_item).hasTag('tfc:foods')) return;

		e.recipes.thermal
			.furnace(
				Item.of(_json.result_item).withChance(
					_json.chance != undefined ? _json.chance : 1
				),
				_json.ingredient,
				0,
				_json.temperature * 2
			)
			.energy(_json.temperature * 3);
	});
});
