const item_data = {
	'scguns:diamond_steel_helmet': { heat: 2, cold: 7 },
	'scguns:diamond_steel_chestplate': { heat: 2, cold: 8 },
	'scguns:diamond_steel_boots': { heat: 2, cold: 7 },
	'scguns:diamond_steel_leggings': { heat: 3, cold: 6 },
};

const simple_powered_block = {
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

const engines = [
	'createdieselgenerators:large_diesel_engine',
	'createdieselgenerators:powered_engine_shaft',
	'createdieselgenerators:diesel_engine',
];

const thermal_machines = {
	'thermal:machine_refinery': 0.27,
	'thermal:machine_pyrolyzer': 0.27 * 2,
	'thermal:machine_furnace': 0.27 * 2,
};

ColdSweatEvents.registries((event) => {
	//armor items
	for (const [item, data] of Object.entries(item_data)) {
		event.addInsulator((insulator) => {
			insulator.items([item]); //not chaining methods to test if that's the cause, despite probe telling me I can do that.
			insulator.slot('armor');
			insulator.insulation(data.cold, data.heat);
		});
	}

    event.addBoilerFuel(fuelbuider => {
        fuelbuider.items(['thermal:coal_coke'])
        fuelbuider.fuel(128)
    })

        event.addHearthFuel(fuelbuider => {
        fuelbuider.items(['thermal:coal_coke'])
        fuelbuider.fuel(128)
    })


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

	engines.forEach((engine) => {
		event.addBlockTemperature(
			(blockTemp) => {
				blockTemp
					.blocks(engine)
					.units('mc')
					.maxEffect(3)
					.maxTemperature(3)
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

	for (const [block, temp] of Object.entries(thermal_machines)) {
		event.addBlockTemperature(temp, 'mc', (blockTemp) => {
			blockTemp
				.blocks(block)
				.units('mc')
				.maxEffect(3)
				.maxTemperature(3)
				.range(8)
				.state('active', true)
				.fades(true);
		});
	}
});
