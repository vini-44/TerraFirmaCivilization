TFCEvents.registerFoodTrait((event) => {
	event.registerTraitWithTooltip(0.25, 'kubejs:fried');
});

BlockEvents.modification((e) => {
	//e.modify(/tfc:rock.*/, block => {
	//    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
	//})
	//e.modify(/tfc:dirt.*/, block => {
	//    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
	//})
	//e.modify(/tfc:ore.*/, block => {
	//    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
	//})
	//e.modify(/tfc:wood\/log.*/, block => {
	//    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
	//})
	e.modify(/.*unbored.*/, (block) => {
		block.destroySpeed =
			Block.getBlock(block.id).defaultDestroyTime() * 0.25; //0.75
	});

	e.modify(/.*concrete.*/, (block) => {
		block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 2;
	});

	e.modify(/.*brick.*/, (block) => {
		block.destroySpeed =
			Block.getBlock(block.id).defaultDestroyTime() * 1.25;
	});

	e.modify('amethyst_cluster', (block) => {
		block.requiresTool = true;
		block.destroySpeed =
			Block.getBlock('minecraft:obsidian').defaultDestroyTime();
	});

	e.modify('amethyst_block', (block) => {
		block.requiresTool = true;
		block.destroySpeed =
			Block.getBlock('minecraft:obsidian').defaultDestroyTime();
	});
});

StartupEvents.init(() => {
	Platform.mods.kubejs.name = 'Sulidae';
});

TFCEvents.birthdays((event) => {
	event.add('march', 24, 'Atobá');
	event.add('february', 2, 'Albatroz');
});

const $HitResultType = Java.loadClass(
	'net.minecraft.world.phys.HitResult$Type'
);

const $RocketEntity = Java.loadClass(
	'top.ribs.scguns.entity.projectile.RocketEntity'
);

ForgeEvents.onEvent('top.ribs.scguns.event.GunProjectileHitEvent', (event) => {
	/**@type {Internal.Projectile} */
	let projectile = event.projectile;

	/**@type {Internal.BlockHitResult} */
	let rayTrace = event.getRayTrace();

	/**@type {Internal.Level} */
	let level = projectile.getLevel();

	if (rayTrace.getType() === $HitResultType.BLOCK) {
		let block = level.getBlock(rayTrace.getBlockPos());
		let dir = rayTrace.getDirection().getOpposite();

		if (block.hasTag('createbigcannons:spark_effect_on_impact')) {
			let pos = rayTrace.getBlockPos();
			level.runCommandSilent(
				`particle tfc:spark ${pos.x} ${pos.y} ${pos.z} ${dir.x} ${dir.y} ${dir.z} 0.5 100 force`
			);

			//level.runCommandSilent(`playsound tfc:block.anvil.hit block @a ${pos.x} ${pos.y} ${pos.z} 1 ${Math.random()*1.5+0.5} 0`)
		}
	}
});

const $ServerLevel = Java.loadClass('net.minecraft.server.level.ServerLevel');
const $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity');
const $MobEffectInstance = Java.loadClass(
	'net.minecraft.world.effect.MobEffectInstance'
);

const $EffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance');
const $ChemSprayerProjectile = Java.loadClass(
    'com.jesz.createdieselgenerators.content.tools.ChemicalSprayerProjectileEntity'
);


ForgeEvents.onEvent(
	'net.minecraftforge.event.entity.ProjectileImpactEvent',
	(event) => {
		/**@type {Internal.Projectile} */
		let projectile = event.projectile;

		if (!(projectile instanceof $ChemSprayerProjectile)) {
			return;
		}

		/**@type {Internal.EntityHitResult} */
		let rayTrace = event.getRayTraceResult();

		/**@type {Internal.ServerLevel} */
		let level = projectile.getLevel();

		if (level instanceof $ServerLevel) {
			if (
				rayTrace.getType() === $HitResultType.ENTITY &&
				rayTrace.getEntity() != null &&
				projectile.isOnFire()
			) {
				/**@type {Internal.LivingEntity} */
				let entity = rayTrace.getEntity();

				if (entity instanceof $LivingEntity) {
					entity.addEffect(
						new $EffectInstance('supplementaries:flammable', 40)
					);
				}
			}
		}
	}
);
