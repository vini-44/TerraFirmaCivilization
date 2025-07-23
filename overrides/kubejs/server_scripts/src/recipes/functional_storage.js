ServerEvents.recipes((e) => {

    e.remove({ output: 'functionalstorage:fluid_1' })
    e.remove({ output: 'functionalstorage:fluid_2' })
    e.remove({ output: 'functionalstorage:fluid_4' })

    //updated fluid drawer recipes
    e.shaped('functionalstorage:fluid_1', ['AAA', 'ABA', 'AAA'], {
        A: '#tfc:lumber',
        B: 'create:fluid_tank'

	});

    e.shaped('functionalstorage:fluid_2', ['ABA', 'AAA', 'ABA'], {
        A: '#tfc:lumber',
        B: 'create:fluid_tank'
	});

    e.shaped('functionalstorage:fluid_4', ['BAB', 'AAA', 'BAB'], {
        A: '#tfc:lumber',
        B: 'create:fluid_tank'
	});

    e.replaceInput(
        { mod: "functionalstorage", input: "minecraft:copper_ingot" },
        "minecraft:copper_ingot",
        "tfc:metal/ingot/copper"
    )

    e.replaceInput(
        { mod: "functionalstorage", input: "minecraft:copper_block" },
        "minecraft:copper_block",
        "tfc:metal/block/copper"
    )

    e.replaceInput(
        { mod: "functionalstorage", input: "minecraft:gold_block" },
        "minecraft:gold_block",
        "tfc:metal/block/gold"
    )
});