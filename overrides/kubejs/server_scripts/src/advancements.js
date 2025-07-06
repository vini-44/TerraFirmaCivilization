//from: https://discord.com/channels/303440391124942858/1073808956243329120
/**
 * Removes advancement at given file-path and adds it to a hidden parent advancement
 * @param {String | Array} advancement - Advancement id (ie. lootr:100loot)
 */
function removeAdvancement(advancement) {
    let arr = []
    if (typeof (advancement) == 'string') arr = [advancement]
    else if (typeof (advancement) == 'object') arr = advancement
    else console.error(`Invalid type for removeAdvancement(${advancement})`)

    ServerEvents.highPriorityData(e => {
        e.addJson('yourmodpack:advancements/removed', {
            display: { hidden: true },
        })
        arr.forEach(advancement => {
            let advSplit = advancement.split(':')
            let advModId = advSplit[0]
            let advName = advSplit[1]

            e.addJson(`${advModId}:advancements/${advName}.json`, {
                parent: 'yourmodpack:advancements/removed',
                display: { hidden: true },
                criteria: {
                    impossible: {
                        trigger: 'minecraft:impossible'
                    }
                },
                requirements: [['impossible']]
            })
        })
    })
}

removeAdvancement([
    'lootr:1barrel',
    'lootr:1cart',
    'lootr:1chest',
    'lootr:1shulker',
    'lootr:10loot',
    'lootr:25loot',
    'lootr:50loot',
    'lootr:100loot',
    'lootr:root',
    'lootr:social',
    'create:arm_blaze_burner',
    'tfc:full_powderkeg',
    'tfc:world/powderkeg',
    'create_connected:control_chip', 
    'create:copper',
    'create:brass',
    'create:rose_quartz',
    'create:train_portal',
    'create:sturdy_sheet',
    'create:diving_suit_lava',
    'create:haunted_bell'
])