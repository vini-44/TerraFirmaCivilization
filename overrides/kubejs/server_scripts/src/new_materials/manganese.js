ServerEvents.recipes((e) => {
    	e.recipes.tfc.alloy('kubejs:mangalloy', [
		TFC.alloyPart('tfc:steel', 0.8, 0.9),
		TFC.alloyPart('kubejs:manganese', 0.2, 0.1),
	]);


    	//Manganese processing
	e.recipes.tfc.blast_furnace(
		Fluid.of(`kubejs:molten_manganese`, 1),
		`tfc:powder/flux`,
		Fluid.of(`kubejs:molten_raw_manganese`, 1)
	);
	e.recipes.tfc
		.heating(`#kubejs:manganese_ore`, 1328)
		.resultFluid(Fluid.of(`kubejs:molten_raw_manganese`, 100));

})