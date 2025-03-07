TFCEvents.registerFoodTrait(event => {
    event.registerTraitWithTooltip(0.25, 'kubejs:fried',)
})


BlockEvents.modification(e => {
    //e.modify(/tfc:rock.*/, block => {
    //    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
    //})
    //e.modify(/tfc:dirt.*/, block => {
    //    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
    //})
    //e.modify(/tfc:ore.*/, block => {
    //    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
    //})
    //e.modify(/tfc:wood\/log.*/, block => {
    //    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
    //})
    e.modify(/.*unbored.*/, block => {
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.25//0.75
    })

    e.modify(/.*concrete.*/, block => {
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 2
    })

    e.modify(/.*brick.*/, block => {
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 1.25
    })
})



StartupEvents.init(() => {
    Platform.mods.kubejs.name = 'Sulidae'
})


TFCEvents.registerItemStackModifier(event => {
    event.withInventory('kubejs:damage_saws_only', (input, output, inventory) => {
        console.info(input)
        console.info(output)
        console.info(inventory)
        inventory.forEach(item => {
            console.info(item)
        })
        
        return output
    })
})

TFCEvents.birthdays(event => {
    event.add('march', 24, 'Atobá')
    event.add('february', 2, 'Albatroz')

})

