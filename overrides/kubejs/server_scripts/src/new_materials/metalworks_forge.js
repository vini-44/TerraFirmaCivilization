ServerEvents.recipes((e) => {

  
	e.recipes.thermal.crystallizer('tfc:metal/ingot/steel', [
		Fluid.of('tfc:metal/cast_iron', 100),
		'2x tfc:powder/graphite',
		'tfc:powder/flux',
	]).energy(20000);
	e.recipes.thermal.crystallizer('tfc:metal/ingot/wrought_iron', [
		Fluid.of('tfc:metal/cast_iron', 100),
		'2x tfc:powder/coke',
		'tfc:powder/sulfur',
	]).energy(20000);

	e.recipes.thermal.crystallizer(
		[
			'3x kubejs:metal/ingot/aluminum'
        ],
		[
			Fluid.of('kubejs:molten_alumina', 275),
			'1x tfc:ore/cryolite',
			'3x tfc:powder/coke',
		]
	);

    e.recipes.thermal.crucible([Fluid.of('water')], [Item.of('#tfc:tuyeres')]).damageIngredient('#tfc:tuyeres');

	//advanced ore processing
	const processingDefs = {
		'tfc:metal/ingot/copper': [ //errors
            ['14x tfc:powder/malachite', '3x tfc:powder/coke', Fluid.of('kubejs:liquid_nitrogen', 500)],
            ['16x tfc:powder/tetrahedrite', Fluid.of('tfc:lye', 500)],
			['14x tfc:powder/native_copper', 'tfc:powder/sulfur', Fluid.of('water', 1000)],
		],
		'tfc:metal/ingot/gold': [ //errors
			['13x tfc:powder/native_gold', '3x minecraft:redstone', Fluid.of('kubejs:liquid_nitrogen', 500)], 
		],
		'tfc:metal/ingot/silver': [
			['15x tfc:powder/native_silver', Fluid.of('kubejs:liquid_oxygen', 1000),],
		],
		'tfc:metal/ingot/cast_iron': [
			['16x tfc:powder/limonite', '5x tfc:powder/coke', Fluid.of('tfc:limewater', 750),],
			['14x tfc:powder/hematite', '4x tfc:powder/coke', Fluid.of('tfc:limewater', 500),],
			['12x tfc:powder/magnetite', '3x tfc:powder/coke', Fluid.of('tfc:limewater', 250),],
		],
		'tfc:metal/ingot/bismuth': [
			['15x tfc:powder/bismuthinite', '2x tfc:powder/sulfur', Fluid.of('water', 1000)],
		],
		'tfc:metal/ingot/nickel': [
			['14x tfc:powder/garnierite', '2x tfc:powder/sulfur', Fluid.of('water', 1000)],
		],
		'tfc:metal/ingot/zinc': [
			['14x tfc:powder/sphalerite', '1x tfc:powder/coke', Fluid.of('kubejs:liquid_oxygen', 250)],
		],
		'firmalife:metal/ingot/chromium': [
			['15x kubejs:chromite_powder', 'tfc:powder/sulfur', Fluid.of('water', 1000)],
		],
	};

    for (let [result, recipes] of Object.entries(processingDefs)) {
        for (let ingredients of recipes) {
            console.info(ingredients + ' -> ' + result);
            e.recipes.thermal.crystallizer([result], ingredients);
        }
    }
});