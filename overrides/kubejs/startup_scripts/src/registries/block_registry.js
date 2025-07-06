StartupEvents.registry('block', (event) => {
	POWDERS.forEach((powder) => {
		let name = powder.replace(/_([a-z])/g, (match, char) => {
			return ` ${char.toUpperCase()}`;
		});
		let upperFirst = name.charAt(0).toUpperCase() + name.slice(1);
		event
			.create(`${powder}_powder_block`, 'falling')
			.hardness(0.5)
			.resistance(2)
			.opaque(true)
			.tagBlock('minecraft:valid_spawn')
			.tagBlock('firmalife:pipe_replaceable')
			.tagBlock('minecraft:mineable/shovel')
			.tagBlock('tfc:can_carve')
			.tagBlock('tfc:can_landslide')
			.displayName(`Block of ${upperFirst} Powder`)
			.mapColor('sand')
			.sandSoundType();
	});

	event
		.create('kyanite_dust_block', 'falling')
		.hardness(0.5)
		.resistance(2)
		.opaque(true)
		.tagBlock('minecraft:valid_spawn')
		.tagBlock('firmalife:pipe_replaceable')
		.tagBlock('minecraft:mineable/shovel')
		.tagBlock('tfc:can_carve')
		.tagBlock('tfc:can_landslide')
		.displayName('Block of Kyanite Dust')
		.mapColor('sand')
		.sandSoundType();

	event
		.create('ilmenite_powder_block', 'falling')
		.hardness(0.5)
		.resistance(2)
		.opaque(true)
		.tagBlock('minecraft:valid_spawn')
		.tagBlock('firmalife:pipe_replaceable')
		.tagBlock('minecraft:mineable/shovel')
		.tagBlock('tfc:can_carve')
		.tagBlock('tfc:can_landslide')
		.displayName('Block of Ilmenite Powder')
		.mapColor('sand')
		.sandSoundType();

	event
		.create('wolframite_powder_block', 'falling')
		.hardness(0.5)
		.resistance(2)
		.opaque(true)
		.tagBlock('minecraft:valid_spawn')
		.tagBlock('firmalife:pipe_replaceable')
		.tagBlock('minecraft:mineable/shovel')
		.tagBlock('tfc:can_carve')
		.tagBlock('tfc:can_landslide')
		.displayName('Block of Wolframite Powder')
		.mapColor('sand')
		.sandSoundType();

	event
		.create('titanium_powder_block', 'falling')
		.hardness(0.5)
		.resistance(2)
		.opaque(true)
		.tagBlock('minecraft:valid_spawn')
		.tagBlock('firmalife:pipe_replaceable')
		.tagBlock('minecraft:mineable/shovel')
		.tagBlock('tfc:can_carve')
		.tagBlock('tfc:can_landslide')
		.displayName('Block of Titanium Powder')
		.mapColor('sand')
		.sandSoundType();

	event
		.create('tungsten_powder_block', 'falling')
		.hardness(0.5)
		.resistance(2)
		.opaque(true)
		.tagBlock('minecraft:valid_spawn')
		.tagBlock('firmalife:pipe_replaceable')
		.tagBlock('minecraft:mineable/shovel')
		.tagBlock('tfc:can_carve')
		.tagBlock('tfc:can_landslide')
		.displayName('Block of Tungsten Powder')
		.mapColor('sand')
		.sandSoundType();

	let oil_shales = ['shale', 'claystone', 'phyllite', 'slate'];

	oil_shales.forEach((rock) => {
		let block = event.create('oil_' + rock);
		block.hardness(1.5);
		block.resistance(4);
		block.opaque(true);
		block.tag('forge:ores/oil_shale');
		block.tag('c:ores');
		block.tag('forge:ores');
		block.tagBlock('tfc:can_trigger_collapse');
		block.tagBlock('tfc:prospectable');
		block.tagBlock('tfc:can_collapse');
		block.tagBlock('minecraft:needs_stone_tool');
		block.tagBlock('tfc:can_start_collapse');
		block.tagBlock('tfc:monster_spawns_on');
		block.tagBlock('minecraft:mineable/pickaxe');
		block.tagBlock('tfc:powderkeg_breaking_blocks');
		block.tagBlock('tfc:rock/ores');
		block.tagBlock('precisionprospecting:prospectable_mineral');
		block.stoneSoundType();
		block.mapColor('deepslate');

        block.requiresTool(true);

		block.modelJson = {
			parent: 'tfc:block/ore',
			textures: {
				all: 'tfc:block/rock/raw/' + rock,
				overlay: 'kubejs:block/oil_ore',
			},
		};
		block.renderType('cutout');
	});

	SEDIMENTARY_ROCKS.forEach((rock) => {
		let block = event.create(rock + '_kaolinite');
		block.hardness(1.5);
		block.resistance(4);
		block.opaque(true);
		block.tag('forge:ores/kaolinite');
		block.tag('c:ores');
		block.tag('forge:ores');
		block.tagBlock('tfc:can_trigger_collapse');
		block.tagBlock('tfc:prospectable');
		block.tagBlock('tfc:can_collapse');
		block.tagBlock('minecraft:needs_stone_tool');
		block.tagBlock('tfc:can_start_collapse');
		block.tagBlock('tfc:monster_spawns_on');
		block.tagBlock('minecraft:mineable/pickaxe');
		block.tagBlock('tfc:powderkeg_breaking_blocks');
		block.tagBlock('tfc:rock/ores');
		block.tagBlock('precisionprospecting:prospectable_mineral');
		block.stoneSoundType();
        block.requiresTool(true);


		block.modelJson = {
			parent: 'tfc:block/ore',
			textures: {
				all: 'tfc:block/rock/raw/' + rock,
				overlay: 'kubejs:block/kaolinite_ore',
			},
		};
		block.renderType('cutout');
	});

	ALL_ROCKS.forEach((rock) => {
		let manganite = event.create(rock + '_manganite');

		manganite.hardness(1.5);
		manganite.resistance(4);
		manganite.opaque(true);
		manganite.tag('forge:ores/manganite');
		manganite.tag('c:ores');
		manganite.tag('forge:ores');
		manganite.tagBlock('tfc:can_trigger_collapse');
		manganite.tagBlock('tfc:prospectable');
		manganite.tagBlock('tfc:can_collapse');
		manganite.tagBlock('minecraft:needs_stone_tool');
		manganite.tagBlock('tfc:can_start_collapse');
		manganite.tagBlock('tfc:monster_spawns_on');
		manganite.tagBlock('minecraft:mineable/pickaxe');
		manganite.tagBlock('tfc:powderkeg_breaking_blocks');
		manganite.tagBlock('tfc:rock/ores');
		manganite.tagBlock('precisionprospecting:prospectable_mineral');
        manganite.requiresTool(true);

		manganite.stoneSoundType();

		manganite.modelJson = {
			parent: 'tfc:block/ore',
			textures: {
				all: 'tfc:block/rock/raw/' + rock,
				overlay: 'kubejs:block/manganite_ore',
			},
		};
		manganite.renderType('cutout');

		let wolframite = event.create(rock + '_wolframite');

		wolframite.hardness(1.5);
		wolframite.resistance(4);
		wolframite.opaque(true);
		wolframite.tag('forge:ores/wolframite');
		wolframite.tag('c:ores');
		wolframite.tag('forge:ores');
		wolframite.tagBlock('tfc:can_trigger_collapse');
		wolframite.tagBlock('tfc:prospectable');
		wolframite.tagBlock('tfc:can_collapse');
		wolframite.tagBlock('minecraft:needs_stone_tool');
		wolframite.tagBlock('tfc:can_start_collapse');
		wolframite.tagBlock('tfc:monster_spawns_on');
		wolframite.tagBlock('minecraft:mineable/pickaxe');
		wolframite.tagBlock('tfc:powderkeg_breaking_blocks');
		wolframite.tagBlock('tfc:rock/ores');
		wolframite.tagBlock('tfc:needs_colored_steel_tool');
		wolframite.stoneSoundType();
        wolframite.requiresTool(true);

		wolframite.modelJson = {
			parent: 'tfc:block/ore',
			textures: {
				all: 'tfc:block/rock/raw/' + rock,
				overlay: 'kubejs:block/wolframite_ore',
			},
		};
		wolframite.renderType('cutout');

		let ilmenite = event.create(rock + '_ilmenite');

		ilmenite.hardness(1.5);
		ilmenite.resistance(4);
		ilmenite.opaque(true);
		ilmenite.tag('forge:ores/ilmenite');
		ilmenite.tag('c:ores');
		ilmenite.tag('forge:ores');
		ilmenite.tagBlock('tfc:can_trigger_collapse');
		ilmenite.tagBlock('tfc:prospectable');
		ilmenite.tagBlock('tfc:can_collapse');
		ilmenite.tagBlock('minecraft:needs_stone_tool');
		ilmenite.tagBlock('tfc:can_start_collapse');
		ilmenite.tagBlock('tfc:monster_spawns_on');
		ilmenite.tagBlock('minecraft:mineable/pickaxe');
		ilmenite.tagBlock('tfc:powderkeg_breaking_blocks');
		ilmenite.tagBlock('tfc:rock/ores');
		ilmenite.tagBlock('tfc:needs_colored_steel_tool');
		ilmenite.stoneSoundType();
        ilmenite.requiresTool(true);

		ilmenite.modelJson = {
			parent: 'tfc:block/ore',
			textures: {
				all: 'tfc:block/rock/raw/' + rock,
				overlay: 'kubejs:block/ilmenite_ore',
			},
		};
		ilmenite.renderType('cutout');
	});

	ALL_ROCKS.forEach((rock) => {
		let block = event.create(rock + '_rhodocrosite');

		block.hardness(1.5);
		block.resistance(4);
		block.opaque(true);
		block.tag('forge:ores/rhodocrosite');
		block.tag('c:ores');
		block.tag('forge:ores');
		block.tagBlock('tfc:can_trigger_collapse');
		block.tagBlock('tfc:prospectable');
		block.tagBlock('tfc:can_collapse');
		block.tagBlock('minecraft:needs_stone_tool');
		block.tagBlock('tfc:can_start_collapse');
		block.tagBlock('tfc:monster_spawns_on');
		block.tagBlock('minecraft:mineable/pickaxe');
		block.tagBlock('tfc:powderkeg_breaking_blocks');
		block.tagBlock('tfc:rock/ores');
		block.tagBlock('precisionprospecting:prospectable_mineral');
        block.requiresTool(true);
		block.stoneSoundType();

		block.modelJson = {
			parent: 'tfc:block/ore',
			textures: {
				all: 'tfc:block/rock/raw/' + rock,
				overlay: 'kubejs:block/rhodocrosite_ore',
			},
		};
		block.renderType('cutout');
	});

	let refractory_bricks = event.create('refractory_bricks');
	refractory_bricks.requiresTool(true);
	refractory_bricks.tagBlock('tfc:blast_furnace_insulation');
	refractory_bricks.tagBlock('tfc:bloomery_insulation');
	refractory_bricks.tagBlock('minecraft:mineable/pickaxe');
	refractory_bricks.soundType(SoundType.DEEPSLATE);
	let kyanite_block = event.create('kyanite_block');

	kyanite_block.blockEntity((entityInfo) => {
		entityInfo.serverTick(1, 0, (entity) => {
			const {
				level,
				blockPos: { x, y, z },
				level: { server },
			} = entity;

			// Replace self with amethyst block
			server.runCommandSilent(`setblock ${x} ${y} ${z} amethyst_block`);

			const directions = [
				{ dx: 1, dy: 0, dz: 0, facing: 'east' },
				{ dx: -1, dy: 0, dz: 0, facing: 'west' },
				{ dx: 0, dy: 1, dz: 0, facing: 'up' },
				{ dx: 0, dy: -1, dz: 0, facing: 'down' },
				{ dx: 0, dy: 0, dz: 1, facing: 'south' },
				{ dx: 0, dy: 0, dz: -1, facing: 'north' },
			];

			for (const { dx, dy, dz, facing } of directions) {
				let target = level.getBlock(x + dx, y + dy, z + dz);
				if (
					target.id === 'minecraft:air' ||
					target.id === 'minecraft:cave_air'
				) {
					server.runCommandSilent(
						`setblock ${x + dx} ${y + dy} ${
							z + dz
						} minecraft:amethyst_cluster[facing=${facing}]`
					);
				}
			}
		});
	});
	let kyanite_placer = event.create('kyanite_placer');
	kyanite_placer.blockEntity((entityInfo) => {
		entityInfo.serverTick(1, 0, (entity) => {
			const {
				level,
				blockPos: { x, y, z },
				level: { server },
			} = entity;

			let max_size = Math.max(Math.round(Math.random() * 7), 3);

			let blockBelow = level.getBlock(x, y - 1, z);
			let blockAbove = level.getBlock(x, y + 1, z);
			let isSupported = true;
			if (
				(blockBelow.id != 'minecraft:air' &&
					blockBelow.id != 'minecraft:cave_air' &&
					blockAbove.id != 'minecraft:air' &&
					blockAbove.id != 'minecraft:cave_air') ||
				((blockBelow.id == 'minecraft:air' ||
					blockBelow.id == 'minecraft:cave_air') &&
					(blockAbove.id == 'minecraft:air' ||
						blockAbove.id == 'minecraft:cave_air'))
			) {
				server.runCommandSilent(`setblock ${x} ${y} ${z} air`);
				isSupported = false;
				return;
			}

			if (
				(blockAbove == 'minecraft:air' ||
					blockAbove == 'minecraft:cave_air') &&
				isSupported
			) {
				for (let i = 0; i < max_size; i++) {
					server.runCommandSilent(
						`setblock ${x} ${y + i} ${z} amethyst_block`
					);

					// Check adjacent blocks and place amethyst_cluster if air
					for (let dx = -1; dx <= 1; dx++) {
						for (let dz = -1; dz <= 1; dz++) {
							if (Math.abs(dx) + Math.abs(dz) === 1) {
								// only check adjacent blocks
								let facing =
									dx === 1
										? 'east'
										: dx === -1
										? 'west'
										: dz === 1
										? 'south'
										: 'north';
								let adjacentBlockIsAir =
									level.getBlock(x + dx, y + i, z + dz).id ==
										'minecraft:air' ||
									level.getBlock(x + dx, y + i, z + dz).id ==
										'minecraft:cave_air';

								if (Math.random() > 0.5 && adjacentBlockIsAir) {
									server.runCommandSilent(
										`setblock ${x + dx} ${y + i} ${
											z + dz
										} amethyst_cluster[facing=${facing}]`
									);
								}
							}
						}
					}
				}
				let topBlockIsAir =
					level.getBlock(x, y + max_size, z).id == 'minecraft:air' ||
					level.getBlock(x, y + max_size, z).id ==
						'minecraft:cave_air';
				if (topBlockIsAir) {
					server.runCommandSilent(
						`setblock ${x} ${
							y + max_size
						} ${z} amethyst_cluster[facing=up]`
					);
				}
			}

			if (
				(blockBelow == 'minecraft:cave_air' ||
					blockBelow == 'minecraft:air') &&
				isSupported
			) {
				for (let i = 0; i < max_size; i++) {
					server.runCommandSilent(
						`setblock ${x} ${y - i} ${z} amethyst_block`
					);
					// Check adjacent blocks and place amethyst_cluster if air
					for (let dx = -1; dx <= 1; dx++) {
						for (let dz = -1; dz <= 1; dz++) {
							if (Math.abs(dx) + Math.abs(dz) === 1) {
								// only check adjacent blocks
								let facing =
									dx === 1
										? 'east'
										: dx === -1
										? 'west'
										: dz === 1
										? 'south'
										: 'north';

								let adjacentBlockIsAir =
									level.getBlock(x + dx, y - i, z + dz).id ==
									'minecraft:air';

								if (Math.random() > 0.5 && adjacentBlockIsAir) {
									server.runCommandSilent(
										`setblock ${x + dx} ${y - i} ${
											z + dz
										} amethyst_cluster[facing=${facing}]`
									);
								}
							}
						}
					}
				}

				let topBlockIsAir =
					level.getBlock(x, y - max_size, z).id == 'minecraft:air';
				if (topBlockIsAir) {
					server.runCommandSilent(
						`setblock ${x} ${
							y - max_size
						} ${z} amethyst_cluster[facing=down]`
					);
				}
			}
		});
	});
});
