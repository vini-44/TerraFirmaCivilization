// priority: 50

ServerEvents.recipes(e => {
    e.remove({mod: 'grapplemod'})


    e.recipes.tfc.advanced_shapeless_crafting(TFC.itemStackProvider.of('grapplemod:grapplinghook').copyForgingBonus(), ['8x supplementaries:rope', 'tfc:metal/pickaxe_head/wrought_iron'], 'tfc:metal/pickaxe_head/wrought_iron')
})