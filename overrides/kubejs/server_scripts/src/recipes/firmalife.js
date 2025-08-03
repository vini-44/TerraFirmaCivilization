// priority: 50

ServerEvents.recipes((e) => {

    REMOVE_FIRMALIFE.forEach((item) => {
        e.remove({output: item})
        e.remove({input: item})
    })

    e.replaceInput({id: 'firmalife:crafting/climate_station'}, 'redstone', 'tfc:metal/sheet/wrought_iron')

    e.remove({ input: 'lithicaddon:stainless_steel_lid', type: 'tfc:heating' });
    e.recipes.tfc
        .heating('lithicaddon:stainless_steel_lid', 1540)
        .resultFluid(Fluid.of(`firmalife:metal/stainless_steel`, 4));
})