TFCEvents.data((event) => {
    
	event.foodItem('kubejs:grasshopper', (food) => {

		food.protein(0.2);
		
	});

	event.foodItem('kubejs:cooked_grasshopper', (food) => {

		food.protein(0.5);
		
	});

	



});

ServerEvents.recipes((event) => {
	event.recipes.tfc.heating('kubejs:grasshopper', 80)
    // Additional methods
    .resultItem('kubejs:cooked_grasshopper')
 
});
