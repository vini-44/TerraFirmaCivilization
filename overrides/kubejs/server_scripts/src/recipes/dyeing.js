ServerEvents.recipes((event) => {
	ALL_COLORS.forEach((colour) => {
		//seats
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`create:${colour}_seat`)
        .inputItem('#create:seats')
        .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25)).id('kubejs:dyeing_seat_' + colour)

		//stools
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`refurbished_furniture:${colour}_stool`)
        .inputItem('#refurbished_furniture:stools')
        .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25)).id('kubejs:dyeing_stool_' + colour)


		//sofa
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`refurbished_furniture:${colour}_sofa`)
        .inputItem('#refurbished_furniture:sofas')
        .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25)).id('kubejs:dyeing_sofa_' + colour)

	
		//toolboxes

		//toolbox recipes are datagenned, oof.

		//valve handles
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`create:${colour}_valve_handle`)
        .inputItem('#create:valve_handles')
        .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25)).id('kubejs:dyeing_valve_' + colour)

		//flags
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`supplementaries:flag_${colour}`)
        .inputItem('#supplementaries:flags')
        .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25)).id('kubejs:dyeing_flag_' + colour)

		//presents
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`supplementaries:present_${colour}`)
        .inputItem('#supplementaries:presents')
        .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25)).id('kubejs:dyeing_present_' + colour)

        //awning
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`supplementaries:awning_${colour}`)
        .inputItem('#supplementaries:awnings')
        .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25)).id('kubejs:dyeing_awning_' + colour)

        //buntings
        //they're a little special...
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(Item.of('supplementaries:bunting', 1, {Color: colour}))
        .inputItem('supplementaries:bunting')
        .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25)).id('kubejs:dyeing_bunting_' + colour)


        //chalk
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`chalk:${colour}_chalk`)
        .inputItem('#chalk:chalks')
        .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25)).id('kubejs:dyeing_chalk_' + colour)

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
        chalk: ["chalk:white_chalk", '#chalk:chalks']
    }


    for (const [id, data] of Object.entries(bleaching)) {
        event.recipes.tfc.barrel_sealed(1000)
        .outputItem(data[0])
        .inputItem(data[1])
        .inputFluid(Fluid.of(`tfc:lye`, 25)).id('kubejs:bleaching_'+id)
    }
});
