//Firmaciv
//removing nagivation tools since we have journeymap. Sorry Aleki.

ServerEvents.recipes((event) => {
	event.remove({ mod: 'alekiships' });

	CIV_REMOVE.forEach((recipe) => {
		event.remove({ id: 'firmaciv:' + recipe });
	});

	event.recipes.create
		.sequenced_assembly(
			//less efficiency!
			['3x firmaciv:copper_bolt'],
			'tfc:metal/ingot/copper',
			[
				event.recipes.create.cutting(
					'tfc:metal/ingot/copper',
					'tfc:metal/ingot/copper'
				),
			]
		)
		.transitionalItem('tfc:metal/ingot/copper')
		.loops(5);

	event.remove({ output: 'firmaciv:rope_coil' });

	event
		.shapeless('4x supplementaries:rope', [
			'#lithicaddon:spindles',
			'2x tfc:jute_fiber',
		])
		.damageIngredient('#lithicaddon:spindles');
	event
		.shapeless('supplementaries:rope', [
			'#lithicaddon:spindles',
			'8x tfc:straw',
		])
		.damageIngredient('#lithicaddon:spindles', 4);

	event.remove({ id: 'firmaciv:anvil/anchor' });
	event.remove({ id: 'firmaciv:anvil/cleat' });
	event.remove({ id: 'firmaciv:anvil/oarlock' });

	//FOR SOME REASON, OARS RECIPE DOESN'T WORK. WHAT
	event.shaped('alekiships:oar', ['  A', ' A ', 'B  '], {
		A: '#forge:rods/wooden',
		B: '#tfc:lumber',
	});

	event.custom({
		type: 'tfc:anvil',
		input: {
			tag: 'forge:ingots/wrought_iron',
		},
		result: {
			item: 'alekiships:oarlock',
		},
		tier: 3,
		rules: ['bend_last', 'hit_second_last', 'hit_third_last'],
	});

	event.custom({
		type: 'tfc:anvil',
		input: {
			tag: 'forge:double_ingots/wrought_iron',
		},
		result: {
			item: 'alekiships:cleat',
		},
		tier: 3,
		rules: ['bend_last', 'bend_second_last', 'bend_third_last'],
	});

	event.custom({
		type: 'tfc:anvil',
		input: {
			tag: 'forge:double_sheets/wrought_iron',
		},
		result: {
			item: 'alekiships:anchor',
		},
		tier: 3,
		rules: ['hit_last', 'punch_second_last', 'bend_third_last'],
	});
});
