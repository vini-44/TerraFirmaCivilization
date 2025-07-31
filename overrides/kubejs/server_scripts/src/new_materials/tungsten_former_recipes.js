//priority: -100

ServerEvents.recipes((e) => {
	function AddFormerRecipe(result, input, tier, id) {
		e.recipes.kubejs
			.metal_former()
			.id(id)
			.duration(200 * tier)
			.chance(0, (builder) => {
				builder.inputItems(Item.of(result, 1));
			})
			.inputItems(input)
			.outputItems(Item.of(result))
			.perTick((builder) => {
				builder.inputFluids(Fluid.of('kubejs:lubricant', 1 /* *tier*/));
				builder.inputFE(512 * (tier / 2));
			})
			.inputStress(1024)
			.inputRPM(256);
	}

	e.forEachRecipe({ type: 'tfc:anvil' }, (recipe) => {
		let _json = JsonIO.toObject(recipe.json);
		let { input, result, tier } = _json;

		if (
			(Item.of(input).hasTag('forge:ingots') ||
				Item.of(input).hasTag('forge:sheets') ||
				Item.of(input).hasTag('forge:double_sheets') ||
				Item.of(input).hasTag('forge:double_ingots') ||
				Item.of(input).hasTag('forge:rods')) &&
			(!Item.of(result).hasTag('forge:ingots') ||
				!Item.of(result).hasTag('forge:sheets') ||
				!Item.of(result).hasTag('forge:double_sheets') ||
				!Item.of(result).hasTag('forge:double_ingots') ||
				!Item.of(result).hasTag('forge:rods'))
		) {
			AddFormerRecipe(result, input, tier, recipe.getId() + '_former');
		}
	});

	e.addedRecipes.forEach((recipe) => {
		let _json = JsonIO.toObject(recipe.json);
		//console.info(_json.type)
		//console.info(_json.type == 'tfc:anvil')

		if (_json.type == 'tfc:anvil') {
			let { input, result, tier } = _json;
			if (
				(Item.of(input).hasTag('forge:ingots') ||
					Item.of(input).hasTag('forge:sheets') ||
					Item.of(input).hasTag('forge:double_sheets') ||
					Item.of(input).hasTag('forge:double_ingots') ||
					Item.of(input).hasTag('forge:rods')) &&
				(!Item.of(result).hasTag('forge:ingots') ||
					!Item.of(result).hasTag('forge:sheets') ||
					!Item.of(result).hasTag('forge:double_sheets') ||
					!Item.of(result).hasTag('forge:double_ingots') ||
					!Item.of(result).hasTag('forge:rods'))
			) {
				AddFormerRecipe(
					result,
					input,
					tier,
					recipe.getId() + '_former'
				);
			}
		}
	});

	ADDED_ANVIL_RECIPES.forEach((recipe) => {
		let [/** @type {string} */ result, input, tier] = recipe;
		AddFormerRecipe(
			result,
			input,
			tier,
			'kubejs:' +
				result.split(':')[1] +
				'_from_' +
				input.split(':')[1] +
				'_former'
		);
	});

	//ik this is not related but I needed to put this here for the low priority. No i'm not makign a file for a single foreach
	e.forEachRecipe(
		[
			{ type: 'tfc:advanced_shapeless_crafting' },
			{ type: 'tfc:advanced_shaped_crafting' },
		],
		(recipe) => {
			let json = recipe.json;
			let _id = recipe.getId();

			e.remove({ id: _id });
			e.custom(json).id(_id + '_manual_only');
		}
	);
});
