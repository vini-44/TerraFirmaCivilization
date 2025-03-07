ServerEvents.recipes((e) => {
    e.remove({ mod: 'create_connected' });

    e.shapeless('create_connected:parallel_gearbox', [
        'create:gearbox',
        'tfc:brass_mechanisms',
    ]);
    e.shapeless('create_connected:vertical_parallel_gearbox', [
        'create:vertical_gearbox',
        'tfc:brass_mechanisms',
    ]);

    e.shapeless('create_connected:encased_chain_cogwheel', [
        'create:encased_chain_drive',
        'create:cogwheel',
    ]);

    e.shapeless('create_connected:freewheel_clutch', [
        'create:andesite_casing',
        'create:cogwheel',
        'create:shaft',
        'tfc:metal/rod/wrought_iron',
    ]);
    e.shapeless('create_connected:brake', [
        'create:andesite_casing',
        'redstone',
        'create:shaft',
        'obsidian',
    ]);

    e.shapeless('create_connected:overstress_clutch', [
        'create:andesite_casing',
        'create:electron_tube',
        'create:shaft',
        'tfc:metal/rod/wrought_iron',
    ]);

    e.shapeless('create_connected:centrifugal_clutch', [
        'create:andesite_casing',
        'create:shaft',
        'create:speedometer',
        'tfc:metal/rod/wrought_iron',
    ]);

    e.shaped('create_connected:six_way_gearbox', ['LS ', 'SCS', ' SL'], {
        L: 'create:large_cogwheel',
        S: 'create:cogwheel',
        C: 'create:andesite_casing',
    });

    e.shapeless('create_connected:vertical_six_way_gearbox', ['create_connected:six_way_gearbox',])
    e.shapeless('create_connected:six_way_gearbox', ['create_connected:vertical_six_way_gearbox'])

    e.shaped('create_connected:brass_gearbox', [' C ', 'CBC', ' C '], {
        C: 'create:cogwheel',
        B: 'create:brass_casing',
    });

    e.shapeless('create_connected:vertical_brass_gearbox', [
        'create_connected:brass_gearbox',
    ]);
    e.shapeless('create_connected:brass_gearbox', [
        'create_connected:vertical_brass_gearbox',
    ]);

    e.shapeless('create_connected:shear_pin', [
        '#tfc:chisels',
        'create:shaft',
    ]).damageIngredient('#tfc:chisels');

    //redstone

    e.shapeless('2x create_connected:linked_transmitter', [
        'redstone',
        'create:redstone_link',
    ]);

    e.shaped('create_connected:sequenced_pulse_generator', [' T ', 'EGE', 'SSS'], {
        T: 'redstone_torch',
        E: 'create:electron_tube',
        G: 'tfc:metal/sheet/gold',
        S: '#forge:smooth_stone',
    });

    e.shapeless('create_connected:item_silo', ['create:item_vault'])
    e.shapeless('create:item_vault', ['create_connected:item_silo'])

    e.shapeless('create_connected:fluid_vessel', ['create:fluid_tank'])
    e.shapeless('create:fluid_tank', ['create_connected:fluid_vessel'])
});