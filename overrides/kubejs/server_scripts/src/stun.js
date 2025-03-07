EntityEvents.hurt((event) => {
    if (event.source.getType() == 'explosion.player' || event.source.getType() == 'createbigcannons.cannon_projectile') {
		event.entity.potionEffects.add(
			'scguns:deafened',
            Math.floor(
				event.damage +
					20 * (1 + event.entity.maxHealth / event.entity.health)
			+ 3),
			0,
			false,
			true
		);
    }
});
