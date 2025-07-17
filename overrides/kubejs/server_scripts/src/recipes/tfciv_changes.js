// priority: 50

ServerEvents.recipes((e) => {

	e.remove({ input: '#minecraft:trapdoors', type: 'farmersdelight:cutting' });
	e.remove({ input: '#minecraft:doors', type: 'farmersdelight:cutting' });
	e.remove({ input: '#minecraft:signs', type: 'farmersdelight:cutting' });
	
	e.remove({ output: '#tfc:shields' });
	e.remove({ output: 'minecraft:shield' });
	
	e.remove({ output: 'lithicaddon:food/fish_fillet' });
	e.remove({ output: 'lithicaddon:food/cooked_fish_fillet' });
	
	e.remove({ output: 'butchersdelight:rack' });
	e.remove({ output: 'butchersdelight:roaster' });
	
	e.remove({ output: 'farmersdelight:rope' });
	
	e.shapeless(
	  Item.of('tfcbetterbf:insulation', 1),
	  [
		'2x tfc:metal/sheet/steel',
		'1x tfc:powder/flux'
	  ]
	)
	e.shaped(
	  Item.of('tfc:bloomery', 1), // arg 1: output
	  ['AAA','A A','AAA'],
	  {
		A: 'tfc:metal/sheet/wrought_iron'
	  }
	)
	let anvil_metals = {
		red_steel: 1540,
		blue_steel: 1540,
		black_steel: 1485,
		steel: 1540,
		wrought_iron: 1535,
		copper: 1080,
		bronze: 950,
		black_bronze: 1070,
		bismuth_bronze: 985,
	};
	for (let [metal, temp] of Object.entries(anvil_metals)) {
		e.remove({ output: `tfc:metal/anvil/${metal}` });
		e.remove({ id: `tfc:heating/metal/${metal}_anvil` });

		e.shaped(`tfc:metal/anvil/${metal}`, ['ABA', ` B `, `BBB`], {
			A: `tfc:metal/ingot/${metal}`,
			B: `tfc:metal/double_ingot/${metal}`,
		});

		e.recipes.tfc
			.heating(`tfc:metal/anvil/${metal}`, temp)
			.resultFluid(Fluid.of(`tfc:metal/${metal}`, 1200));
	}
	
	
	e.remove([
		{id: 'tfc:crafting/dough/barley_dough_8'},
		{id: 'tfc:crafting/dough/barley_dough_7'},
		{id: 'tfc:crafting/dough/barley_dough_6'},
		{id: 'tfc:crafting/dough/barley_dough_5'},
		{id: 'tfc:crafting/dough/barley_dough_4'},
		{id: 'tfc:crafting/dough/barley_dough_3'},
		{id: 'tfc:crafting/dough/barley_dough_2'},
		{id: 'tfc:crafting/dough/barley_dough_1'},
		{id: 'tfc:crafting/dough/maize_dough_8'},
		{id: 'tfc:crafting/dough/maize_dough_7'},
		{id: 'tfc:crafting/dough/maize_dough_6'},
		{id: 'tfc:crafting/dough/maize_dough_5'},
		{id: 'tfc:crafting/dough/maize_dough_4'},
		{id: 'tfc:crafting/dough/maize_dough_3'},
		{id: 'tfc:crafting/dough/maize_dough_2'},
		{id: 'tfc:crafting/dough/maize_dough_1'},
		{id: 'tfc:crafting/dough/oat_dough_8'},
		{id: 'tfc:crafting/dough/oat_dough_7'},
		{id: 'tfc:crafting/dough/oat_dough_6'},
		{id: 'tfc:crafting/dough/oat_dough_5'},
		{id: 'tfc:crafting/dough/oat_dough_4'},
		{id: 'tfc:crafting/dough/oat_dough_3'},
		{id: 'tfc:crafting/dough/oat_dough_2'},
		{id: 'tfc:crafting/dough/oat_dough_1'},
		{id: 'tfc:crafting/dough/rye_dough_8'},
		{id: 'tfc:crafting/dough/rye_dough_7'},
		{id: 'tfc:crafting/dough/rye_dough_6'},
		{id: 'tfc:crafting/dough/rye_dough_5'},
		{id: 'tfc:crafting/dough/rye_dough_4'},
		{id: 'tfc:crafting/dough/rye_dough_3'},
		{id: 'tfc:crafting/dough/rye_dough_2'},
		{id: 'tfc:crafting/dough/rye_dough_1'},
		{id: 'tfc:crafting/dough/rice_dough_8'},
		{id: 'tfc:crafting/dough/rice_dough_7'},
		{id: 'tfc:crafting/dough/rice_dough_6'},
		{id: 'tfc:crafting/dough/rice_dough_5'},
		{id: 'tfc:crafting/dough/rice_dough_4'},
		{id: 'tfc:crafting/dough/rice_dough_3'},
		{id: 'tfc:crafting/dough/rice_dough_2'},
		{id: 'tfc:crafting/dough/rice_dough_1'},
		{id: 'tfc:crafting/dough/wheat_dough_8'},
		{id: 'tfc:crafting/dough/wheat_dough_7'},
		{id: 'tfc:crafting/dough/wheat_dough_6'},
		{id: 'tfc:crafting/dough/wheat_dough_5'},
		{id: 'tfc:crafting/dough/wheat_dough_4'},
		{id: 'tfc:crafting/dough/wheat_dough_3'},
		{id: 'tfc:crafting/dough/wheat_dough_2'},
		{id: 'tfc:crafting/dough/wheat_dough_1'}
	])
});
