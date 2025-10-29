// priority: 50

ServerEvents.recipes((e) => {
    e.remove({ mod: 'quark' });

    e.recipes.tfc.anvil('8x quark:gold_bars', 'tfc:metal/sheet/gold', [
        'upset_last',
        'punch_second_last',
        'punch_third_last',
    ]);
    
    ADDED_ANVIL_RECIPES.push(['8x quark:gold_bars', 'tfc:metal/sheet/gold', 1]);

    e.recipes.tfc.anvil('16x quark:gold_bars', 'tfc:metal/double_sheet/gold', [
        'upset_last',
        'punch_second_last',
        'punch_third_last',
    ]);

    ADDED_ANVIL_RECIPES.push(['16x quark:gold_bars', 'tfc:metal/double_sheet/gold', 1]);

    e.recipes.tfc
        .anvil('8x quark:grate', 'tfc:metal/sheet/wrought_iron', [
            'upset_last',
            'punch_second_last',
            'punch_third_last',
        ])
        .tier(3);

    ADDED_ANVIL_RECIPES.push(['8x quark:grate', 'tfc:metal/sheet/wrought_iron', 3]);

    e.recipes.tfc
        .anvil('16x quark:grate', 'tfc:metal/double_sheet/wrought_iron', [
            'upset_last',
            'punch_second_last',
            'punch_third_last',
        ])
        .tier(3);

    ADDED_ANVIL_RECIPES.push(['16x quark:grate', 'tfc:metal/double_sheet/wrought_iron', 3]);

    e.shaped('quark:pickarang', ['SLC', '  L', '  S'], {
        L: '#tfc:lumber',
        S: 'tfc:metal/sheet/blue_steel',
        C: 'quark:diamond_heart',
    });


    e.shaped('8x quark:rope', ['A', 'A',], { A: 'supplementaries:rope' });

    e.shaped('quark:abacus', ['ABA', 'CCC', 'ABA'], {
        A: '#forge:rods/wooden',
        B: '#tfc:lumber',
        C: '#tfc:rock_knapping',
    });
    e.shaped('quark:seed_pouch', ['ABA', ' A '], {
        A: 'tfc:straw',
        B: 'supplementaries:rope',
    });
    e.shaped('8x quark:pipe', ['AAA', 'BBB', 'AAA'], {
        A: 'tfc:metal/rod/copper',
        B: 'firmalife:reinforced_glass',
    });
    e.shapeless('quark:encased_pipe', ['quark:pipe', 'minecraft:glass']);
    e.shaped('quark:crate', ['ABA', 'BCB', 'ABA'], {
        A: 'tfc:metal/rod/wrought_iron',
        B: '#tfc:lumber',
        C: '#minecraft:planks',
    });

    e.shaped('quark:obsidian_pressure_plate', ['AA'], {
        A: 'minecraft:obsidian',
    });
    e.shapeless('quark:paper_wall_sakura', [
        'quark:paper_wall_big',
        'minecraft:pink_dye',
    ]);
    e.shaped('quark:paper_wall_big', ['A A', ' B ', 'A A'], {
        A: '#tfc:lumber',
        B: 'minecraft:paper',
    });
    e.shaped('quark:paper_wall', ['A  ', 'ABA', '  A'], {
        A: '#tfc:lumber',
        B: 'minecraft:paper',
    });

    ALL_COLORS.forEach((color) => {
        e.shaped(`8x quark:${color}_shingles`, ['A', 'A'], {
            A: `minecraft:${color}_terracotta`,
        });
        e.shaped(`8x quark:${color}_shingles_stairs`, ['A  ', 'AA ', `AAA`], {
            A: `quark:${color}_shingles`,
        });

        e.shaped(`6x quark:${color}_shingles_slab`, [`AAA`], {
            A: `quark:${color}_shingles`,
        });
    });

    e.shaped('8x quark:shingles', ['A', 'A'], {
        A: 'minecraft:terracotta',
    });

    e.shaped(`8x quark:shingles_stairs`, ['A  ', 'AA ', `AAA`], {
        A: `quark:shingles`,
    });

    e.shaped(`6x quark:shingles_slab`, [`AAA`], {
        A: `quark:shingles`,
    });

    e.shaped('quark:redstone_randomizer', [' T ', 'TBT', 'SSS'], {
        T: 'minecraft:redstone_torch',
        B: ['lithiccoins:blank_coin/bismuth', '#lithiccoins:coins/bismuth'],
        S: '#forge:smooth_stone'
    })

    e.shapeless('2x quark:iron_button', ['tfc:metal/sheet/wrought_iron', '#tfc:chisels']).damageIngredient('#tfc:chisels', 2)
    e.shapeless('2x quark:gold_button', ['tfc:metal/sheet/gold', '#tfc:chisels']).damageIngredient('#tfc:chisels', 1)


    e.shaped('quark:trowel', [' A', 'B '], {
        A: 'tfc:metal/sheet/wrought_iron',
        B: '#forge:rods/wooden',
    })

    e.shaped('quark:backpack', ['ABA','CDC',' AE'], {A: 'minecraft:leather',B: 'tfc:metal/rod/steel',C: 'sns:reinforced_fabric',D: 'sns:unfinished_leather_sack', E: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')
    e.shaped('quark:backpack', ['ABA','CDC','EA '], {A: 'minecraft:leather',B: 'tfc:metal/rod/steel',C: 'sns:reinforced_fabric',D: 'sns:unfinished_leather_sack', E: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')

    e.remove({id: 'sns:crafting/frame_pack'})
    e.remove({id: 'sns:crafting/pack_frame'})
    e.remove({id: 'sns:crafting/ore_sack'})

    e.shapeless('minecraft:lime_dye', ['quark:moss_paste'])

    e.recipes.tfc
        .anvil('quark:iron_rod', 'tfc:metal/double_ingot/wrought_iron', [
            'bend_last',
            'draw_second_last',
            'draw_third_last',
        ])
        .tier(3);

    ADDED_ANVIL_RECIPES.push(['quark:iron_rod', 'tfc:metal/double_ingot/wrought_iron', 3]);

    e.recipes.tfc
        .anvil('quark:iron_rod', 'tfc:metal/double_ingot/steel', [
            'bend_last',
            'draw_second_last',
            'draw_third_last',
        ])
        .tier(4);

    ADDED_ANVIL_RECIPES.push(['quark:iron_rod', 'tfc:metal/double_ingot/steel', 4]);

    e.shaped('quark:chute', ['LCL', 'L L', ' L '], {
        L: '#tfc:lumber',
        C: 'create:cogwheel'
    });

    e.shaped('quark:ender_watcher', [' E ', 'SPS', ' E '], {
        E: 'create:electron_tube',
        S: 'tfc:metal/sheet/steel',
        P: 'create:precision_mechanism'
    });
});

LootJS.modifiers((e) => {
    e.addLootTableModifier('quark:entities/stoneling_carry')
        .removeLoot(/.*/)
        .addWeightedLoot(1, false, [
            Item.of('tfc:ore/normal_native_copper', 4),
            Item.of('tfc:ore/normal_native_gold', 4),
            Item.of('tfc:ore/normal_hematite', 4),
            Item.of('tfc:ore/normal_native_silver', 4),
            Item.of('tfc:ore/normal_cassiterite', 4),
            Item.of('tfc:ore/normal_bismuthinite', 4),
            Item.of('tfc:ore/normal_garnierite', 4),
            Item.of('tfc:ore/normal_malachite', 4),
            Item.of('tfc:ore/normal_magnetite', 4),
            Item.of('tfc:ore/normal_limonite', 4),
            Item.of('tfc:ore/normal_sphalerite', 4),
            Item.of('tfc:ore/normal_tetrahedrite', 4),
            Item.of('tfc:ore/halite', 4),
            Item.of('tfc:ore/amethyst', 4),
            Item.of('tfc:ore/diamond', 4),
            Item.of('tfc:ore/emerald', 4),
            Item.of('tfc:ore/lapis_lazuli', 4),
            Item.of('tfc:ore/opal', 4),
            Item.of('tfc:ore/pyrite', 4),
            Item.of('tfc:ore/ruby', 4),
            Item.of('tfc:ore/sapphire', 4),
            Item.of('tfc:ore/topaz', 4),
            Item.of('tfc:ore/bituminous_coal', 4),
            Item.of('tfc:ore/lignite', 4),
            Item.of('tfc:ore/cryolite', 4),
            Item.of('tfc:ore/saltpeter', 4),
            Item.of('tfc:ore/sylvite', 4),
            Item.of('tfc:ore/borax', 4),
            Item.of('tfc:ore/cinnabar', 4),
            Item.of('tfc:ore/sulfur', 4),
            Item.of('tfc:ore/graphite', 4),
            Item.of('tfc:ore/gypsum', 4),
            Item.of('firmalife:ore/normal_chromite', 4),
        ]);
});
TFCEvents.limitContainer('quark:backpack', event => {
    event.limit('normal', true)

})

