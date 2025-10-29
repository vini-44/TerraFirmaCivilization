// priority: 50

let potionDefs = {};

/*for (let itemStack of Ingredient.all.displayStacks) {
    if (
        itemStack.hasTag('tfc:plants') &&
        itemStack.hasTag('minecraft:flowers')
    ) {
        tfcFlowers.push(itemStack.id);
    }
}*/

ServerEvents.loaded((event) => {
	const { server } = event;

	global.WorldSeed = server.worldData.worldGenOptions().seed();

	server.scheduleInTicks(10, () => server.runCommandSilent('reload'));
});

let random = Utils.newRandom(global.WorldSeed);

function randomEntry(array) {
	let int = Math.floor(random.nextDouble() * array.length);
	return array[int];
}
const POTION_MOB_EFFECTS_MAP = {
	'minecraft:leaping': 'minecraft:jump_boost',
	'minecraft:healing': 'minecraft:instant_health',
	'minecraft:swiftness': 'minecraft:speed',
	'minecraft:harming': 'minecraft:instant_damage',
	'minecraft:weakness': 'minecraft:weakness',
	'minecraft:luck': 'minecraft:luck',
	'quark:resilience': 'quark:resilience',
	'minecraft:strength': 'minecraft:strength',
	'minecraft:regeneration': 'minecraft:regeneration',
	'minecraft:poison': 'minecraft:poison',
	'minecraft:slowness': 'minecraft:slowness',
};

for (const flower of BREW_FLOWERS) {
	let pick = randomEntry(BREW_EFFECTS);
	potionDefs[flower] = [pick, POTION_MOB_EFFECTS_MAP[pick]];
}

ServerEvents.lowPriorityData((event) => {
	for (const [key, value] of Object.entries(potionDefs)) {
		let json = {
			ingredient: `kubejs:${key}_brew`,
			thirst: 10,
			intoxication: 0,
			effects: [
				{
					type: value[1],
					duration:
						value[1] == 'minecraft:instant_damage' ||
						value[1] == 'minecraft:instant_health'
							? 1
							: 600 * randomEntry(BREW_DURATION_MULTS),
					amplifier: 1,
					chance: 1,
				},
			],
			may_drink_when_full: true,
		};

		let recipeJson = {
			type: 'tfc:pot',
			ingredients: [
				{
					item: `tfc:plant/${key}`,
				},
				{
					type: 'tfc:not_rotten',
					ingredient: [
						{
							tag: 'kubejs:brew_fruit_ingredients',
						},
					],
				},
				{
					tag: 'kubejs:brew_ingredients',
				},
				//{
				//	item: randomEntry(VALID_TFC_POWDERS),
				//},
			],
			fluid_ingredient: {
				ingredient: 'minecraft:water',
				amount: 1000,
			},
			duration: 2000,
			temperature: 600,
			fluid_output: {
				fluid: `kubejs:${key}_brew`,
				amount: 1000,
			},
		};

		let distillingJson = {
			type: 'createdieselgenerators:distillation',
			ingredients: [
				{
					fluid: `kubejs:${key}_brew`,
					amount: 100,
				},
			],
			heatRequirement: 'heated',
			processingTime: 100,
			results: [
				{
					fluid: 'create:potion',
					nbt: {
						Bottle: 'REGULAR',
						Potion: value[0],
					},
					amount: 50,
				},
			],
		};

		event.addJson(`kubejs:tfc/drinkables/${key}`, json);
		event.addJson(`kubejs:recipes/pot/${key}`, recipeJson);
		event.addJson(
			`kubejs:recipes/distilling/brew_${value[0].replace(
				/^[^:]*:/,
				''
			)}_${key.replace(/^[^:]*:/, '')}`,
			distillingJson
		);
	}
});

ServerEvents.recipes((event) => {
	event.custom({
		type: 'createdieselgenerators:distillation',
		ingredients: [
			{
				fluidTag: `kubejs:flower_brew`,
				amount: 100,
                nbt: { //to prevent actually crafting this recipe.
                    invalid: true
                }
			},
		],
		heatRequirement: 'heated',
		processingTime: 100,
		results: [
			{
				fluid: 'kubejs:any_potion',
				amount: 50,
			},
		],
	}).id('kubejs:distilling/any_potion_display_only');
});
