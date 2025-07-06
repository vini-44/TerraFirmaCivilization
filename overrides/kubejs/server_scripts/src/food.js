ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('tfc:foods/usable_in_salad', 'kubejs:grasshopper');
    event.add('tfc:quail_food', 'kubejs:grasshopper');
    event.add('tfc:chicken_food', 'kubejs:grasshopper');
    event.add('tfc:duck_food', 'kubejs:grasshopper');


    event.add('tfc:foods/usable_in_salad', 'kubejs:cooked_grasshopper');
    event.add('tfc:quail_food', 'kubejs:cooked_grasshopper');
    event.add('tfc:chicken_food', 'kubejs:cooked_grasshopper');
    event.add('tfc:duck_food', 'kubejs:cooked_grasshopper');
    
});