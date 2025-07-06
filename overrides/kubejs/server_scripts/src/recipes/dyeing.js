// priority: 50

ServerEvents.recipes((event) => {
	ALL_COLORS.forEach((color) => {
		//seats
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`create:${color}_seat`)
        .inputItem('#create:seats')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_seat_' + color)


        		//postbox 
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`create:${color}_postbox`)
        .inputItem('#create:postboxes')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_postbox_' + color)


        		//table cloth
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`create:${color}_table_cloth`)
        .inputItem('#create:table_cloths')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_table_cloth_' + color)

		//stools
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`refurbished_furniture:${color}_stool`)
        .inputItem('#refurbished_furniture:stools')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_stool_' + color)


		//sofa
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`refurbished_furniture:${color}_sofa`)
        .inputItem('#refurbished_furniture:sofas')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_sofa_' + color)

	
		//toolboxes

		//toolbox recipes are datagenned, oof.

		//valve handles
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`create:${color}_valve_handle`)
        .inputItem('#create:valve_handles')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_valve_' + color)

		//flags
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`supplementaries:flag_${color}`)
        .inputItem('#supplementaries:flags')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_flag_' + color)

		//presents
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`supplementaries:present_${color}`)
        .inputItem('#supplementaries:presents')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_present_' + color)

        //awning
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`supplementaries:awning_${color}`)
        .inputItem('#supplementaries:awnings')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_awning_' + color)

        //buntings
        //they're a little special...
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(Item.of('supplementaries:bunting', 1, {Color: color}))
        .inputItem('supplementaries:bunting')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_bunting_' + color)


        //chalk
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`chalk:${color}_chalk`)
        .inputItem('#chalk:chalks')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_chalk_' + color)

        //locometal
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`railways:${color}_slashed_locometal`)
        .inputItem('#railways:locometal')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_locometal_' + color)

        //boiler
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`railways:${color}_locometal_boiler`)
        .inputItem('#railways:palettes/dye_groups/boiler')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_locometal_boiler_' + color)

        //brass wrapped boiler
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`railways:${color}_brass_wrapped_locometal_boiler`)
        .inputItem('#railways:palettes/dye_groups/brass_wrapped_boiler')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_locometal_brass_boiler_' + color)

        //iron wrapped boiler
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`railways:${color}_iron_wrapped_locometal_boiler`)
        .inputItem('#railways:palettes/dye_groups/iron_wrapped_boiler')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_locometal_iron_boiler_' + color)

        //copper wrapped boiler
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`railways:${color}_copper_wrapped_locometal_boiler`)
        .inputItem('#railways:palettes/dye_groups/copper_wrapped_boiler')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_locometal_copper_boiler_' + color)

        //brass wrapped slashed
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`railways:${color}_brass_wrapped_locometal`)
        .inputItem('#railways:palettes/dye_groups/brass_wrapped_slashed')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_locometal_brass_' + color)

        //iron wrapped slashed
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`railways:${color}_iron_wrapped_locometal`)
        .inputItem('#railways:palettes/dye_groups/iron_wrapped_slashed')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_locometal_iron_' + color)

        //copper wrapped slashed
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`railways:${color}_copper_wrapped_locometal`)
        .inputItem('#railways:palettes/dye_groups/copper_wrapped_slashed')
        .inputFluid(Fluid.of(`tfc:${color}_dye`, 25)).id('kubejs:dyeing_locometal_copper_' + color)
    });

    let bleaching = {
        bunting: ["supplementaries:bunting", Item.of('supplementaries:bunting', 1, {Color: "white"})],
        present: ["supplementaries:present", '#supplementaries:presents'],
        valve: ["create:copper_valve_handle", '#create:valve_handles'],
        seat: ["create:white_seat", '#create:seats'],
        sofa: ["refurbished_furniture:white_sofa", '#refurbished_furniture:sofas'],
        stool: ["refurbished_furniture:white_stool", '#refurbished_furniture:stools'],
        toolbox: ["create:brown_toolbox", '#create:toolboxes'],
        flag: ["supplementaries:flag_white", '#supplementaries:flags'],
        awning: ["supplementaries:awning", '#supplementaries:awnings'],
        chalk: ["chalk:white_chalk", '#chalk:chalks'],
        locometal: ["railways:slashed_locometal", '#railways:locometal'],
        locometal_boiler: ["railways:white_locometal_boiler", '#railways:palettes/dye_groups/boiler'],
        locometal_brass_boiler: ["railways:brass_wrapped_locometal_boiler", '#railways:palettes/dye_groups/brass_wrapped_boiler'],
        locometal_iron_boiler: ["railways:iron_wrapped_locometal_boiler", '#railways:palettes/dye_groups/iron_wrapped_boiler'],
        locometal_copper_boiler: ["railways:copper_wrapped_locometal_boiler", '#railways:palettes/dye_groups/copper_wrapped_boiler'],
        locometal_brass: ["railways:brass_wrapped_locometal", '#railways:palettes/dye_groups/brass_wrapped_slashed'],
        locometal_iron: ["railways:iron_wrapped_locometal", '#railways:palettes/dye_groups/iron_wrapped_slashed'],
        locometal_copper: ["railways:copper_wrapped_locometal", '#railways:palettes/dye_groups/copper_wrapped_slashed'],
        table_cloth: ["create:white_table_cloth", '#create:table_cloths'],
        postbox: ["create:white_postbox", '#create:postboxes'],
    }


    for (const [id, data] of Object.entries(bleaching)) {
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(data[0])
        .inputItem(data[1])
        .inputFluid(Fluid.of(`tfc:lye`, 25)).id('kubejs:bleaching_'+id)
    }
});
