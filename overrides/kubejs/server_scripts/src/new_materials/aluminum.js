ServerEvents.recipes((e) => {
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
		.pot([], Fluid.of('kubejs:alumina_slurry', 1000), 300, 500)
		.itemOutput('10x kubejs:alumina_powder');
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
