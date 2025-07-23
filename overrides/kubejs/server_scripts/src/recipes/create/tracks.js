ServerEvents.recipes((e) => {

    e.recipes.create
        .sequenced_assembly(['4x create:track'], 'kubejs:railway_sleeper', [
            e.recipes.create.deploying('kubejs:railway_sleeper', [
                'kubejs:railway_sleeper',
                'tfc:metal/rod/cast_iron',
            ]),
            e.recipes.create.deploying('kubejs:railway_sleeper', [
                'kubejs:railway_sleeper',
                'tfc:metal/rod/cast_iron',
            ]),
            e.recipes.create.pressing('kubejs:railway_sleeper', [
                'kubejs:railway_sleeper',
            ]),
        ])
        .transitionalItem('create:incomplete_track')
        .loops(3);

    e.recipes.create
        .sequenced_assembly(['8x create:track'], 'kubejs:railway_sleeper', [
            e.recipes.create.deploying('kubejs:railway_sleeper', [
                'kubejs:railway_sleeper',
                'tfc:metal/rod/wrought_iron',
            ]),
            e.recipes.create.deploying('kubejs:railway_sleeper', [
                'kubejs:railway_sleeper',
                'tfc:metal/rod/wrought_iron',
            ]),
            e.recipes.create.pressing('kubejs:railway_sleeper', [
                'kubejs:railway_sleeper',
            ]),
        ])
        .transitionalItem('create:incomplete_track')
        .loops(3);

    e.recipes.create
        .sequenced_assembly(['16x create:track'], 'kubejs:railway_sleeper', [
            e.recipes.create.deploying('kubejs:railway_sleeper', [
                'kubejs:railway_sleeper',
                'tfc:metal/rod/steel',
            ]),
            e.recipes.create.deploying('kubejs:railway_sleeper', [
                'kubejs:railway_sleeper',
                'tfc:metal/rod/steel',
            ]),
            e.recipes.create.pressing('kubejs:railway_sleeper', [
                'kubejs:railway_sleeper',
            ]),
        ])
        .transitionalItem('create:incomplete_track')
        .loops(3);

    e.shaped('4x kubejs:railway_sleeper', ['SBS'], {
        S: 'create:andesite_alloy',
        B: '#tfc:lumber'
    });

    e.shaped('1x kubejs:railway_sleeper', ['BAB'], {
        A: '#minecraft:planks',
        B: '#tfc:lumber'
    });
});
