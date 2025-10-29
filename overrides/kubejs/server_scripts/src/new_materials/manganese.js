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

	e.recipes.tfc.alloy('kubejs:carotine_steel', [
		TFC.alloyPart('kubejs:mangalloy', 0.6, 0.8),
		TFC.alloyPart('kubejs:titanium', 0.1, 0.2),
		TFC.alloyPart('tfc:sterling_silver', 0.1, 0.2),
	]);
});
