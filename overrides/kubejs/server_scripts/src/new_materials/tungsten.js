ServerEvents.recipes((e) => {
	e.recipes.create.milling(
		'4x kubejs:wolframite_powder',
		'kubejs:wolframite_chunk'
	);
	e.recipes.create.crushing(
		[
			'4x kubejs:wolframite_powder',
			Item.of('kubejs:wolframite_powder', 2).withChance(0.25),
		],
		'kubejs:wolframite_chunk'
	);

	e.shaped('kubejs:wolframite_powder_block', ['WWW', 'WWW', 'WWW'], {
		W: 'kubejs:wolframite_powder',
	});
	e.shapeless('9x kubejs:wolframite_powder', [
		'kubejs:wolframite_powder_block',
	]);

	e.shaped('kubejs:tungsten_powder_block', ['WWW', 'WWW', 'WWW'], {
		W: 'kubejs:tungsten_powder',
	});
	e.shapeless('9x kubejs:tungsten_powder', ['kubejs:tungsten_powder_block']);

	e.recipes.tfc
		.heating('kubejs:tungsten_powder', 1485.0)
		.resultFluid(Fluid.of('kubejs:molten_tungsten', 5));

	e.recipes.thermal
		.crystallizer('kubejs:tungsten_powder', [
			Fluid.of('kubejs:liquid_hydrogen', 1000),
			'kubejs:unrefined_tungsten_powder',
		])
		.energy(20000);

	e.shaped(
		Item.of(
			'createdieselgenerators:mold',
			'{Mold:"createdieselgenerators:bar"}'
		),
		['AA', 'AA'],
		{
			A: 'kubejs:metal/sheet/titanium',
		}
	);

	let ingredients = [];

	for (let i = 0; i < 20; i++) {
		ingredients.push({
			item: 'kubejs:tungsten_powder',
		});
		ingredients.push({
			item: 'tfc:powder/graphite',
		});
	}

	e.custom({
		type: 'createdieselgenerators:compression_molding',
		ingredients: ingredients,
		mold: 'createdieselgenerators:bar',
		heatRequirement: 'superheated',
		results: [
			{
				item: 'kubejs:tungsten_carbide_parts',
				count: 1,
			},
		],
	});

	e.shaped('kubejs:machine_metal_former', ['GBG', 'CDF', 'ABA'], {
		A: 'kubejs:metal/double_sheet/titanium',
		B: 'create:fluid_tank',
		C: 'kubejs:tungsten_carbide_parts',
		D: 'thermal:machine_frame',
		F: 'createaddition:electric_motor',
        G: 'kubejs:metal/sheet/tungsten',
	});

});
