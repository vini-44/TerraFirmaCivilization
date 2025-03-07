ServerEvents.recipes((event) => {
	event.remove({ input: /.*chainmail.*/, not: { type: 'smithing_trim' } });
	event.remove({ output: /.*chainmail.*/, not: { type: 'smithing_trim' } });

	event.shaped('chainmail_helmet', ['CRC', 'C C'], {
		C: 'tfc:metal/chain/steel',
		R: 'tfc:metal/sheet/steel',
	});

	event.shaped('chainmail_leggings', ['CRC', 'C C', 'C C'], {
		C: 'tfc:metal/chain/steel',
		R: 'tfc:metal/sheet/steel',
	});

	event.shaped('chainmail_chestplate', ['R R', 'CCC', 'CCC'], {
		C: 'tfc:metal/chain/steel',
		R: 'tfc:metal/rod/steel',
	});

	event.shaped('4x tnt', ['FNF', 'NFN', 'FNF'], {
		F: 'tfc:powder/flux',
		N: 'scguns:nitro_powder',
	});

	event.remove({ id: 'tfc:crafting/vanilla/ladder' });

	event.remove({ output: 'minecraft:copper_block' });
	event.remove({ output: 'minecraft:gold_block' });

	//idfc I'm putting this here
	event.remove({ mod: 'chalk' });
	event.custom({
		type: 'tfc:knapping',
		knapping_type: 'tfc:rock',
		outside_slot_required: false,
		pattern: [' XXX ', ' XXX ', ' XXX ', ' XXX ', ' XXX '],
		ingredient: {
			item: 'tfc:rock/loose/chalk',
		},
		result: {
			item: 'chalk:white_chalk',
		},
	});
    event.custom({
		type: 'tfc:knapping',
		knapping_type: 'tfc:rock',
		outside_slot_required: false,
		pattern: [' XXX ', ' XXX ', ' XXX ', ' XXX ', ' XXX '],
		ingredient: {
			item: 'tfc:rock/mossy_loose/chalk',
		},
		result: {
			item: 'chalk:white_chalk',
		},
	});

    event.shaped('chalk:chalk_box', ['A A', 'ABA', 'AAA'], {
        A: 'paper',
        B: ['tfc:glue', '#forge:slimeballs']
    })

    event.remove({output:'minecraft:scaffolding'})
    event.shaped('8x scaffolding', ['ABA', 'C C', 'C C'], {
        A: '#tfc:lumber',
        B: 'tfc:jute_fiber',
        C: '#forge:rods/wooden'
    })

    event.remove({id: 'minecraft:stick_from_bamboo_item'})
});
