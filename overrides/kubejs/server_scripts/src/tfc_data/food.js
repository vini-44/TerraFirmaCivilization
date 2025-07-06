TFCEvents.data((event) => {
	event.foodItem('minecraft:golden_apple', (food) => {
		food.hunger(3);
		food.saturation(3);
		food.protein(5);
		food.fruit(5);
		food.grain(5);
		food.vegetables(5);
		food.dairy(5);
	});
})