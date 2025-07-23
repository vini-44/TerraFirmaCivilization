// Changes the handcuff recipe to use steel instead of wrought iron.

ServerEvents.recipes((event) => {
    // This also removes the automatic shaped craft by create.
    event.remove({ output: 'cuffed:handcuffs' })
    event.remove({ output: 'cuffed:handcuffs_key' })

    event.shaped(
        Item.of('cuffed:handcuffs'),
        [
            '   ',
            'ABA',
            '   '
        ],
        {
            A: 'tfc:metal/ingot/steel',
            B: 'tfc:metal/chain/steel',
        }
    )

    event.shaped(
        Item.of('cuffed:handcuffs_key'),
        [
            ' AA',
            'A  ',
            '   '
        ],
        {
            A: 'tfc:metal/ingot/steel',
        }
    )
});     