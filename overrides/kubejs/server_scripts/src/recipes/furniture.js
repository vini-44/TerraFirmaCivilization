// priority: 50

//FUCKING REFURBUSHED RELEASED
ServerEvents.recipes((e) => {
	e.remove({ mod: 'refurbished_furniture' });
	e.remove({ output: /everycomp:rfm.*/ });

	WOOD_TYPES.forEach((type) => {
		//toilet
		e.shaped(`everycomp:rfm/tfc/${type}_toilet`, ['A ', 'BA', 'BB'], {
			A: `tfc:wood/lumber/${type}`,
			B: '#minecraft:terracotta',
		});

		//basin
		e.shaped(`everycomp:rfm/tfc/${type}_basin`, ['ABA', 'CCC', ' C '], {
			A: `tfc:wood/lumber/${type}`,
			B: 'firmalife:metal/sheet/stainless_steel',
			C: '#minecraft:terracotta',
		});

		//bath tub
		e.shaped(`everycomp:rfm/tfc/${type}_bath`, ['CBC', 'CCC', 'AAA'], {
			A: `tfc:wood/lumber/${type}`,
			B: 'firmalife:metal/sheet/stainless_steel',
			C: '#minecraft:terracotta',
		});

		//sink
		e.shaped(
			`everycomp:rfm/tfc/${type}_kitchen_sink`,
			['CBC', 'CCC', 'AAA'],
			{
				C: `tfc:wood/lumber/${type}`,
				B: 'firmalife:metal/sheet/stainless_steel',
				A: '#minecraft:terracotta',
			}
		);

		//chairs
		e.shaped(`everycomp:rfm/tfc/${type}_chair`, ['A  ', 'AAA', 'A A'], {
			A: `tfc:wood/lumber/${type}`,
		});

		//table
		e.shaped(`everycomp:rfm/tfc/${type}_table`, ['AAA', 'A A'], {
			A: `tfc:wood/lumber/${type}`,
		});

		//desk
		e.shaped(`everycomp:rfm/tfc/${type}_desk`, ['AAA', 'A A', 'A A'], {
			A: `tfc:wood/lumber/${type}`,
		});

		//drawer
		e.shaped(`2x everycomp:rfm/tfc/${type}_drawer`, ['AAA', 'ABA', 'AAA'], {
			A: `tfc:wood/lumber/${type}`,
			B: '#forge:chests/wooden',
		});

		//kitchen cabinetry
		e.shaped(
			`everycomp:rfm/tfc/${type}_kitchen_cabinetry`,
			['AAA', 'AAA', 'BBB'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#minecraft:terracotta',
			}
		);

		//kitchen drawer
		e.shaped(
			`everycomp:rfm/tfc/${type}_kitchen_drawer`,
			['AAA', 'ACA', 'BBB'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#minecraft:terracotta',
				C: '#forge:chests/wooden',
			}
		);

		//kitchen storage cabinet
		e.shaped(
			`everycomp:rfm/tfc/${type}_kitchen_storage_cabinet`,
			['AAA', 'BBB', 'CCC'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#forge:chests/wooden',
				C: '#minecraft:terracotta',
			}
		);

		//wooden storage cabinet
		e.shaped(
			`everycomp:rfm/tfc/${type}_storage_cabinet`,
			['AAA', 'BBB', 'AAA'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#forge:chests/wooden',
			}
		);

		//lattice fence
		e.shaped(`everycomp:rfm/tfc/${type}_lattice_fence`, ['ABA', 'BAB'], {
			A: `tfc:wood/lumber/${type}`,
			B: '#forge:rods/wooden',
		});

		//lattice fence gate
		e.shaped(
			`everycomp:rfm/tfc/${type}_lattice_fence_gate`,
			['BAB', 'ABA'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#forge:rods/wooden',
			}
		);

		//mailbox
		e.shaped(`everycomp:rfm/tfc/${type}_mail_box`, [' A ', 'ABA', ' C '], {
			A: `tfc:wood/planks/${type}`,
			B: '#forge:chests/wooden',
			C: `tfc:wood/lumber/${type}`,
		});
	});

	AFC_WOOD_TYPES.forEach((type) => {
		//toilet
		e.shaped(`everycomp:rfm/afc/${type}_toilet`, ['A ', 'BA', 'BB'], {
			A: `afc:wood/lumber/${type}`,
			B: '#minecraft:terracotta',
		});

		//basin
		e.shaped(`everycomp:rfm/afc/${type}_basin`, ['ABA', 'CCC', ' C '], {
			A: `afc:wood/lumber/${type}`,
			B: 'firmalife:metal/sheet/stainless_steel',
			C: '#minecraft:terracotta',
		});

		//bath tub
		e.shaped(`everycomp:rfm/afc/${type}_bath`, ['CBC', 'CCC', 'AAA'], {
			A: `afc:wood/lumber/${type}`,
			B: 'firmalife:metal/sheet/stainless_steel',
			C: '#minecraft:terracotta',
		});

		//sink
		e.shaped(
			`everycomp:rfm/afc/${type}_kitchen_sink`,
			['CBC', 'CCC', 'AAA'],
			{
				C: `afc:wood/lumber/${type}`,
				B: 'firmalife:metal/sheet/stainless_steel',
				A: '#minecraft:terracotta',
			}
		);

		//chairs
		e.shaped(`everycomp:rfm/afc/${type}_chair`, ['A  ', 'AAA', 'A A'], {
			A: `afc:wood/lumber/${type}`,
		});

		//table
		e.shaped(`everycomp:rfm/afc/${type}_table`, ['AAA', 'A A'], {
			A: `afc:wood/lumber/${type}`,
		});

		//desk
		e.shaped(`everycomp:rfm/afc/${type}_desk`, ['AAA', 'A A', 'A A'], {
			A: `afc:wood/lumber/${type}`,
		});

		//drawer
		e.shaped(`2x everycomp:rfm/afc/${type}_drawer`, ['AAA', 'ABA', 'AAA'], {
			A: `afc:wood/lumber/${type}`,
			B: '#forge:chests/wooden',
		});

		//kitchen cabinetry
		e.shaped(
			`everycomp:rfm/afc/${type}_kitchen_cabinetry`,
			['AAA', 'AAA', 'BBB'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#minecraft:terracotta',
			}
		);

		//kitchen drawer
		e.shaped(
			`everycomp:rfm/afc/${type}_kitchen_drawer`,
			['AAA', 'ACA', 'BBB'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#minecraft:terracotta',
				C: '#forge:chests/wooden',
			}
		);

		//kitchen storage cabinet
		e.shaped(
			`everycomp:rfm/afc/${type}_kitchen_storage_cabinet`,
			['AAA', 'BBB', 'CCC'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#forge:chests/wooden',
				C: '#minecraft:terracotta',
			}
		);

		//wooden storage cabinet
		e.shaped(
			`everycomp:rfm/afc/${type}_storage_cabinet`,
			['AAA', 'BBB', 'AAA'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#forge:chests/wooden',
			}
		);

		//lattice fence
		e.shaped(`everycomp:rfm/afc/${type}_lattice_fence`, ['ABA', 'BAB'], {
			A: `afc:wood/lumber/${type}`,
			B: '#forge:rods/wooden',
		});

		//lattice fence gate
		e.shaped(
			`everycomp:rfm/afc/${type}_lattice_fence_gate`,
			['BAB', 'ABA'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#forge:rods/wooden',
			}
		);

		//mailbox
		e.shaped(`everycomp:rfm/afc/${type}_mail_box`, [' A ', 'ABA', ' C '], {
			A: `afc:wood/planks/${type}`,
			B: '#forge:chests/wooden',
			C: `afc:wood/lumber/${type}`,
		});
	});

	//stool
	e.shaped('refurbished_furniture:white_stool', [' A ', 'BCB'], {
		A: '#tfc:high_quality_cloth',
		B: '#tfc:lumber',
		C: 'tfc:thatch',
	});

	//sofa
	e.shaped('refurbished_furniture:white_sofa', ['A A', 'CAC', 'BBB'], {
		A: '#tfc:high_quality_cloth',
		B: '#tfc:lumber',
		C: 'tfc:thatch',
	});

	e.remove({ id: /refurbished_furniture:.*_stool_from_dyeing/ });
	e.remove({ id: /refurbished_furniture:.*_sofa_from_dyeing/ });

	e.shaped('refurbished_furniture:post_box', [' A ', 'A A', 'BBB'], {
		A: 'tfc:metal/double_sheet/blue_steel',
		B: 'tfc:metal/sheet/steel',
	});

	//electrical
	e.shaped('refurbished_furniture:white_lamp', ['ABA', ' C ', '   '], {
		A: 'minecraft:paper',
		B: 'createaddition:small_light_connector',
		C: '#tfc:lumber',
	});

	ALL_COLORS.forEach((color) => {
		e.shapeless('refurbished_furniture:' + color + '_lamp', [
			'#refurbished_furniture:lamps',
			'#forge:dyes/' + color,
		]);
	});

	e.shaped(
		'refurbished_furniture:light_electricity_generator',
		['ABA', 'BCB', ' B '],
		{
			A: 'createaddition:capacitor',
			B: 'kubejs:metal/sheet/aluminum',
			C: 'createaddition:gold_spool',
		}
	);

	e.shapeless('refurbished_furniture:light_electricity_generator', [
		'refurbished_furniture:dark_electricity_generator',
		'#forge:dyes/white',
	]);

	e.shapeless('refurbished_furniture:dark_electricity_generator', [
		'refurbished_furniture:light_electricity_generator',
		'#forge:dyes/black',
	]);

	e.shaped('refurbished_furniture:recycle_bin', [' A ', ' B ', ' C '], {
		A: 'kubejs:metal/sheet/aluminum',
		B: 'create:millstone',
		C: 'createaddition:connector',
	});
	e.shapeless('4x refurbished_furniture:light_ceiling_light', [
		'kubejs:metal/sheet/aluminum',
		'createaddition:small_light_connector',
		'createaddition:small_light_connector',
		'createaddition:small_light_connector',
		'createaddition:small_light_connector',
	]);

	e.shapeless('refurbished_furniture:dark_ceiling_light', [
		'refurbished_furniture:light_ceiling_light',
		'#forge:dyes/black',
	]);

	e.shapeless('refurbished_furniture:light_ceiling_light', [
		'refurbished_furniture:dark_ceiling_light',
		'#forge:dyes/white',
	]);

	e.shapeless('4x refurbished_furniture:light_lightswitch', [
		'minecraft:redstone',
		'kubejs:metal/ingot/aluminum',
		'createaddition:connector',
	]);

	e.shapeless('refurbished_furniture:dark_lightswitch', [
		'refurbished_furniture:light_lightswitch',
		'#forge:dyes/black',
	]);

	e.shapeless('refurbished_furniture:light_lightswitch', [
		'refurbished_furniture:dark_lightswitch',
		'#forge:dyes/white',
	]);

	e.shapeless('refurbished_furniture:doorbell', [
		'minecraft:note_block',
		'kubejs:metal/ingot/aluminum',
		'createaddition:connector',
	]);

	WOOD_TYPES.forEach((type) => {
		e.shaped(
			`everycomp:rfm/tfc/${type}_light_ceiling_fan`,
			[' A ', 'ABA', ' A '],
			{
				A: 'tfc:wood/lumber/' + type,
				B: 'kubejs:metal/ingot/aluminum',
			}
		);

		e.shapeless(`everycomp:rfm/tfc/${type}_dark_ceiling_fan`, [
			`everycomp:rfm/tfc/${type}_light_ceiling_fan`,
			'#forge:dyes/black',
		]);

		e.shapeless(`everycomp:rfm/tfc/${type}_light_ceiling_fan`, [
			`everycomp:rfm/tfc/${type}_dark_ceiling_fan`,
			'#forge:dyes/white',
		]);
	});

	AFC_WOOD_TYPES.forEach((type) => {
		e.shaped(
			`everycomp:rfm/afc/${type}_light_ceiling_fan`,
			[' A ', 'ABA', ' A '],
			{
				A: 'afc:wood/lumber/' + type,
				B: 'kubejs:metal/ingot/aluminum',
			}
		);

		e.shapeless(`everycomp:rfm/afc/${type}_dark_ceiling_fan`, [
			`everycomp:rfm/afc/${type}_light_ceiling_fan`,
			'#forge:dyes/black',
		]);

		e.shapeless(`everycomp:rfm/afc/${type}_light_ceiling_fan`, [
			`everycomp:rfm/afc/${type}_dark_ceiling_fan`,
			'#forge:dyes/white',
		]);
	});

    e.shaped('refurbished_furniture:wrench', ['A', 'B'], { A: 'kubejs:metal/ingot/aluminum', B: '#forge:rods/wooden' });

    e.shaped('refurbished_furniture:white_trampoline', [' A ','ABA',' A '], {A: 'tfc:metal/rod/wrought_iron',B: 'afc:rubber_bar'})
});

let limit = [];

limit.forEach((item) => {
	TFCEvents.limitContainer(item, (event) => {
		event.limit('large');
	});
});

ServerEvents.tags('block', (event) => {
	event.add('kubejs:ceiling_fans', /.*ceiling_fan.*/);
    event.add('kubejs:electricity_generators', /.*electricity_generator.*/)
});