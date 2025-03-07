ServerEvents.recipes((event) => {
    event.remove({mod: 'simpleradio'})

    event.shaped('simpleradio:receiving_module', [' A ', 'BCD', ' E '], {
		A: 'createaddition:copper_spool',
		B: 'createaddition:capacitor',
		C: 'minecraft:redstone',
		D: 'tfc:metal/rod/nickel',
		E: 'tfc:metal/sheet/nickel',
	});
	event.shaped('simpleradio:transmitting_module', ['A  ', 'ABC', ' D '], {
		A: 'tfc:metal/rod/nickel',
		B: 'minecraft:redstone',
		C: 'createaddition:copper_spool',
		D: 'tfc:metal/sheet/nickel',
	});
	event.shaped('simpleradio:listener_module', [' A ', 'BCB', ' D '], {
		A: 'minecraft:redstone',
		B: 'tfc:metal/rod/nickel',
		C: 'createaddition:copper_spool',
		D: 'tfc:metal/sheet/nickel',
	});
	event.shaped('simpleradio:speaker_module', [' A ', 'BCB', ' D '], {
		A: 'createaddition:capacitor',
		B: 'createaddition:copper_spool',
		C: 'minecraft:note_block',
		D: 'tfc:metal/sheet/nickel',
	});
	event.shaped('simpleradio:microphone', ['ABA', 'CDC', ' E '], {
		A: '#tfc:high_quality_cloth',
		B: 'simpleradio:listener_module',
		C: 'tfc:metal/rod/wrought_iron',
		D: 'simpleradio:transmitting_module',
		E: 'tfc:metal/sheet/nickel',
	});
	event.shaped('simpleradio:transceiver', ['A B', 'CDE', 'FGF'], {
		A: 'tfc:metal/rod/wrought_iron',
		B: 'createaddition:capacitor',
		C: 'simpleradio:listener_module',
		D: 'simpleradio:speaker_module',
		E: 'simpleradio:receiving_module',
		F: 'tfc:metal/sheet/nickel',
		G: 'simpleradio:transmitting_module',
	});
	event.shaped('simpleradio:speaker', [' A ', 'BCD', ' A '], {
		A: 'tfc:metal/sheet/nickel',
		B: 'simpleradio:speaker_module',
		C: 'simpleradio:receiving_module',
		D: 'tfc:metal/rod/nickel',
	});
	event.shaped('simpleradio:radiosmither', ['   ', 'AAA', ' B '], {
		A: 'tfc:metal/sheet/nickel',
		B: '#tfc:rock/bricks',
	});
	event.shaped('simpleradio:radio', [' AB', 'CDC', ' C '], {
		A: 'simpleradio:receiving_module',
		B: 'tfc:metal/rod/nickel',
		C: 'tfc:metal/sheet/nickel',
		D: 'simpleradio:speaker_module',
	});

});
