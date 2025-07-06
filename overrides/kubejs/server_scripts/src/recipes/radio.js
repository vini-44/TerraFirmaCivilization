// priority: 50

ServerEvents.recipes((event) => {
	event.remove({ mod: 'simpleradio' });

	event.shapeless('simpleradio:copper_wire', [
		'afc:rubber_bar',
		'createaddition:copper_spool',
	]);

    event.shaped('gilded_blackstone', ['A', 'B', 'C'], {
        A: 'createaddition:capacitor',
        B: 'thermal:machine_frame',
        C: 'createaddition:copper_spool',
    })

	event.shaped('simpleradio:receiver', ['A', 'B'], {
		A: 'simpleradio:receiving_module',
		B: 'thermal:machine_frame',
	});

	event.shapeless('simpleradio:insulator', [
		'createaddition:spool',
		'#tfc:lumber',
	]);

	event.shaped('simpleradio:transmitter', ['A', 'B'], {
		A: 'simpleradio:transmitting_module',
		B: 'thermal:machine_frame',
	});

	event.shaped('simpleradio:radiosmither', ['AAA', ' B '], {
		A: 'tfc:metal/sheet/steel',
		B: '#tfc:rock/bricks',
	});

	event.shaped('simpleradio:antenna', [' A ', 'ABA', 'A A'], {
		A: '2xkubejs:metal/rod/aluminum',
		B: 'tfc:metal/rod/steel',
	});

	event.shapeless('2x simpleradio:transmitting_module', [
		'createbigcannons:cannon_welder',
		'tfc:metal/sheet/steel',
		'2x kubejs:metal/rod/aluminum',
		'tfc:metal/rod/silver',
	]).damageIngredient('createbigcannons:cannon_welder');

	event.shapeless('2x simpleradio:receiving_module', [
		'createbigcannons:cannon_welder',
		'tfc:metal/sheet/steel',
		'2x createaddition:copper_spool',
		'tfc:metal/rod/silver',
	]).damageIngredient('createbigcannons:cannon_welder');


	event.shapeless('2x simpleradio:speaker_module', [
		'createbigcannons:cannon_welder',
		'tfc:metal/sheet/steel',
		'minecraft:note_block',
		'tfc:metal/rod/silver',
	]).damageIngredient('createbigcannons:cannon_welder');

	event.shapeless('2x simpleradio:listener_module', [
		'createbigcannons:cannon_welder',
		'tfc:metal/sheet/steel',
		'3x minecraft:redstone',
		'tfc:metal/rod/silver',
	]).damageIngredient('createbigcannons:cannon_welder');

	event.shaped('simpleradio:speaker', ['B', 'A'], {
		A: 'tfc:metal/sheet/steel',
		B: 'simpleradio:speaker_module',
	});

	event.shaped('simpleradio:transceiver', ['ABC', 'DED'], {
		A: 'simpleradio:transmitting_module',
		B: 'simpleradio:receiving_module',
		C: 'simpleradio:speaker_module',
		D: 'tfc:metal/sheet/steel',
		E: 'simpleradio:listener_module',
	});

	event.shaped('simpleradio:microphone', ['A', 'B'], {
		A: 'simpleradio:transmitting_module',
		B: 'tfc:metal/rod/steel',
	});

	event.shaped('simpleradio:radio', [' A ', 'BCB'], {
		A: 'simpleradio:receiving_module',
		B: 'tfc:metal/sheet/steel',
		C: 'simpleradio:speaker_module',
	});
});
