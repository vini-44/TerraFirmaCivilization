// priority: 50

ServerEvents.recipes((event) => {
	event.remove({ mod: 'scguns' });

	let bullet_defs = {
		'16x scguns:standard_bullet': 'tfc:metal/rod/wrought_iron',
		'16x scguns:hardened_bullet': 'tfc:metal/rod/steel',
	};

	let casings_def = {
		'24x scguns:large_brass_casing': { material: 'brass', tier: 2 },
		'32x scguns:medium_brass_casing': { material: 'brass', tier: 2 },
		'48x scguns:small_brass_casing': { material: 'brass', tier: 2 },

		'32x scguns:medium_diamond_steel_casing': {
			material: 'steel',
			tier: 3,
		},
		'48x scguns:small_diamond_steel_casing': { material: 'steel', tier: 3 },
	};

	for (let [bullet, material] of Object.entries(bullet_defs)) {
		event.recipes.tfc
			.anvil(bullet, material, ['punch_last', 'draw_any', 'draw_any'])
			.tier(3);

            ADDED_ANVIL_RECIPES.push([bullet, material, 3]);
	}

	for (let [casing, material] of Object.entries(casings_def)) {
		event.recipes.tfc
			.anvil(casing, `tfc:metal/sheet/${material.material}`, [
				'punch_last',
				'bend_second_last',
				'draw_third_last',
			])
			.tier(material.tier);

            ADDED_ANVIL_RECIPES.push([casing, `tfc:metal/sheet/${material.material}`, material.tier]);
	}

	let round_defs = {
	    'scguns:compact_advanced_round': {
			casing: 'scguns:small_brass_casing',
			propellant: 'createbigcannons:gunpowder_pinch',
			bullet: 'scguns:standard_bullet',
		},
		'scguns:advanced_round': {
			casing: 'scguns:medium_brass_casing',
			propellant: '2x createbigcannons:gunpowder_pinch',
			bullet: 'scguns:standard_bullet',
		},
		'scguns:krahg_round': {
			casing: 'scguns:large_brass_casing',
			propellant: 'scguns:nitro_powder_dust',
			bullet: 'scguns:standard_bullet',
		},
		'scguns:shotgun_shell': {
			casing: 'scguns:small_brass_casing',
			propellant: 'scguns:buckshot',
			bullet: 'paper',
		},
		'scguns:beowulf_round': {
			casing: 'scguns:small_diamond_steel_casing',
			propellant: 'scguns:nitro_powder_dust',
			bullet: 'scguns:hardened_bullet',
		},
		'scguns:gibbs_round': {
			casing: 'scguns:medium_diamond_steel_casing',
			propellant: 'scguns:nitro_powder_dust',
			bullet: 'scguns:hardened_bullet',
		},
	};

	for (let [round, def] of Object.entries(round_defs)) {
		event.shapeless(round, [def.casing, def.propellant, def.bullet]);
	}

    event.recipes.tfc.anvil('4x kubejs:musket_ball', 'tfc:metal/ingot/cast_iron', [
        'punch_last', 'draw_any', 'draw_any'
    ]).tier(3)

    ADDED_ANVIL_RECIPES.push(['4x kubejs:musket_ball', 'tfc:metal/ingot/cast_iron', 3]);


    event.shapeless('8x scguns:powder_and_ball', ['paper', 'kubejs:musket_ball', 'gunpowder'])

    event.shapeless('scguns:buckshot', ['4x scguns:standard_bullet', 'gunpowder'])

    event.shapeless('4x scguns:grapeshot', ['4x kubejs:musket_ball', '#tfc:sewing_dark_cloth', 'gunpowder'])

    event.shapeless('kubejs:rocket_fuel', ['4x tfc:powder/sphalerite', '4x tfc:powder/sulfur'])
    event.shapeless('kubejs:rocket_fuel', ['4x minecraft:sugar', '4x tfc:powder/saltpeter'])

    event.shapeless('scguns:rocket', ['kubejs:rocket_fuel', 'tfc:metal/sheet/zinc', 'scguns:nitro_powder'])

    //reductive crafting! Reduced yield.
    //Also fluid pipe here because why not.
    let casing_def = {
        'tfc:metal/sheet/brass': ['40x scguns:small_brass_casing', '24x scguns:medium_brass_casing', '16x scguns:large_brass_casing', '4x createbigcannons:empty_autocannon_cartridge'],
        'tfc:metal/sheet/steel': ['40x scguns:small_diamond_steel_casing', '42x scguns:medium_diamond_steel_casing'],
        'tfc:metal/sheet/copper': ['6x create:fluid_pipe']
    }    

    for (let [material, casings] of Object.entries(casing_def)) {
        casings.forEach((casing) => {
            event.recipes.create.cutting(casing, material).processingTime(500);
        })
    }
});
