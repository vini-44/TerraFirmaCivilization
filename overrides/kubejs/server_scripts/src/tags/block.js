ServerEvents.tags('block', (e) => {
	e.add('tfc:forge_insulation', 'tfc:charcoal_forge');
	e.add('tfc:forge_insulation', 'tfc:charcoal_pile');
	e.add('tfc:forge_insulation', /tfc:rock\/.*_stairs/);
	e.add('tfc:forge_invisible_whitelist', 'create:fluid_tank');

	const fragile = [
		'#supplementaries:brick_breakable',
		'#supplementaries:brick_breakable_recursive',
		'#supplementaries:bomb_breakable',
		/tfc:rock\/spike.*/,
		'tfc:calcite',
		'tfc:icicle',
		/createaddition:.*connector.*/,
		/.*window.*/,
		'tfc:sea_ice',
		/tfc:plant\/.*_branch/,
		'tfc:melon',
		'tfc:pumpkin',
        'scguns:enemy_turret'
	];

	e.add('scguns:fragile', fragile);

	e.add('minecraft:snow_layer_cannot_survive_on', /.*asphalt.*/);
	e.add('minecraft:snow_layer_cannot_survive_on', /.*rock\/road.*/);

	e.add('firmalife:greenhouse_full_walls', ['create:encased_fluid_pipe']);
	e.add('createbigcannons:spark_effect_on_impact', [/.*metal\/block.*/, 'tfc:sheet_pile', /.*locometal.*/])

	e.add('tfc:scraping_surface', /.*rfm.*table/);
	e.add('tfc:scraping_surface', /.*rfm.*desk/);
	e.add('tfc:metal_plated_blocks', [
		'firmalife:metal/block/chromium',
		'firmalife:metal/block/stainless_steel',
	]);

	e.add('tfc:forge_insulation', /.*mud_bricks.*/);
	e.add('tfc:bloomery_insulation', /.*mud_bricks.*/);
	e.add('firmalife:oven_insulation', /.*mud_bricks.*/);

	e.add('cold_sweat:hearth/spread_whitelist', /.*fence.*/);
	e.add('cold_sweat:hearth/spread_whitelist', /.*metal\/bars.*/);

        WRENCH_PICKUP.forEach((block) => {
        e.add('create:wrench_pickup', block);
    });

    e.add('tfc:prospectable', ['minecraft:amethyst_block', 'minecraft:amethyst_cluster'])
    e.add('precisionprospecting:prospectable_mineral', ['minecraft:amethyst_block', 'minecraft:amethyst_cluster'])


    e.add('tfc:needs_colored_steel_tool', ['minecraft:amethyst_block', 'minecraft:amethyst_cluster'])
    e.remove('scguns:fragile', ['amethyst_cluster'])

    e.add('create:chest_mounted_storage', /(tfc|afc):wood\/.*chest\//)
});
