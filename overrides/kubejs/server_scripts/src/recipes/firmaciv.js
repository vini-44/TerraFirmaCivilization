// priority: 50

//Firmaciv
//removing nagivation tools since we have journeymap. Sorry Aleki.

ServerEvents.recipes((e) => {
	e.remove({ mod: 'alekiships' });

	CIV_REMOVE.forEach((recipe) => {
		e.remove({ id: 'firmaciv:' + recipe });
	});

	e.recipes.create
		.sequenced_assembly(
			//less efficiency!
			['3x firmaciv:copper_bolt'],
			'tfc:metal/ingot/copper',
			[
				e.recipes.create.cutting(
					'tfc:metal/ingot/copper',
					'tfc:metal/ingot/copper'
				),
			]
		)
		.transitionalItem('tfc:metal/ingot/copper')
		.loops(5);

	e.remove({ output: 'firmaciv:rope_coil' });

	e
		.shapeless('4x supplementaries:rope', [
			'#lithicaddon:spindles',
			'2x tfc:jute_fiber',
		])
		.damageIngredient('#lithicaddon:spindles');
	e
		.shapeless('supplementaries:rope', [
			'#lithicaddon:spindles',
			'8x tfc:straw',
		])
		.damageIngredient('#lithicaddon:spindles', 4);

	e.remove({ id: 'firmaciv:anvil/anchor' });
	e.remove({ id: 'firmaciv:anvil/cleat' });
	e.remove({ id: 'firmaciv:anvil/oarlock' });

	e.remove({ id: 'firmaciv:heating/anchor' });
	e.remove({ id: 'firmaciv:heating/cleat' });
	e.remove({ id: 'firmaciv:heating/oarlock' });

	//FOR SOME REASON, OARS RECIPE DOESN'T WORK. WHAT
	e.shaped('alekiships:oar', ['  A', ' A ', 'B  '], {
		A: '#forge:rods/wooden',
		B: '#tfc:lumber',
	});

    e.recipes.tfc.anvil('alekiships:oarlock', '#tfc:metal/double_ingot/any_bronze', ['bend_last', 'hit_second_last', 'hit_third_last']).tier(2).rules(['bend_last', 'hit_second_last', 'hit_third_last']);
    e.recipes.tfc.anvil('alekiships:cleat', 'tfc:metal/double_ingot/wrought_iron', ['bend_last', 'bend_second_last', 'bend_third_last']).tier(3).rules(['bend_last', 'bend_second_last', 'bend_third_last']);
    e.recipes.tfc.anvil('alekiships:anchor', 'tfc:metal/double_sheet/wrought_iron', ['hit_last', 'punch_second_last', 'bend_third_last']).tier(3).rules(['hit_last', 'punch_second_last', 'bend_third_last']);


    ADDED_ANVIL_RECIPES.push(['alekiships:oarlock', '#tfc:metal/double_ingot/any_bronze', 2]);
    ADDED_ANVIL_RECIPES.push(['alekiships:cleat', 'tfc:metal/double_ingot/wrought_iron', 3]);
    ADDED_ANVIL_RECIPES.push(['alekiships:anchor', 'tfc:metal/double_sheet/wrought_iron', 3]);
    
    e.recipes.tfc.heating('alekiships:anchor', 1540).resultFluid(Fluid.of('tfc:metal/cast_iron', 400));
    e.recipes.tfc.heating('alekiships:cleat', 1540).resultFluid(Fluid.of('tfc:metal/cast_iron', 200));
    e.recipes.tfc.heating('alekiships:oarlock', 1535).resultFluid(Fluid.of('tfc:metal/bronze', 200));

    e.remove({id: /afc:crafting\/wood\/.*_boat/})
});
