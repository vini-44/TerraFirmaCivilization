ServerEvents.recipes((event) => {
	event.remove({ mod: 'zetter', not: [{id: "zetter:copying_painting"}, {id: "zetter:frame_painting"}, {id: "zetter:unframe_painting"}]});
	event.shapeless('zetter:oak_plated_frame', [
		'zetter:oak_basic_frame',
		'firmalife:bottle_label',
	]);
	event.shapeless('zetter:gold_plated_frame', [
		'zetter:gold_basic_frame',
		'firmalife:bottle_label',
	]);
	event.shaped('zetter:iron_frame', ['AAA', 'BCB', 'AAA'], {
		A: 'tfc:metal/rod/wrought_iron',
		B: '#tfc:lumber',
		C: '#forge:leather',
	});
	event.shaped('zetter:easel', ['AA', 'AA', 'BB'], {
		A: '#tfc:lumber',
		B: '#forge:rods/wooden',
	});

	event.shapeless('zetter:paints', [
		'minecraft:yellow_dye',
		'minecraft:magenta_dye',
		'minecraft:cyan_dye',
		'minecraft:black_dye',
		'minecraft:white_dye',
	]);
	event.shapeless('zetter:paints', [
		'minecraft:white_dye',
		'minecraft:green_dye',
		'minecraft:blue_dye',
		'minecraft:red_dye',
		'minecraft:black_dye',
	]);
	event.shaped('zetter:gold_basic_frame', ['ABA', 'BCB', 'ABA'], {
		A: 'tfc:gem/emerald',
		B: 'tfc:metal/rod/gold',
		C: '#forge:leather',
	});
	event.shaped('zetter:oak_basic_frame', ['ABA', 'BCB', 'ABA'], {
		A: '#tfc:lumber',
		B: '#forge:rods/wooden',
		C: '#forge:leather',
	});

	event.shapeless('zetter:palette', [
		'zetter:paints',
		'#tfc:lumber',
	]);
	event.shaped('zetter:canvas', ['AA', 'AA'], {
		A: 'tfc:burlap_cloth',
	});
	event.shaped('zetter:canvas', ['AA', 'AA'], {
		A: 'tfc:wool_cloth',
	});
	event.shaped('zetter:canvas', ['AA', 'AA'], {
		A: 'minecraft:paper',
	});

	event.shaped('zetter:artist_table', ['AB', 'CC', 'CC'], {
		A: 'zetter:paints',
		B: 'minecraft:paper',
		C: '#minecraft:planks',
	});
});
