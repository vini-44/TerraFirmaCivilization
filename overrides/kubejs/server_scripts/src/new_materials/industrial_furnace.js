ServerEvents.recipes((e) => {
	// Titanium

	e.recipes.kubejs
		.industrial_furnace()
		.id('kubejs:titanium_powder')
		.duration(400)
		.inputItems(
			'5x kubejs:ilmenite_powder',
			'2x tfc:powder/sulfur',
			'tfc:powder/graphite'
		)
		.perTick((builder) => {
			builder.inputFluids(Fluid.of('tfc:salt_water', 25));
			builder.inputFE(1024 * 0.75);
		})
		.outputItems('4x kubejs:titanium_powder');

	// unrefined tungsten
	e.recipes.kubejs
		.industrial_furnace()
		.id('kubejs:unrefined_tungsten_powder')
		.duration(800)
		.inputItems('8x kubejs:wolframite_powder', 'tfc:powder/sulfur')
		.perTick((builder) => {
			builder.inputFluids(Fluid.of('tfc:lye', Math.ceil(75 / 4)));
			builder.inputFE(1024);
		})
		.outputItems('kubejs:unrefined_tungsten_powder');

	// alumina from kyanite
	e.recipes.kubejs
		.industrial_furnace()
		.id('kubejs:alumina_from_kyanite')
		.duration(100)
		.inputItems('8x kubejs:kyanite_dust', '3x tfc:powder/sulfur')
		.perTick((builder) => {
			builder.inputFluids(Fluid.of('tfc:lye', 50));
			builder.inputFE(1024);
		})
		.outputFluids(Fluid.of('kubejs:molten_alumina', 5000));

	// manganese
	e.recipes.kubejs
		.industrial_furnace()
		.id('kubejs:manganese')
		.duration(100)
		.inputItems('3x #kubejs:manganese_ore', '2x tfc:powder/soda_ash')
		.perTick((builder) => {
			builder.inputFluids(Fluid.of('water', 100));
			builder.inputFE(1024);
		})
		.outputFluids(Fluid.of('kubejs:molten_manganese', 400));

	// petroleum coke
	e.recipes.kubejs
		.industrial_furnace()
		.id('kubejs:pretoleum_coke')
		.duration(1000)
		.perTick((builder) => {
			builder.inputFluids(
				Fluid.of('createdieselgenerators:crude_oil', 5)
			);
			builder.inputFE(2048);
		})
		.outputItems('thermal:coal_coke');

	//advanced kaolinite
	e.recipes.kubejs
		.industrial_furnace()
		.id('kubejs:advanced_kaolinite')
		.duration(100)
		.inputItems([['kubejs:kaolinite', 'tfc:kaolin_clay']])
		.perTick((builder) => {
			builder.inputFluids(Fluid.of('water', 10));
			builder.inputFE(512 / 4);
		})
		.outputItems('tfc:powder/kaolinite');

	e.shaped('kubejs:atmospheric_condenser', ['ABA', 'CDC', 'EEE'], {
		A: 'afc:rubber_bar',
		B: 'firmalife:reinforced_glass',
		C: 'create:mechanical_pump',
		D: 'thermal:machine_frame',
		E: 'kubejs:metal/sheet/titanium',
	});
});
