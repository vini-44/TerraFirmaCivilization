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

});