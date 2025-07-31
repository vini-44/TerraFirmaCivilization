// priority: 50

ServerEvents.recipes((e) => {

    REMOVE_FIRMALIFE.forEach((item) => {
        e.remove({output: item})
        e.remove({input: item})
    })

    e.replaceInput({id: 'firmalife:crafting/climate_station'}, 'redstone', 'tfc:metal/sheet/wrought_iron')
})