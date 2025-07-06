ServerEvents.loaded((event) => {
	if (event.server.persistentData.gameRules) return;

	event.server.gameRules.set('doPatrolSpawning', true);
	event.server.gameRules.set('doTraderSpawning', false);
	event.server.gameRules.set('doInsomnia', false);
	event.server.gameRules.set('naturalRegeneration', false);

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

BlockEvents.placed((e) => {
	let { x, y, z } = e.block.pos;
	if (e.block.id == 'moreburners:electric_burner') {
		e.block.set('moreburners:electric_burner', {
			upgraded: true,
		});

		e.server.runCommandSilent(
			`data modify block ${x} ${y} ${z} upgraded set value 1b`
		);
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

EntityEvents.spawned('item', (e) => {
	if (e.entity.item.id != 'createbigcannons:empty_machine_gun_round') return;
	e.server.scheduleInTicks(0, () => {
		e.entity.item = Item.of('scguns:large_brass_casing');
	});
});
