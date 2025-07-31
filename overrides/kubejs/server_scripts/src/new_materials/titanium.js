ServerEvents.recipes(e => {
    e.recipes.create.milling('4x kubejs:ilmenite_powder', 'kubejs:ilmenite_chunk')
    e.recipes.create.crushing(['4x kubejs:ilmenite_powder', Item.of('kubejs:ilmenite_powder', 2).withChance(0.25)], 'kubejs:ilmenite_chunk')

    e.shaped('kubejs:ilmenite_powder_block', ['WWW', 'WWW', 'WWW'], {W: 'kubejs:ilmenite_powder'})
    e.shapeless('9x kubejs:ilmenite_powder', ['kubejs:ilmenite_powder_block'])

    e.shaped('kubejs:titanium_powder_block', ['WWW', 'WWW', 'WWW'], {W: 'kubejs:titanium_powder'})
    e.shapeless('9x kubejs:titanium_powder', ['kubejs:titanium_powder_block'])

    e.recipes.tfc.heating('kubejs:titanium_powder', 1485.0).resultFluid(Fluid.of('kubejs:molten_titanium', 5))


});