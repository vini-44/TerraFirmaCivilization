ServerEvents.recipes((e) => {
    // Remove old recipes
    e.remove({ mod: 'immersive_aircraft' });
    e.remove({ mod: 'man_of_many_planes' });

    e.recipes.create.mechanical_crafting(
        Item.of('man_of_many_planes:scarlet_biplane', '{display:{color:10329495}}'),
        [
            '  BA    ',
            '  AB    ',
            ' CDD  AB',
            'HEFGCCCA',
            ' CDD  AB',
            '  AB    ',
            '  BA    ',
        ],
        {
            A: 'tfc:metal/rod/steel',
            B: 'firmalife:treated_lumber',
            C: 'kubejs:metal/sheet/aluminum',
            D: 'create:fluid_pipe',
            E: '#create:seats',
            F: 'createdieselgenerators:diesel_engine',
            G: 'createdieselgenerators:canister',
            H: 'create:propeller',
        }
    );

    e.recipes.create.mechanical_crafting(
        Item.of('man_of_many_planes:economy_plane', '{display:{color:10329495}}'),
        [
            ' AB    ',
            ' BCI   ',
            'DABJ  B',
            'DFGHCCA',
            'DABJ  B',
            ' BCI   ',
            ' AB    ',
        ],
        {
            A: 'firmalife:metal/rod/stainless_steel',
            B: 'create:white_sail',
            C: '#tfc:lumber',
            D: 'kubejs:metal/sheet/aluminum',
            F: '#create:seats',
            G: 'createdieselgenerators:diesel_engine',
            H: 'createdieselgenerators:canister',
            I: 'create:propeller',
            J: 'create:belt_connector',
        }
    );

    e.shaped(
        'immersive_aircraft:hull_reinforcement',
        ['ABA', 'BAB', 'ABA'],
        { A: '#tfc:lumber', B: 'tfc:metal/rod/zinc' }
    );

    e.shaped('immersive_aircraft:telescope', ['ABC', ' D '], {
        A: 'tfc:lens',
        B: 'tfc:metal/double_sheet/copper',
        C: 'tfc:brass_mechanisms',
        D: 'create:andesite_alloy',
    });
    e.shaped('immersive_aircraft:bomb_bay', ['ABA', 'CDC'], {
        A: 'create:andesite_alloy',
        B: 'tfc:brass_mechanisms',
        C: 'tfc:metal/rod/steel',
        D: 'minecraft:dispenser',
    });
    e.shaped('immersive_aircraft:heavy_crossbow', ['ABA', 'CDC', ' A '], {
        A: 'tfc:wood/lumber/acacia',
        B: 'tfc:metal/rod/steel',
        C: '#kubejs:chains',
        D: 'tfc:brass_mechanisms',
    });
    e.shaped('immersive_aircraft:rotary_cannon', ['ABB', ' C ', '  D'], {
        A: 'create:copper_casing',
        B: 'createbigcannons:steel_autocannon_barrel',
        C: 'tfc:brass_mechanisms',
        D: 'create:andesite_alloy',
    });

});
