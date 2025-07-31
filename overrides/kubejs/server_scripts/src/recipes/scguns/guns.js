// priority: 50

ServerEvents.recipes((e) => {
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:musket').copyForgingBonus(),
		['A  ', 'BCC', 'D  '],
		{
			A: 'minecraft:flint_and_steel',
			B: 'scguns:gun_parts',
			C: 'scguns:stone_gun_barrel',
			D: '#tfc:lumber',
		},
		1,
		0
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:flintlock_pistol').copyForgingBonus(),
		['ABC', ' D '],
		{
			A: 'minecraft:flint_and_steel',
			B: 'scguns:gun_parts',
			C: 'scguns:stone_gun_barrel',
			D: '#tfc:lumber',
		},
		0,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:saketini').copyForgingBonus(),
		['A  ', 'BCD', 'EE '],
		{
			A: 'scguns:firing_unit',
			B: 'scguns:gun_parts',
			C: 'scguns:gun_barrel',
			D: 'scguns:stone_gun_barrel',
			E: '#tfc:lumber',
		},
		0,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:winnie').copyForgingBonus(),
		['A  ', 'BCD', 'E  '],
		{
			A: 'scguns:firing_unit',
			B: 'scguns:gun_parts',
			C: 'scguns:gun_magazine',
			D: 'scguns:stone_gun_barrel',
			E: '#tfc:lumber',
		},
		1,
		0
	);

	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:pax').copyForgingBonus(),
		['ABC', 'D  '],
		{
			A: 'scguns:firing_unit',
			B: 'scguns:gun_parts',
			C: 'scguns:stone_gun_barrel',
			D: '#tfc:lumber',
		},
		0,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:blunderbuss').copyForgingBonus(),
		['A  ', 'BCF', 'DD '],
		{
			A: 'minecraft:flint_and_steel',
			B: 'scguns:gun_parts',
			C: 'tfc:metal/double_sheet/steel',
            F: 'scguns:stone_gun_barrel',
			D: '#tfc:lumber',
		},
		1,
		0
	);

	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:iron_javelin').copyForgingBonus(),
		[' A ', 'BCD', 'EF '],
		{
			A: 'scguns:iron_gun_frame',
			B: 'scguns:firing_unit',
			C: 'scguns:gun_parts',
			D: 'scguns:gun_barrel',
			E: '#tfc:lumber',
			F: 'scguns:gun_magazine',
		},
		1,
		1
	);

	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:iron_spear').copyForgingBonus(),
		[' A ', 'BCD', 'EF '],
		{
			A: 'scguns:iron_gun_frame',
			B: 'scguns:firing_unit',
			C: 'scguns:heavy_gun_parts',
			D: 'scguns:heavy_gun_barrel',
			E: '#tfc:lumber',
			F: 'scguns:gun_magazine',
		},
		1,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:auvtomag').copyForgingBonus(),
		['A  ', 'BCD', 'E  '],
		{
			A: 'scguns:iron_gun_frame',
			B: 'scguns:firing_unit',
			C: 'scguns:heavy_gun_parts',
			D: 'scguns:heavy_gun_barrel',
			E: 'scguns:gun_magazine',
		},
		1,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:greaser_smg').copyForgingBonus(),
		['A  ', 'BCD', 'EF '],
		{
			A: 'scguns:iron_gun_frame',
			B: 'scguns:rapid_firing_unit',
			C: 'scguns:gun_parts',
			D: 'scguns:gun_barrel',
			E: '#tfc:lumber',
			F: 'scguns:gun_magazine',
		},
		1,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:m3_carabine').copyForgingBonus(),
		[' A ', 'BCD', 'EF '],
		{
			A: 'scguns:iron_gun_frame',
			B: 'scguns:rapid_firing_unit',
			C: 'scguns:gun_parts',
			D: 'scguns:heavy_gun_barrel',
			E: '#tfc:lumber',
			F: 'scguns:gun_magazine',
		},
		1,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:combat_shotgun').copyForgingBonus(),
		[' A ', 'BCC', 'DED'],
		{
			A: 'scguns:heavy_gun_parts',
			B: 'scguns:firing_unit',
			C: 'scguns:heavy_gun_barrel',
			D: '#tfc:lumber',
			E: 'scguns:gun_magazine',
		},
		0,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:prush_gun').copyForgingBonus(),
		['AB ', 'CDE', 'F G'],
		{
			A: 'scguns:diamond_steel_gun_frame',
			B: 'scguns:heavy_gun_parts',
			C: 'scguns:rapid_firing_unit',
			D: 'scguns:gun_barrel',
			E: 'scguns:heavy_gun_barrel',
			F: '#tfc:lumber',
			G: 'scguns:gun_magazine',
		},
		0,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:defender_pistol').copyForgingBonus(),
		[' A ', 'BCD', 'E  '],
		{
			A: 'scguns:iron_gun_frame',
			B: 'scguns:firing_unit',
			C: 'scguns:gun_parts',
			D: 'scguns:gun_barrel',
			E: 'scguns:gun_magazine',
		},
		1,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:inertial').copyForgingBonus(),
		['AB ', 'CDD', 'E  '],
		{
			A: 'scguns:diamond_steel_gun_frame',
			B: 'scguns:heavy_gun_parts',
			C: 'scguns:firing_unit',
			D: 'scguns:heavy_gun_barrel',
			E: 'scguns:gun_magazine',
		},
		0,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:mas_55').copyForgingBonus(),
		['A B', 'CBD', 'EF '],
		{
			A: 'scguns:diamond_steel_gun_frame',
			B: 'scguns:heavy_gun_barrel',
			C: 'scguns:heavy_gun_parts',
			D: 'scguns:gun_magazine',
			E: 'scguns:firing_unit',
			F: '#tfc:lumber',
		},
		1,
		0
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:krauser').copyForgingBonus(),
		['A  ', 'BCD', 'EF '],
		{
			A: 'scguns:diamond_steel_gun_frame',
			B: 'scguns:firing_unit',
			C: 'scguns:gun_parts',
			D: 'scguns:gun_barrel',
			E: '#tfc:lumber',
			F: 'scguns:gun_magazine',
		},
		1,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:soul_drummer').copyForgingBonus(),
		['A  ', 'BCD', 'EF '],
		{
			A: 'scguns:diamond_steel_gun_frame',
			B: 'scguns:rapid_firing_unit',
			C: 'scguns:gun_parts',
			D: 'scguns:gun_barrel',
			E: '#tfc:lumber',
			F: 'scguns:gun_magazine',
		},
		1,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:uppercut').copyForgingBonus(),
		['A  ', 'BCD', 'EF '],
		{
			A: 'scguns:diamond_steel_gun_frame',
			B: 'scguns:firing_unit',
			C: 'scguns:heavy_gun_parts',
			D: 'scguns:heavy_gun_barrel',
			E: '#tfc:lumber',
			F: 'scguns:gun_magazine',
		},
		1,
		1
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:lockewood').copyForgingBonus(),
		['AB ', 'CDD', 'E F'],
		{
			A: 'scguns:heavy_gun_parts',
			B: 'scguns:diamond_steel_gun_frame',
			C: 'scguns:rapid_firing_unit',
			D: 'scguns:heavy_gun_barrel',
			E: '#tfc:lumber',
			F: 'scguns:gun_magazine',
		},
		0,
		0
	);
	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:rocket_rifle').copyForgingBonus(),
		['ABB', 'CDD', 'EEE'],
		{
			A: 'scguns:heavy_gun_parts',
			B: 'scguns:iron_gun_frame',
			C: 'scguns:firing_unit',
			D: 'scguns:heavy_gun_barrel',
			E: 'tfc:wood/lumber/acacia',
		},
		0,
		0
	);

	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:callwell').copyForgingBonus(),
		['ABB', 'DBB', 'EE '],
		{
			A: 'scguns:firing_unit',
			B: 'scguns:stone_gun_barrel',
			D: 'scguns:gun_parts',
			E: 'tfc:wood/lumber/acacia',
		},
		1,
		0
	);

	/*e.recipes.tfc.extra_products_shapeless_crafting(
		['scguns:gun_barrel', '20x createbigcannons:steel_scrap'],
		e.recipes.tfc.advanced_shapeless_crafting(
			TFC.itemStackProvider
				.of('scguns:sawed_off_callwell', 'kubejs:damage_saws_only'), //idfk
				
                
			['scguns:callwell', '#tfc:saws'],
			'scguns:callwell'
		).damageIngredient('#tfc:saws')
	);*/
});
