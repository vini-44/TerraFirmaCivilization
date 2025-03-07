ServerEvents.recipes((e) => {
    e.remove({ mod: 'railways' });

    e.shaped('railways:track_switch_andesite', ['L', 'B', 'C'], {
        L: 'lever',
        B: 'create:andesite_casing',
        C: 'create:cogwheel',
    });

    e.shaped('railways:track_switch_brass', ['L', 'B', 'C'], {
        L: 'lever',
        B: 'create:brass_casing',
        C: 'tfc:brass_mechanisms',
    });


    //huh, AFC doesn't have rails...
    WOOD_TYPES.forEach((wood) => {
        e.recipes.create
            .sequenced_assembly(
                [Item.of(`railways:track_tfc_${wood}`, 8)],
                'tfc:wood/planks/' + wood + '_slab',
                [
                    e.recipes.createDeploying(
                        `railways:track_incomplete_tfc_${wood}`,
                        [
                            `railways:track_incomplete_tfc_${wood}`,
                            'tfc:metal/rod/steel',
                        ]
                    ),
                    e.recipes.createDeploying(
                        `railways:track_incomplete_tfc_${wood}`,
                        [
                            `railways:track_incomplete_tfc_${wood}`,
                            'firmaciv:copper_bolt',
                        ]
                    ),
                ]
            )
            .transitionalItem(`railways:track_incomplete_tfc_${wood}`)
            .loops(2);

        e.recipes.create
            .sequenced_assembly(
                [Item.of(`railways:track_tfc_${wood}_wide`, 8)],
                'tfc:wood/planks/' + wood,
                [
                    e.recipes.createDeploying(
                        `railways:track_incomplete_tfc_${wood}_wide`,
                        [
                            `railways:track_incomplete_tfc_${wood}_wide`,
                            'tfc:metal/rod/steel',
                        ]
                    ),
                    e.recipes.createDeploying(
                        `railways:track_incomplete_tfc_${wood}_wide`,
                        [
                            `railways:track_incomplete_tfc_${wood}_wide`,
                            'firmaciv:copper_bolt',
                        ]
                    ),
                ]
            )
            .transitionalItem(`railways:track_incomplete_tfc_${wood}_wide`)
            .loops(2);

        e.recipes.create
            .sequenced_assembly(
                [Item.of(`railways:track_tfc_${wood}_narrow`, 8)],
                'tfc:wood/lumber/' + wood,
                [
                    e.recipes.createDeploying(
                        `railways:track_incomplete_tfc_${wood}_narrow`,
                        [
                            `railways:track_incomplete_tfc_${wood}_narrow`,
                            'tfc:metal/rod/steel',
                        ]
                    ),
                    e.recipes.createDeploying(
                        `railways:track_incomplete_tfc_${wood}_narrow`,
                        [
                            `railways:track_incomplete_tfc_${wood}_narrow`,
                            'firmaciv:copper_bolt',
                        ]
                    ),
                ]
            )
            .transitionalItem(`railways:track_incomplete_tfc_${wood}_narrow`)
            .loops(2);
    });

    e.shapeless('4x railways:fuel_tank', [
        '4x create:fluid_tank',
        'tfc:metal/sheet/black_steel',
    ]);

    e.shapeless('2x railways:portable_fuel_interface', [
        '2x create:portable_fluid_interface',
        'tfc:metal/sheet/black_steel',
    ]);

    e.shaped('railways:handcar', ['SAS', 'LCL', 'ABA'], {
        S: '#forge:rods/wooden',
        A: 'create:andesite_alloy',
        L: '#tfc:lumber',
        C: 'create:contraption_controls',
        B: 'create:cogwheel',
    });

    e.shaped('railways:buffer', ['LLL', 'GGG', 'R R'], {
        L: '#tfc:lumber',
        G: 'create:metal_girder',
        R: 'tfc:metal/rod/cast_iron',
    });

    e.shapeless('railways:track_coupler', [
        'create:railway_casing',
        'redstone',
        'tfc:metal/sheet/wrought_iron',
    ]);

    e.shaped('4x railways:semaphore', ['LCE', ' A '], {
        L: '#tfc:lumber',
        C: 'create:andesite_casing',
        E: 'create:electron_tube',
        A: 'create:andesite_alloy',
    });

    e.shapeless('2x create:schedule', ['tfc:metal/sheet/cast_iron', 'paper']);
});

ServerEvents.lowPriorityData((event) => {
    event.addJson('kubejs:railways_liquid_fuel/diesel', {
        fluids: [
            'createdieselgenerators:biodiesel',
            'createdieselgenerators:diesel',
            'createdieselgenerators:gasoline',
            'createdieselgenerators:ethanol',
        ],
        fuel_ticks: 1200,
    });

    event.addJson('kubejs:railways_liquid_fuel/lava', {
        fluids: ['minecraft:lava'],
        invalid: true,
    });
});
