const plant_defs = {
	basil: {
		chance: 30,
		min_temperature: 18,
		max_temperature: 40,
		min_rainfall: 200,
		max_rainfall: 400,
	},
	bay_laurel: {
		chance: 30,
		min_temperature: 22,
		max_temperature: 40,
		min_rainfall: 120,
		max_rainfall: 400,
	},
	cardamom: {
		chance: 30,
		min_temperature: 18,
		max_temperature: 40,
		min_rainfall: 300,
		max_rainfall: 400,
	},
	cilantro: {
		chance: 30,
		min_temperature: 14,
		max_temperature: 40,
		min_rainfall: 100,
		max_rainfall: 400,
	},
	cumin: {
		chance: 30,
		min_temperature: 14,
		max_temperature: 40,
		min_rainfall: 80,
		max_rainfall: 300,
	},
	oregano: {
		chance: 30,
		min_temperature: 18,
		max_temperature: 40,
		min_rainfall: 80,
		max_rainfall: 200,
	},
	pimento: {
		chance: 30,
		min_temperature: 18,
		max_temperature: 40,
		min_rainfall: 300,
		max_rainfall: 400,
	},
	vanilla: {
		chance: 30,
		min_temperature: 18,
		max_temperature: 40,
		min_rainfall: 80,
		max_rainfall: 300,
	},
};

ServerEvents.tags('worldgen/placed_feature', (event) => {
	event.add('tfc:in_biome/veins', 'tfc:vein/normal_oil_shale');
	event.add('tfc:in_biome/veins', 'tfc:vein/rich_oil_shale');
	event.add('tfc:in_biome/veins', 'tfc:vein/rich_oil_shale_ocean');
	event.add('tfc:in_biome/veins', 'tfc:vein/graphite_small');

	event.add('tfc:in_biome/veins', 'tfc:vein/kaolinite');
    event.add('tfc:in_biome/veins', 'tfc:vein/kaolinite_large');
	event.add('tfc:in_biome/veins', 'tfc:vein/manganite');
	event.add('tfc:in_biome/veins', 'tfc:vein/rhodocrosite');
	event.add('tfc:in_biome/veins', 'tfc:vein/rhodocrosite_silver');

	event.add('tfc:in_biome/veins', 'tfc:vein/wolframite');
	event.add('tfc:in_biome/veins', 'tfc:vein/ilmenite');


	event.add('tfc:in_biome/veins', 'tfc:vein/kyanite_test');


	event.add('tfc:in_biome/veins', 'tfc:vein/sulfur_volcanic');


	for (let [plant, def] of Object.entries(plant_defs)) {
		event.add('tfc:feature/land_plants', 'tfc:plant/' + plant + '_patch');
	}
});

ServerEvents.tags('worldgen/biome', (event) => {
	event.add('createdieselgenerators:oil_biomes', '#tfc:is_ocean');
    event.add('tfc:manganite_spawns_in', ['tfc:lowlands'])
    event.add('tfc:kaolin_clay_spawns_in', /.*tfc.*/)
});

//global modifier for all ores for them to be rarer and bigger.

ServerEvents.highPriorityData((event) => {
	let biomeJsonFolder = global.readJsonFolderFromMod(
		'data',
		'tfc',
		'worldgen',
		(rl) => rl.path.contains('worldgen/biome')
	);
	for (let [datapath, _json] of Object.entries(biomeJsonFolder)) {
		_json = JsonIO.toObject(_json);
		_json.creature_spawn_probability =
			_json.creature_spawn_probability + 0.07;

		event.addJson(datapath, _json);
	}

	let oreJsonFolder = global.readJsonFolderFromMod(
		'data',
		'tfc',
		'worldgen',
		(rl) => rl.path.contains('configured_feature/vein')
	);

	for (let [datapath, _json] of Object.entries(oreJsonFolder)) {
		_json = JsonIO.toObject(_json);

		_json.config.rarity = _json.config.rarity * 16;
		_json.config.density = _json.config.density * 0.8;

		if (_json.config.density > 1) {
			_json.config.density = 1;
		}

		if (_json.config.size) {
			_json.config.size = _json.config.size * 3;
		}

		if (_json.config.radius) {
			_json.config.radius = _json.config.radius * 3;
		}

		if (_json.config.indicator) {
			_json.config.indicator.rarity =
				_json.config.indicator.rarity * 0.75;
			_json.config.indicator.depth = _json.config.indicator.depth * 2;
		}

		event.addJson(datapath, _json);
	}

	let FLOreJsonFolder = global.readJsonFolderFromMod(
		'data',
		'firmalife',
		'worldgen',
		(rl) => rl.path.contains('configured_feature/vein')
	);

	for (let [datapath, _json] of Object.entries(FLOreJsonFolder)) {
		_json = JsonIO.toObject(_json);

		_json.config.rarity = _json.config.rarity * 16;
		_json.config.density = _json.config.density * 0.8;

		if (_json.config.density > 1) {
			_json.config.density = 1;
		}

		if (_json.config.size) {
			_json.config.size = _json.config.size * 3;
		}

		if (_json.config.radius) {
			_json.config.radius = _json.config.radius * 3;
		}

		if (_json.config.indicator) {
			_json.config.indicator.rarity =
				_json.config.indicator.rarity * 0.75;
			_json.config.indicator.depth = _json.config.indicator.depth * 2;
		}

		event.addJson(datapath, _json);
	}
});

//Doing plant worldgen here because going back and forth on the folders is a pain.

ServerEvents.highPriorityData((event) => {
	for (let [plant, def] of Object.entries(plant_defs)) {
		let config_patch = {
			type: 'minecraft:random_patch',
			config: {
				tries: 10,
				xz_spread: 10,
				y_spread: 1,
				feature: 'tfc:plant/' + plant,
			},
		};

		let config = {
			type: 'minecraft:simple_block',
			config: {
				to_place: {
					type: 'tfc:random_property',
					state: {
						Name: 'firmalife:plant/' + plant,
						Properties: {
							age: '0',
						},
					},
					property: 'age',
				},
			},
		};

		let placed_patch = {
			feature: 'tfc:plant/' + plant + '_patch',
			placement: [
				{
					type: 'minecraft:rarity_filter',
					chance: def.chance,
				},
				{
					type: 'minecraft:in_square',
				},
				{
					type: 'minecraft:heightmap',
					heightmap: 'WORLD_SURFACE_WG',
				},
				{
					type: 'tfc:climate',
					min_temperature: def.min_temperature,
					max_temperature: def.max_temperature,
					min_rainfall: def.min_rainfall,
					max_rainfall: def.max_rainfall,
				},
			],
		};

		let placed = {
			feature: 'tfc:plant/' + plant,
			placement: [
				{
					type: 'minecraft:heightmap',
					heightmap: 'WORLD_SURFACE_WG',
				},
				{
					type: 'block_predicate_filter',
					predicate: {
						type: 'tfc:air_or_empty_fluid',
					},
				},
				{
					type: 'block_predicate_filter',
					predicate: {
						type: 'would_survive',
						state: {
							Name: 'firmalife:plant/' + plant,
							Properties: {
								age: '0',
							},
						},
					},
				},
			],
		};

		event.addJson('tfc:worldgen/configured_feature/plant/' + plant, config);
		event.addJson(
			'tfc:worldgen/configured_feature/plant/' + plant + '_patch',
			config_patch
		);
		event.addJson('tfc:worldgen/placed_feature/plant/' + plant, placed);
		event.addJson(
			'tfc:worldgen/placed_feature/plant/' + plant + '_patch',
			placed_patch
		);
	}
});
