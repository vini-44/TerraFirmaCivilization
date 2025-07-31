// priority: 50

ServerEvents.recipes((event) => {
	//Sludge
	let ingredients = [];
	for (let i = 1; i < 6; i++) {
		ingredients.push('kubejs:kaolinite');
		event.recipes.tfc
			.pot(ingredients, Fluid.of('water', 1000), 1200, 600)
			.id('kubejs:kaolinite_sludge')
			.itemOutput(i + `x kubejs:kaolinite_sludge`).id('kubejs:kaolinite_sludge_' + i);
	}
    event.recipes.create.mixing('kubejs:kaolinite_sludge', [Fluid.of('water', 200), 'kubejs:kaolinite']).heated()

    //dried sluge
    event.recipes.firmalife.drying('kubejs:hardened_kaolinite_sludge', 'kubejs:kaolinite_sludge')

    event.recipes.create.milling('tfc:powder/kaolinite', 'kubejs:hardened_kaolinite_sludge').id('kubejs:kaolinite_powder_from_sludge')
});
