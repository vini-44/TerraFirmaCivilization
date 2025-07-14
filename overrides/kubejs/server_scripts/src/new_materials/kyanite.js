ServerEvents.recipes((e) => {
	e.remove({ id: 'minecraft:amethyst_block' });
	e.remove({ id: 'minecraft:calibrated_sculk_sensor' });

	e.recipes.create.crushing('kubejs:kyanite_dust', 'amethyst_shard');
	e.shapeless('kubejs:unfired_refractory_brick', [
		'4x kubejs:kyanite_dust',
		'tfc:ceramic/unfired_brick',
	]);

    e.shaped('kubejs:kyanite_dust_block', ['AAA', 'AAA', 'AAA'], {
        A: 'kubejs:kyanite_dust'
    })

    e.shapeless('9x kubejs:kyanite_dust', ['kubejs:kyanite_dust_block'])

	e.recipes.tfc
		.heating('kubejs:unfired_refractory_brick', 1399)
		.resultItem('kubejs:refractory_brick');

	e.shaped('2x kubejs:refractory_bricks', ['ABA', 'BAB', 'ABA'], {
		A: 'kubejs:refractory_brick',
		B: 'tfc:mortar',
	});

    e.shapeless('kubejs:industrial_furnace_energy_acceptor', ['kubejs:refractory_bricks', 'createaddition:modular_accumulator'])

	e.shapeless('kubejs:industrial_furnace_fluid_input', [
		'kubejs:industrial_furnace_fluid_output_hatch',
	]);
	e.shapeless('kubejs:industrial_furnace_fluid_input', ['kubejs:refractory_bricks', 'create:fluid_pipe']);
	e.shapeless('kubejs:industrial_furnace_fluid_output_hatch', [
		'kubejs:industrial_furnace_fluid_input',
	]);

    e.shapeless('kubejs:industrial_furnace_item_input_hatch', ['kubejs:refractory_bricks', 'create:chute'])

    e.shapeless('kubejs:industrial_furnace_item_output_hatch', ['kubejs:industrial_furnace_item_input_hatch'])
    e.shapeless('kubejs:industrial_furnace_item_input_hatch', ['kubejs:industrial_furnace_item_output_hatch'])


    e.recipes.create.mechanical_crafting(
        'kubejs:industrial_furnace', [' AAA ', 'ABBBA', 'CBDBC', 'AFFFA', ' AAA '], {
            A:'kubejs:refractory_brick',
            B: 'createaddition:gold_spool',
            C: 'create:fluid_pipe',
            D: 'thermal:machine_frame',
            F: 'tfc:metal/double_sheet/black_steel'
        })
});

TFCEvents.data((event) => {
	event.itemHeat(
		'kubejs:unfired_refractory_brick',
		0.2,
		null,
		null,
		'kubejs:unfired_refractory_brick'
	);
});

LootJS.modifiers((e) => {
	e.addBlockLootModifier('minecraft:amethyst_block')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([2, 4], true, ['minecraft:amethyst_shard']);
});
