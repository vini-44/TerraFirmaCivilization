// This script ensures that specific game rules are set only once and handles right-click events
// for custom items: 'kubejs:handheld_mortar' and 'kubejs:autocannon'.

// Ensure that the game rules are set only once when the server is loaded
ServerEvents.loaded((event) => {
	// Check if game rules are already set
	if (event.server.persistentData.gameRules) return;

	event.server.gameRules.set('doPatrolSpawning', true);
	event.server.gameRules.set('doTraderSpawning', false);
	event.server.gameRules.set('doInsomnia', false);
	event.server.gameRules.set('naturalRegeneration', false);

	// Mark game rules as set in persistent data to prevent re-execution
	event.server.persistentData.gameRules = true;
});

const UPDATE_FREQUENCY = 400;

PlayerEvents.tick((event) => {
	let player = event.player;

	if (player.hasEffect('bad_omen')) {
		player.removeEffect('bad_omen');
	}

	if (player.age % UPDATE_FREQUENCY !== 0) {
		return;
	}

	for (let i = 0; i < player.handSlots.length; i++) {
		let item = player.handSlots[i];
		if (
			(item.id == 'tfccanes:refined_walking_cane' ||
				item.id == 'tfccanes:walking_cane') &&
			!player.isCreative() &&
			player.sprinting
		) {
			item.damageValue++;
			if (item.damageValue > item.maxDamage) {
				item.count--;
			}
			break;
		}
	}
});

const $WorldOptions = Java.loadClass(
	'net.minecraft.world.level.levelgen.WorldOptions'
);

PlayerEvents.loggedIn((event) => {
	if (
		!event.player.persistentData.givenStartLoot &&
		event.level.server.worldData.worldGenOptions().generateBonusChest()
	) {
		event.player.persistentData.givenStartLoot = true;
		event.server.runCommandSilent(
			`loot give ${event.player.name.string} loot minecraft:chests/spawn_bonus_chest`
		);
	}
});

LootJS.modifiers((event) => {
	event
		.addLootTableModifier('minecraft:chests/spawn_bonus_chest')
		.removeLoot(/.*/)
		.addWeightedLoot([16, 24], ['tfc:torch', 'scguns:basic_poultice'])
		.addWeightedLoot(1, [
			'tfc:metal/axe/copper',
			'tfc:metal/shovel/copper',
			'tfc:metal/propick/copper',
		])
		.addWeightedLoot(1, [
			'tfc:ceramic/cyan_glazed_vessel',
			'tfc:ceramic/purple_glazed_vessel',
			'tfc:ceramic/blue_glazed_vessel',
			'tfc:ceramic/brown_glazed_vessel',
			'tfc:ceramic/green_glazed_vessel',
			'tfc:ceramic/red_glazed_vessel',
			'tfc:ceramic/black_glazed_vessel',
			'tfc:ceramic/light_gray_glazed_vessel',
			'tfc:ceramic/gray_glazed_vessel',
			'tfc:ceramic/pink_glazed_vessel',
			'tfc:ceramic/lime_glazed_vessel',
			'tfc:ceramic/yellow_glazed_vessel',
			'tfc:ceramic/light_blue_glazed_vessel',
			'tfc:ceramic/white_glazed_vessel',
			'tfc:ceramic/orange_glazed_vessel',
			'tfc:ceramic/magenta_glazed_vessel',
		])
		.addWeightedLoot(1, [
			'textile:raw_socks',
			'minecraft:leather_boots',
		])
		.addWeightedLoot(1, [
			'textile:raw_pants',
			'minecraft:leather_leggings',
		])
		.addWeightedLoot(1, [
			'textile:raw_shirt',
			'minecraft:leather_chestplate',
		])
		.addWeightedLoot(1, [
			'textile:raw_hat',
			'minecraft:leather_helmet',
		])
		.addLoot([
			'tfc:metal/saw/copper',
			'tfc:metal/pickaxe/copper',
			'tfc:ceramic/jug',
		]);
    });

BlockEvents.placed((e) => {
	let { x, y, z } = e.block.pos;
	if (e.block.id == 'moreburners:electric_burner') {
		e.block.set('moreburners:electric_burner', {
			upgraded: true,
		});
	}

	if (
		e.block.id == 'refurbished_furniture:light_electricity_generator' ||
		e.block.id == 'refurbished_furniture:dark_electricity_generator'
	) {
		e.server.runCommandSilent(
			`data modify block ${x} ${y} ${z} Enabled set value 1b`
		);
	}
});

BlockEvents.rightClicked((event) => {
	if (
		event.block.id == 'refurbished_furniture:dark_electricity_generator' ||
		event.block.id == 'refurbished_furniture:light_electricity_generator'
	) {
		event.cancel();
	}
});
