let item_data = {
	'scguns:diamond_steel_helmet': { heat: 2, cold: 7 },
	'scguns:diamond_steel_chestplate': { heat: 2, cold: 8 },
	'scguns:diamond_steel_boots': { heat: 2, cold: 7 },
	'scguns:diamond_steel_leggings': { heat: 3, cold: 6 },
};

let simple_powered_block = {
	'#kubejs:ceiling_fans': {
		temp: -0.27,
		unit: 'mc',
		maxEffect: -0.88,
		minTemp: -1.5,
		range: 8,
	},
	'#kubejs:electricity_generators': {
		temp: 0.27,
		unit: 'mc',
		maxEffect: 0.88,
		maxTemp: 1.5,
		range: 8,
	},
	'createaddition:small_light_connector': {
		temp: 0.1,
		unit: 'mc',
		maxEffect: 0.88,
		maxTemp: 1.5,
		range: 2,
	},
};

ColdSweatEvents.registries((event) => {
	//armor items
	for (const [item, data] of Object.entries(item_data)) {
		event.addInsulator((insulator) => {
			insulator
				.items(item)
				.slot('armor')
				.insulation(data.cold, data.heat);
		});
	}

	//block temps.
	for (const [block, data] of Object.entries(simple_powered_block)) {
		event.addBlockTemperature(data.temp, data.unit, (blockTemp) => {
			blockTemp
				.blocks(block)
				.state('powered', true)
				.units(data.unit)
				.maxEffect(data.maxEffect)

				.range(data.range)

				.fades(true);

			if (data.minTemp) {
				blockTemp.minTemperature(data.minTemp);
			}
			if (data.maxTemp) {
				blockTemp.maxTemperature(data.maxTemp);
			}
		});
	}

	event.addBlockTemperature(0.27 * 2, 'mc', (blockTemp) => {
		blockTemp
			.blocks('create:blaze_burner')
			.state('blaze', 'kindled')
			.units('mc')
			.maxEffect(3)
			.maxTemperature(3)
			.range(8)
			.fades(true);
	});

	event.addBlockTemperature(0.27 * 3, 'mc', (blockTemp) => {
		blockTemp
			.blocks('create:blaze_burner')
			.state('blaze', 'seething')
			.units('mc')
			.maxEffect(3)
			.maxTemperature(3)
			.range(16)
			.fades(true);
	});

	let engines = [
		'createdieselgenerators:large_diesel_engine',
		'createdieselgenerators:powered_engine_shaft',
		'createdieselgenerators:diesel_engine',
	].forEach((engine) => {
		event.addBlockTemperature(
			(blockTemp) => {
				blockTemp
					.blocks(engine)
					.units('mc')
					.maxEffect(1.5)
					.maxTemperature(1.5)
					.range(8)
					.fades(true);
			},
			(level, entity, state, pos, distance) => {
				let be = level.getBlockEntity(pos);
				if (be == null) return 0;

				let speed = be.getGeneratedSpeed();

				return (speed != 0 && 0.27) || 0;
			}
		);
	});
	let thermal_machines = {
		'thermal:machine_refinery': 0.27,
		'thermal:machine_sawmill': 0.1,
		'thermal:machine_pyrolyzer': 0.27 * 2,
	};

	for (const [block, temp] of Object.entries(thermal_machines)) {
		event.addBlockTemperature(temp, 'mc', (blockTemp) => {
			blockTemp
				.blocks(block)
				.units('mc')
				.maxEffect(1.5)
				.maxTemperature(1.5)
				.range(8)
				.state('active', true)
				.fades(true);
		});
	}
});
