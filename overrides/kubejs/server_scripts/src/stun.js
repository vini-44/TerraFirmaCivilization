EntityEvents.hurt((event) => {
	if (
		event.source.getType() == 'explosion.player' ||
		event.source.getType() == 'createbigcannons.cannon_projectile'
	) {
		event.entity.potionEffects.add(
			'scguns:deafened',
			Math.floor(
				event.damage +
					20 * (1 + event.entity.maxHealth / event.entity.health) +
					3
			),
			0,
			false,
			true
		);
	}
});

//TODO: Temp

BlockEvents.placed('budding_amethyst', (event) => {
	let max_size = Math.max(Math.round(Math.random() * 7), 3);
	let { x, y, z } = event.block;

  let blockBelow = event.level.getBlock(x, y - 1, z);
  let blockAbove = event.level.getBlock(x, y + 1, z);



	if (blockAbove == 'minecraft:air' || blockAbove == 'minecraft:cave_air') {
		for (let i = 0; i < max_size; i++) {
			event.server.runCommandSilent(
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
							event.level.getBlock(x + dx, y + i, z + dz).id ==
							'minecraft:air' || event.level.getBlock(x + dx, y + i, z + dz).id == 'minecraft:cave_air';

						if (Math.random() > 0.5 && adjacentBlockIsAir) {
							event.server.runCommandSilent(
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
			event.level.getBlock(x, y + max_size, z).id == 'minecraft:air' || event.level.getBlock(x, y + max_size, z).id == 'minecraft:cave_air';
		if (topBlockIsAir) {
			event.server.runCommandSilent(
				`setblock ${x} ${y + max_size} ${z} amethyst_cluster[facing=up]`
			);
		}
	} 
    
    if (blockBelow == 'minecraft:cave_air' || blockBelow == 'minecraft:air') {
		for (let i = 0; i < max_size; i++) {
			event.server.runCommandSilent(
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
							event.level.getBlock(x + dx, y - i, z + dz).id ==
							'minecraft:air';

						if (Math.random() > 0.5 && adjacentBlockIsAir) {
							event.server.runCommandSilent(
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
			event.level.getBlock(x, y - max_size, z).id == 'minecraft:air';
		if (topBlockIsAir) {
			event.server.runCommandSilent(
				`setblock ${x} ${
					y - max_size
				} ${z} amethyst_cluster[facing=down]`
			);
		}
	}

    if (blockBelow.id != 'minecraft:air' && blockBelow.id != 'minecraft:cave_air' && blockAbove.id != 'minecraft:air' && blockAbove.id != 'minecraft:cave_air') {
        event.server.runCommandSilent(`setblock ${x} ${y} ${z} air`)
    }
});
