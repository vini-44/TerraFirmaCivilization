// Server event handling for custom recipes and fluid tags
ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'tfc:heating' }, (recipe) => {
        // Discard metal/ore heating recipes for optimization
        if (!recipe.path.match(/heating\/(metal|ore).*/)) {
            //console.info(`Processing recipe: ${recipe.path}`);
            const json = recipe.json;
            const ingredient = json.get('ingredient');
            const resultItem = json.get('result_item');

            //console.info(`Ingredient: ${ingredient}`);
            //console.info(`Result Item: ${resultItem}`);

            if (resultItem != null && ingredient.get('type') != null && ingredient.get('type').getAsString() === 'tfc:not_rotten' && resultItem.get('stack') != null) {
                //console.info('Ingredient is food, creating recipes.');

                // Loop to create recipes with different quantities of ingredients
                for (let num = 1; num <= 5; num++) {
                    let ingredients = Array(num).fill(ingredient);
                    let fluidAmount = 50 * num;
                    let itemOutputs = Array(num).fill({
                        stack: resultItem.get('stack'),
                        modifiers: [
                            { type: 'tfc:add_trait', trait: 'kubejs:fried' },
                            'tfc:copy_food'
                        ]
                    });

                    event.custom({
                        type: 'tfc:pot',
                        ingredients: ingredients,
                        fluid_ingredient: {
                            ingredient: 'tfc:olive_oil',
                            amount: fluidAmount,
                        },
                        duration: 500,
                        temperature: 600,
                        item_output: itemOutputs
                    });

                    event.custom({
                        type: 'tfc:pot',
                        ingredients: ingredients,
                        fluid_ingredient: {
                            ingredient: 'createdieselgenerators:plant_oil',
                            amount: fluidAmount,
                        },
                        duration: 500,
                        temperature: 600,
                        item_output: itemOutputs
                    });

                }
            }
        }
    });
});

ServerEvents.tags('fluid', event => {
    // Adding fluids to custom and existing tags
    event.get('kubejs:frying_oils').add('tfc:olive_oil', 'createdieselgenerators:plant_oil');
    event.get('tfc:usable_in_barrel').add('createdieselgenerators:plant_oil');
    event.get('tfc:usable_in_pot').add('createdieselgenerators:plant_oil');
});
