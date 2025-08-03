// priority: 90

ServerEvents.recipes((e) => {
	//Iron
	e.remove({ type: 'tfc:bloomery' });
	
	//Steel
	e.remove({ output: 'tfc:blast_furnace' });
	e.remove({ type: 'tfc:blast_furnace'});
	
	//Black Steel
	e.remove({ type: 'tfc:alloying', output: 'tfc:metal/weak_steel' });
	e.remove({ type: "create:sequenced_assembly", output: 'tfc:metal/ingot/black_steel' });
	e.remove({ type: "tfc:anvil", output: 'tfc:metal/ingot/black_steel' });
	e.remove({ output: 'tfc:metal/ingot/black_steel' });
	

	//aluminium
	e.remove({ output: 'kubejs:molten_aluminum' });
	
	//Color Steel
	e.remove({ type: 'tfc:alloying', output: 'tfc:metal/weak_blue_steel' });
	e.remove({ type: 'tfc:alloying', output: 'tfc:metal/weak_red_steel' });
	e.remove({ type: "create:sequenced_assembly", output: 'tfc:metal/ingot/red_steel' });
	e.remove({ type: "tfc:anvil", output: 'tfc:metal/ingot/red_steel' });
	e.remove({ output: 'tfc:metal/ingot/red_steel' });
	
	e.remove({ type: "create:sequenced_assembly", output: 'tfc:metal/ingot/blue_steel' });
	e.remove({ type: "tfc:anvil", output: 'tfc:metal/ingot/blue_steel' });
	e.remove({ output: 'tfc:metal/ingot/blue_steel' });
	
	//Manga-alloy (not working?)
	e.remove({ type: 'tfc:alloying', output: 'kubejs:molten_mangalloy' });
	e.remove({ output: 'kubejs:molten_mangalloy' });
	e.remove({ input: '#kubejs:manganite_chunk' });
	
	//Titanium Tungston
	//e.remove({ output: 'kubejs:titanium_powder' });
	//e.remove({ output: 'kubejs:ilmenite_powder' });
	
	//e.remove({ output: 'kubejs:wolframite_powder' });
	//e.remove({ type: 'kubejs:industrial_furnace', output: 'kubejs:unrefined_tungsten_powder' });
});
