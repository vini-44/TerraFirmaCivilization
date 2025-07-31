// priority: 50

ServerEvents.recipes((e) => {

	e.remove({ mod: 'epic_knights_ores_and_alloys' });

	// remove nugget to ingot recipes
	// you shouldn't be getting these ingots anyways
	e.remove({ output: 'magistuarmory:steel_ingot' });
	e.remove({ output: 'iron_ingot' });
	// change the tier of the iron nugget
	e.remove({ output: 'iron_nugget', type: 'tfc:anvil' });
	e.recipes.tfc.anvil('iron_nugget', 'tfc:metal/ingot/wrought_iron', [
		'hit_third_last',
		'hit_second_last',
		'hit_last'
	])
	.tier(3);
		
	e.remove({ input: '#minecraft:trapdoors', type: 'farmersdelight:cutting' });
	e.remove({ input: '#minecraft:doors', type: 'farmersdelight:cutting' });
	e.remove({ input: '#minecraft:signs', type: 'farmersdelight:cutting' });
	
	e.remove({ input: 'minecraft:leather_horse_armor', type: 'farmersdelight:cutting' });
	
	e.remove({ output: '#tfc:shields' });
	e.remove({ output: 'minecraft:shield' });
	
	e.remove({ output: 'lithicaddon:food/fish_fillet' });
	e.remove({ output: 'lithicaddon:food/cooked_fish_fillet' });
	
	e.remove({ output: 'butchersdelight:rack' });
	e.remove({ output: 'butchersdelight:roaster' });
	
	e.remove({ output: 'farmersdelight:rope' });
	
	
	e.shapeless(
	  Item.of('minecraft:chain', 1),
	  [
		'1x #kubejs:chains'
	  ]
	)
	
	e.shapeless(
	  Item.of('tfc_loot:obsidian_scrap', 1),
	  [
		'1x bsa:obsidian'
	  ]
	)
	e.shapeless(
	  Item.of('bsa:obsidian', 1),
	  [
		'1x tfc_loot:obsidian_scrap'
	  ]
	)
	
	e.shapeless(
	  Item.of('tfcbetterbf:insulation', 1),
	  [
		'2x tfc:metal/sheet/steel',
		'1x tfc:powder/flux'
	  ]
	)

	
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
