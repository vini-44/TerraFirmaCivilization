//this file exists to cleanup some unused recipes.

let remove = [
    'minecraft:heavy_weighted_pressure_plate',
    'minecraft:observer',
    'minecraft:repeater',
    'minecraft:slime_block',
    'minecraft:item_frame',
    'minecraft:armor_stand',
    'minecraft:powered_rail',
    'mineraft:detector_rail',
    'minecraft:activator_rail',
    'minecraft:fire_charge',
    'minecraft:crossbow',
    //'minecraft:charcoal', will just remove all furnace, blasting and smoker recipes instead.
    'minecraft:leather',
]

ServerEvents.recipes((e) => {
    remove.forEach((recipe) => {
        e.remove({ id: recipe })
    })

    e.remove({type: 'minecraft:blasting'})
    e.remove({type: 'minecraft:smelting'})
    e.remove({type: 'minecraft:smoking'})

})