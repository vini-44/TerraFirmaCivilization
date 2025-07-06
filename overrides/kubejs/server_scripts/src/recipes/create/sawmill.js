// priority: 50

ServerEvents.recipes((event) => {
	WOOD_TYPES.forEach((type) => {
		event.recipes.create.cutting(
			Item.of(`8x tfc:wood/lumber/${type}`),
			Item.of(`tfc:wood/log/${type}`)
		).processingTime(500);
	});

	AFC_WOOD_TYPES.forEach((type) => {
		event.recipes.create.cutting(
			Item.of(`8x afc:wood/lumber/${type}`),
			Item.of(`afc:wood/log/${type}`)
		).processingTime(500);
	});
});
