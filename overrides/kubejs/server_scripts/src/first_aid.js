//requires: firstaid

console.info("First Aid Loaded! Loading default compatibility!")

//Nutrition values compat.

/**
 * Updates the player's maximum health based on their nutrition levels.
 * @param {Internal.SimplePlayerEventJS|Internal.FoodEatenEventJS} event
 */
function UpdateHealthValue(event) {
    let player = event.player;

    //TODO: do beans work with modded methods?
    // Get the player nutrition value
    const nutrients = player.getFoodData().getNutrition().getNutrients();
    //set the player health attribute to the average of the nutrients
    player.setAttributeBaseValue(
        'minecraft:generic.max_health',
        20 *
            ((nutrients[0] +
                nutrients[1] +
                nutrients[2] +
                nutrients[3] +
                nutrients[4]) /
                5) *
            3.0
    );
}

PlayerEvents.loggedIn((event) => {
    //Delay by 1 tick because getFoodData is null on login.
    event.server.scheduleInTicks(1, () => {
        UpdateHealthValue(event)
    })
});

ItemEvents.foodEaten(UpdateHealthValue);

//Recipes

ServerEvents.recipes((event) => {
    event.remove({mod: 'firstaid'})

    event.shapeless('6x firstaid:bandage', ['#tfc:high_quality_cloth', '#forge:string'])
})

