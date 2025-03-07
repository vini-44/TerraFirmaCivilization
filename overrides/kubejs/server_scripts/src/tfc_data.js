TFCEvents.data((event) => {
    //food
	event.foodItem('minecraft:golden_apple', (food) => {
		food.hunger(3);
		food.saturation(3);
		food.protein(5);
		food.fruit(5);
		food.grain(5);
		food.vegetables(5);
		food.dairy(5);
	});

    //size
    event.itemSize('minecraft:gunpowder', 'small', 'very_light');

    //damage resistances
	event.itemDamageResistance('scguns:adrien_helm', 25, 2, 2);
	event.itemDamageResistance('scguns:adrien_chestplate', 35, 2, 2);
    event.itemDamageResistance('scguns:adrien_leggings', 30, 2, 2);
    event.itemDamageResistance('scguns:adrien_boots', 20, 2, 2);

    event.itemDamageResistance('scguns:diamond_steel_helmet', 35*0.4, 15*0.4, null)
    event.itemDamageResistance('scguns:diamond_steel_chestplate', 30*0.6, 15*0.6, null)
    event.itemDamageResistance('scguns:diamond_steel_boots', 30*0.5, 15*0.5, null)

    //item heat
	for (const [metal, heat] of Object.entries(POWDER_HEAT_DEFS)) {
		event.itemHeat(`tfc:powder/${metal}`, heat, null, null);
		event.itemHeat(`kubejs:${metal}_powder_block`, heat, null, null);
	}
	event.itemHeat(`kubejs:chromite_powder`, 1.143, null, null);
	event.itemHeat(`kubejs:chromite_powder_block`, 1.143, null, null);
	event.itemHeat('kubejs:scrap', 2.0, 240, 320);
	event.itemHeat('kubejs:unfired_andesite_alloy', 0.5, null, null);
	event.itemHeat('create:andesite_alloy', 0.5, null, null);
	event.itemHeat('createbigcannons:recoil_spring', 1.429, 924, 1232);
	event.itemHeat('createbigcannons:steel_scrap', 0.171, 924, 1232);
    event.itemHeat('createbigcannons:nethersteel_ingot', 0.171, 924, 1232);
	event.itemHeat('createbigcannons:cast_iron_nugget', 1.143, 921, 1228);
	event.itemHeat('createbigcannons:bronze_scrap', 0.171, 570, 760);
    event.itemHeat('#kubejs:available_guns', 2.857, 921, 1228) 
    event.itemHeat('scguns:plasgun', 0.5, 921, 1228)

    event.itemHeat('kubejs:grasshopper', 0.5, 900, 1000);

    //fuel
    event.fuel('thermal:coal_coke', 1415, 2200, 1)

    //lamp fuel
    event.lampFuel('thermal:creosote', '#tfc:lamps', 8000)
    event.lampFuel('kubejs:kerosene', '#tfc:lamps', 16000)

    //891.00006 1188.0
    let aluminum_items = {
        'ingot': 2.857143,
        'double_ingot': 5.714286,
        'sheet': 5.714286,
        'double_sheet': 11.428572
    }

    let metals = [
        'aluminum',
        'mangalloy',
        'manganese',
    ]

    for (const [metal, heat] of Object.entries(aluminum_items)) {
        metals.forEach((metal) => {
            event.itemHeat(`kubejs:metal/${metal}/${metal}`, heat, 891.00006, 1188.0);

        })
    }

    event.metal('kubejs:molten_aluminum', 1485.0, 0.00857, 'kubejs:metal/ingot/aluminum', 'kubejs:metal/double_ingot/aluminum', 'kubejs:metal/sheet/aluminum', 5, 'kubejs:aluminum');
    event.metal('kubejs:molten_mangalloy', 1485.0, 0.00857, 'kubejs:metal/ingot/mangalloy', 'kubejs:metal/double_ingot/mangalloy', 'kubejs:metal/sheet/mangalloy', 5, 'kubejs:mangalloy');
    event.metal('kubejs:molten_manganese', 1485.0, 0.00857, 'kubejs:metal/ingot/manganese', 'kubejs:metal/double_ingot/manganese', 'kubejs:metal/sheet/manganese', 3, 'kubejs:manganese');

});
