// priority: 50

ServerEvents.recipes((e) => {

	e.remove({ output: 'minecraft:chest' });
	e.remove({ output: 'minecraft:trapped_chest' });

	e.custom({
		type: 'tfc:pot',
		ingredients: [],
		fluid_ingredient: {
			ingredient: 'tfc:salt_water',
			amount: 1000,
		},
		duration: 1000,
		temperature: 300,
		item_output: [
			{
				item: 'tfc:powder/salt',
			},
			{
				item: 'tfc:powder/salt',
			},
			{
				item: 'tfc:powder/salt',
			},
			{
				item: 'tfc:powder/salt',
			},
			{
				item: 'tfc:powder/salt',
			},
		],
	});

	e.remove({ id: /.*powderkeg.*/ });

	e.recipes.create
		.mixing(Item.of('tfc:powder/salt'), Fluid.of('tfc:salt_water', 1000))
		.heated();
	for (const [fertilizer, nutrients] of Object.entries(FERTILIZER_DEFS)) {
		let N = nutrients[0];
		let P = nutrients[1];
		let K = nutrients[2];
		let ingredients = [];

		if (N != 0) {
			ingredients.push(Item.of(N * 10 + 'x tfc:pure_nitrogen'));
		}

		if (P != 0) {
			ingredients.push(Item.of(P * 10 + 'x tfc:pure_phosphorus'));
		}

		if (K != 0) {
			ingredients.push(Item.of(K * 10 + 'x tfc:pure_potassium'));
		}

		e.recipes.create
			.mixing(ingredients, [
				Item.of(fertilizer),
				Fluid.of('tfc:lye', 500),
			])
			.superheated();
	}

	REMOVE_TFC.forEach((recipe) => {
		e.remove({ output: `tfc:${recipe}` });
	});

	e.remove({ output: /tfc:.*windmill_blade/ });
	e.remove({ output: /tfc:wood\/water_wheel\/.*/ });
	e.remove({ output: /tfc:wood\/axle\/.*/ });
	e.remove({ output: /tfc:wood\/bladed_axle\/.*/ });
	e.remove({ output: /tfc:wood\/gear_box\/.*/ });
	e.remove({ output: /tfc:wood\/encased_axle\/.*/ });
	e.remove({ output: /tfc:wood\/clutch\/.*/ });

	e.remove({ output: /afc:wood\/water_wheel\/.*/ });
	e.remove({ output: /afc:wood\/axle\/.*/ });
	e.remove({ output: /afc:wood\/bladed_axle\/.*/ });
	e.remove({ output: /afc:wood\/gear_box\/.*/ });
	e.remove({ output: /afc:wood\/encased_axle\/.*/ });
	e.remove({ output: /afc:wood\/clutch\/.*/ });

	e.remove({ id: 'tfc:barrel/dye/bleach_windmill_blades' });
	e.remove({ input: 'tfc:ore/cryolite' });

	e.forEachRecipe({ type: 'tfc:quern', not: { input: '#forge:ores/chunks' }}, (recipe) => {
		let ingredient = recipe.json.get('ingredient');

		e.recipes.create.milling(recipe.originalRecipeResult, ingredient);

		let crushingResult = [recipe.originalRecipeResult];
		crushingResult.push(
			Item.of(
				recipe.originalRecipeResult,
				Math.ceil(recipe.originalRecipeResult.count * 0.25)
			).withChance(0.25)
		);
		e.recipes.create.crushing(crushingResult, ingredient);
	});

	e.remove({ type: 'tfc:quern' });

	for (const [ore, count] of Object.entries(CHROMITE_CRUSHING_DEFS)) {
		e.recipes.create.milling(
			`${count}x kubejs:chromite_powder`,
			`firmalife:ore/${ore}_chromite`
		);
	}

	//fix aluminum coins not being craftable.
	e.custom({
		type: 'tfc:casting',
		mold: {
			item: 'lithiccoins:ceramic/coin_mold',
		},
		fluid: {
			ingredient: 'kubejs:molten_aluminum',
			amount: 100,
		},
		result: {
			item: 'lithiccoins:blank_coin/aluminum',
			count: 4,
		},
		break_chance: 0.1,
	});

	e.recipes.tfc
		.heating(`kubejs:scrap`, 400)
		.resultFluid(Fluid.of(`tfc:metal/unknown`, 50));

	for (const def of ORE_DEFS) {
		e.recipes.tfc
			.heating(`tfc:powder/${def.ore}`, def.meltingTemp)
			.resultFluid(Fluid.of(`tfc:metal/${def.metal}`, 5));

		e.recipes.tfc
			.heating(`kubejs:${def.ore}_powder_block`, def.meltingTemp)
			.resultFluid(Fluid.of(`tfc:metal/${def.metal}`, 5 * 9));

		e.shapeless(`9x tfc:powder/${def.ore}`, [
			`kubejs:${def.ore}_powder_block`,
		]);
		e.shaped(`kubejs:${def.ore}_powder_block`, ['PPP', 'PPP', 'PPP'], {
			P: `tfc:powder/${def.ore}`,
		});
	}
	e.recipes.tfc
		.heating('kubejs:chromite_powder', 1250)
		.resultFluid(Fluid.of(`firmalife:metal/chromium`, 5));

	e.recipes.tfc
		.heating('kubejs:chromite_powder_block', 1250)
		.resultFluid(Fluid.of(`firmalife:metal/chromium`, 5 * 9));

	e.shapeless(`9x kubejs:chromite_powder`, [`kubejs:chromite_powder_block`]);
	e.shaped(`kubejs:chromite_powder_block`, ['PPP', 'PPP', 'PPP'], {
		P: `kubejs:chromite_powder`,
	});

	NONMETAL_POWDERS.forEach((powder) => {
		e.shapeless(`9x tfc:powder/${powder}`, [
			`kubejs:${powder}_powder_block`,
		]);
		e.shaped(`kubejs:${powder}_powder_block`, ['PPP', 'PPP', 'PPP'], {
			P: `tfc:powder/${powder}`,
		});
	});

	e.remove({ output: 'tfc:sandpaper' });

	GEM_TYPES.forEach((gem) => {
		e.recipes.create
			.sequenced_assembly(
				[
					Item.of(`tfc:gem/${gem}`).withChance(0.95),
					Item.of(`tfc:powder/${gem}`).withChance(0.05),
				],
				`tfc:ore/${gem}`,
				[e.recipes.create.cutting(`tfc:ore/${gem}`, `tfc:ore/${gem}`)]
			)
			.transitionalItem(`tfc:ore/${gem}`)
			.loops(10);

		e.remove({ id: `tfc:${gem}_cut` });
	});

	for (const metal of METAL_DEFS) {
		e.recipes.create
			.sequenced_assembly(
				[`tfc:metal/sheet/${metal}`],
				`tfc:metal/double_ingot/${metal}`,
				[
					e.recipes.create.pressing(
						`tfc:metal/double_ingot/${metal}`,
						`tfc:metal/double_ingot/${metal}`
					),
				]
			)
			.transitionalItem(`tfc:metal/double_ingot/${metal}`)
			.loops(5);
	}

	e.recipes.create
		.sequenced_assembly(
			[`firmalife:metal/sheet/chromium`],
			`firmalife:metal/double_ingot/chromium`,
			[
				e.recipes.create.pressing(
					`firmalife:metal/double_ingot/chromium`,
					`firmalife:metal/double_ingot/chromium`
				),
			]
		)
		.transitionalItem(`firmalife:metal/double_ingot/chromium`)
		.loops(5);

	e.recipes.create
		.sequenced_assembly(
			[`firmalife:metal/sheet/stainless_steel`],
			`firmalife:metal/double_ingot/stainless_steel`,
			[
				e.recipes.create.pressing(
					`firmalife:metal/double_ingot/stainless_steel`,
					`firmalife:metal/double_ingot/stainless_steel`
				),
			]
		)
		.transitionalItem(`firmalife:metal/double_ingot/stainless_steel`)
		.loops(5);

	e.recipes.create
		.sequenced_assembly([`tfc:refined_iron_bloom`], `tfc:raw_iron_bloom`, [
			e.recipes.create.pressing(
				`tfc:raw_iron_bloom`,
				`tfc:raw_iron_bloom`
			),
		])
		.transitionalItem(`tfc:raw_iron_bloom`)
		.loops(3);

	e.recipes.create
		.sequenced_assembly(
			[`tfc:metal/ingot/wrought_iron`],
			`tfc:refined_iron_bloom`,
			[
				e.recipes.create.pressing(
					`tfc:refined_iron_bloom`,
					`tfc:refined_iron_bloom`
				),
			]
		)
		.transitionalItem(`tfc:refined_iron_bloom`)
		.loops(3);

	e.recipes.create
		.sequenced_assembly(
			[`tfc:metal/ingot/high_carbon_steel`],
			`tfc:metal/ingot/pig_iron`,
			[
				e.recipes.create.pressing(
					`tfc:metal/ingot/pig_iron`,
					`tfc:metal/ingot/pig_iron`
				),
			]
		)
		.transitionalItem(`tfc:metal/ingot/pig_iron`)
		.loops(3);

	e.recipes.create
		.sequenced_assembly(
			[`tfc:metal/ingot/steel`],
			`tfc:metal/ingot/high_carbon_steel`,
			[
				e.recipes.create.pressing(
					`tfc:metal/ingot/high_carbon_steel`,
					`tfc:metal/ingot/high_carbon_steel`
				),
			]
		)
		.transitionalItem(`tfc:metal/ingot/high_carbon_steel`)
		.loops(3);

	e.recipes.create
		.sequenced_assembly(
			[`tfc:metal/ingot/red_steel`],
			`tfc:metal/ingot/high_carbon_red_steel`,
			[
				e.recipes.create.pressing(
					`tfc:metal/ingot/high_carbon_red_steel`,
					`tfc:metal/ingot/high_carbon_red_steel`
				),
			]
		)
		.transitionalItem(`tfc:metal/ingot/high_carbon_red_steel`)
		.loops(3);

	e.recipes.create
		.sequenced_assembly(
			[`tfc:metal/ingot/blue_steel`],
			`tfc:metal/ingot/high_carbon_blue_steel`,
			[
				e.recipes.create.pressing(
					`tfc:metal/ingot/high_carbon_blue_steel`,
					`tfc:metal/ingot/high_carbon_blue_steel`
				),
			]
		)
		.transitionalItem(`tfc:metal/ingot/high_carbon_blue_steel`)
		.loops(3);

	e.recipes.create
		.sequenced_assembly(
			[`tfc:metal/ingot/black_steel`],
			`tfc:metal/ingot/high_carbon_black_steel`,
			[
				e.recipes.create.pressing(
					`tfc:metal/ingot/high_carbon_black_steel`,
					`tfc:metal/ingot/high_carbon_black_steel`
				),
			]
		)
		.transitionalItem(`tfc:metal/ingot/high_carbon_black_steel`)
		.loops(3);

	e.shapeless('purple_dye', 'kubejs:chromite_powder');

	for (const def of ORE_DEFS) {
		e.shapeless(`tfc:powder/${def.ore}`, [
			`tfc:ore/small_${def.ore}`,
			'#tfc:hammers',
		]).damageIngredient('#tfc:hammers', 1);
	}
	e.shapeless('kubejs:chromite_powder', [
		`firmalife:ore/small_chromite`,
		'#tfc:hammers',
	]).damageIngredient('#tfc:hammers', 1);

	//e.remove({ output: /.*sluice.*/ });

	e.forEachRecipe({ type: 'firmalife:mixing_bowl' }, (recipe) => {
		let ingredients = recipe.json.get('ingredients');
		let ingredientsActual = [];
		let outputItem = recipe.json.get('output_item');
		let fluid;
		let fluidAmount;

		if (recipe.json.get('fluid_ingredient') != null) {
			fluid = recipe.json.get('fluid_ingredient').get('ingredient');
			fluidAmount = recipe.json.get('fluid_ingredient').get('amount');
		}

		ingredients.forEach((ingredient) => {
			ingredientsActual.push(ingredient);
		});

		if (
			fluid != null &&
			fluidAmount != null &&
			fluid != undefined &&
			fluidAmount != undefined
		) {
			if (fluid.get && fluid.get('tag')) {
				ingredientsActual.push({
					fluidTag: fluid.get('tag'),
					amount: fluidAmount,
				});
			} else {
				ingredientsActual.push({ fluid: fluid, amount: fluidAmount });
			}
		}

		e.custom({
			type: 'create:mixing',
			ingredients: ingredientsActual,
			results: outputItem,
		});
	});

	e.forEachRecipe({ type: 'tfc:pot' }, (recipe) => {
		let json = recipe.json;
		let ingredients = json.get('ingredients'); //array
		let item_output = json.get('item_output'); //array
		let fluid_ingredient = json.get('fluid_ingredient'); //object
		let fluid_output = json.get('fluid_output'); //object

		let ingredients_actual = [];
		let output_actual = [];

		if (ingredients != null) {
			ingredients.forEach((ingredient) => {
				ingredients_actual.push(ingredient);
			});
		}

		if (fluid_ingredient != null) {
			let _fluid_ingredient = JsonIO.toObject(fluid_ingredient);
			let fluid = _fluid_ingredient.fluid;
			if (!fluid) {
				fluid = _fluid_ingredient.ingredient;
			}
			let amount = _fluid_ingredient.amount;

			if (fluid.tag) {
				ingredients_actual.push({
					fluidTag: fluid.tag,
					amount: amount,
				});
			} else {
				ingredients_actual.push({ fluid: fluid, amount: amount });
			}
		}

		if (item_output != null) {
			item_output.forEach((output) => {
				output_actual.push(output);
			});
		}

		if (fluid_output != null) {
			let _fluid_output = JsonIO.toObject(fluid_output);
			let fluid = _fluid_output.fluid;
			if (!fluid) {
				fluid = _fluid_output.ingredient;
			}
			let amount = _fluid_output.amount;
			output_actual.push({ fluid: fluid, amount: amount });
		}

		e.custom({
			type: 'create:mixing',
			ingredients: ingredients_actual,
			results: output_actual,
			heatRequirement: 'lowheated',
			processingTime: 200,
		});
	});

	e.forEachRecipe({ type: 'tfc:scraping' }, (recipe) => {
		let ingredient = Item.of(recipe.json.get('ingredient'));

		e.recipes.create
			.sequenced_assembly([recipe.originalRecipeResult], ingredient, [
				e.recipes.create
					.deploying(ingredient, [ingredient, '#tfc:knives'])
					.keepHeldItem(),
			])
			.transitionalItem(ingredient)
			.loops(16);
	});

	e.recipes.create.splashing(
		[
			Item.of('tfc:ore/small_native_copper'),
			Item.of('tfc:ore/small_native_copper').withChance(0.5),
		],
		'#kubejs:copper_deposit'
	);
	e.recipes.create.splashing(
		[
			Item.of('tfc:ore/small_native_silver'),
			Item.of('tfc:ore/small_native_silver').withChance(0.5),
		],
		'#kubejs:silver_deposit'
	);
	e.recipes.create.splashing(
		[
			Item.of('tfc:ore/small_native_gold'),
			Item.of('tfc:ore/small_native_gold').withChance(0.5),
		],
		'#kubejs:gold_deposit'
	);
	e.recipes.create.splashing(
		[
			Item.of('tfc:ore/small_cassiterite'),
			Item.of('tfc:ore/small_cassiterite').withChance(0.5),
		],
		'#kubejs:tin_deposit'
	);

	e.remove({ output: 'minecraft:smithing_table' });
	e.shapeless('minecraft:smithing_table', [
		'crafting_table',
		'tfc:metal/double_sheet/cast_iron',
	]);

	POWDERS.forEach((powder) => {
		e.custom({
			type: 'tfc:landslide',
			ingredient: `kubejs:${powder}_powder_block`,
			result: `kubejs:${powder}_powder_block`,
		});
	});

	e.remove({ output: 'tfc:powder_keg' });

	e.replaceInput({}, '#tfc:axles', 'create:shaft');

	let RemoveTFC = [
		'firmalife:pumping_station',
		'firmalife:compost_tumbler',
		'firmalife:irrigation_tank',
		'tfc:steel_pipe',
	];
	RemoveTFC.forEach((remove) => {
		e.remove({ output: remove });
		e.remove({ input: remove });
	});

	e.remove({ id: 'tfc:crafting/gunpowder_graphite' });
	e.remove({ id: 'tfc:crafting/gunpowder' });

	e.shapeless('6x gunpowder', [
		'4x tfc:powder/saltpeter',
		'2x tfc:powder/sulfur',
		'2x tfc:powder/charcoal',
		'tfc:powder/graphite',
	]).id('tfc:crafting/gunpowder_graphite');
	e.shapeless('2x gunpowder', [
		'2x tfc:powder/saltpeter',
		'tfc:powder/sulfur',
		'tfc:powder/charcoal',
	]).id('tfc:crafting/gunpowder');

	WOOD_TYPES.forEach((wood) => {
		e.replaceInput(
			{ output: `everycomp:q/tfc/${wood}_ladder` },
			`tfc:wood/planks/${wood}`,
			`tfc:wood/lumber/${wood}`
		);
	});
	AFC_WOOD_TYPES.forEach((wood) => {
		e.replaceInput(
			{ output: `everycomp:q/afc/${wood}_ladder` },
			`afc:wood/planks/${wood}`,
			`afc:wood/lumber/${wood}`
		);
	});

	e.remove({ output: /everycomp:q\/tfc\/.*_chest/ });
	e.remove({ output: /everycomp:q\/afc\/.*_chest/ });
	e.remove({ output: /everycomp.*storage_jar.*/ });

	let remove_sns = [
		'sns:quiver',
		'sns:straw_basket',
		'sns:hiking_boots',
		'sns:steel_toe_hiking_boots',
		'sns:black_steel_toe_hiking_boots',
		'sns:blue_steel_toe_hiking_boots',
		'sns:red_steel_toe_hiking_boots',
		'sns:buckle',
	].forEach((item) => {
		e.remove({ output: item });
	});

	e.shaped('sns:straw_basket', ['AA', 'BB'], {
		A: 'tfc:straw',
		B: 'tfc:thatch',
	});

	//idfk
	e.remove({ output: 'tfcea:refrigerator' });
	e.recipes.create.mechanical_crafting(
		'tfcea:refrigerator',
		['ABC', 'BAD', 'BED', 'BAD', 'ABF'],
		{
			A: 'afc:rubber_bar',
			B: 'firmalife:metal/double_sheet/stainless_steel',
			C: 'createaddition:capacitor',
			D: 'create:fluid_pipe',
			E: 'thermal:machine_frame',
			F: 'tfc:brass_mechanisms',
		}
	);
	//probejs decided to stop working so i'll just use custom.
	//well, not stop working, but its taking 124325235 years to show shit
	e.remove({ id: 'tfc:barrel/sugar' });
	e.custom({
		type: 'create:compacting',
		ingredients: [
			{
				type: 'tfc:not_rotten',
				ingredient: {
					item: 'tfc:food/sugarcane',
				},
			},
		],
		results: [
			{
				fluid: 'kubejs:sugarcane_juice',
				amount: 1000,
			},
		],
	});

	e.custom({
		type: 'tfc:pot',
		ingredients: [],
		fluid_ingredient: {
			ingredient: 'kubejs:sugarcane_juice',
			amount: 500,
		},
		duration: 2000,
		temperature: 600,
		item_output: [
			{
				item: 'minecraft:sugar',
			},
			{
				item: 'minecraft:sugar',
			},
			{
				item: 'minecraft:sugar',
			},
			{
				item: 'minecraft:sugar',
			},
			{
				item: 'minecraft:sugar',
			},
		],
	});

	e.recipes.create
		.mixing(
			Item.of('minecraft:sugar', 5),
			Fluid.of('kubejs:sugarcane_juice', 500)
		)
		.lowheated();

	e.remove({ id: 'sns:crafting/straw_basket' });
	e.remove({ id: 'sns:crafting/seed_pouch' });

	//cheaper plated blocks

	e.remove({ id: /tfc:crafting\/metal\/block.*/ });
	e.remove({ id: /.*heating\/metal\/.*_block/ });

	METAL_DEFS.forEach((metal) => {
		e.shapeless(`8x tfc:metal/block/${metal}`, [
			`tfc:metal/sheet/${metal}`,
			'#minecraft:planks',
		]);
	});

	const firmalife_metals = ['chromium', 'stainless_steel'].forEach(
		(metal) => {
			e.shapeless(`8x firmalife:metal/block/${metal}`, [
				`firmalife:metal/sheet/${metal}`,
				'#minecraft:planks',
			]);

			e.shaped(`6x firmalife:metal/block/${metal}_slab`, ['AAA'], {
				A: `firmalife:metal/block/${metal}`,
			});
			e.shaped(
				`4x firmalife:metal/block/${metal}_stairs`,
				['AAA', 'AA ', 'A  '],
				{ A: `firmalife:metal/block/${metal}` }
			);
		}
	);
	e.shapeless(`8x firmalife:metal/block/chromium`, [
		'firmalife:metal/sheet/chromium',
		'#minecraft:planks',
	]);
	e.shapeless(`8x firmalife:metal/block/stainless_steel`, [
		'firmalife:metal/sheet/stainless_steel',
		'#minecraft:planks',
	]);

	e.custom({
		type: 'tfc:barrel_sealed',
		input_item: {
			ingredient: {
				tag: 'tfc:lumber',
			},
		},
		input_fluid: {
			ingredient: 'thermal:creosote',
			amount: 100,
		},
		output_item: {
			item: 'firmalife:treated_lumber',
		},
		duration: 4000,
	});

	e.shapeless('kubejs:flint_and_pyrite', ['flint', 'tfc:ore/pyrite']);

	AFC_WOOD_TYPES.forEach((wood) => {
		e.shaped(
			Item.of(`afc:wood/jar_shelf/${wood}`, 2),
			['AAA', 'B B', 'C C'],
			{
				A: `afc:wood/planks/${wood}`,
				B: `afc:wood/lumber/${wood}`,
				C: '#forge:rods/wooden',
			}
		);
	});

	e.shaped('minecraft:bucket', ['ABA', 'ACA', ' A '], {
		A: 'kubejs:metal/double_sheet/aluminum',
		B: 'tfc:metal/bucket/blue_steel',
		C: 'tfc:metal/bucket/red_steel',
	});

	e.shaped('minecraft:bucket', ['ABA', 'ACA', ' A '], {
		A: 'kubejs:metal/double_sheet/aluminum',
		B: 'tfc:metal/bucket/red_steel',
		C: 'tfc:metal/bucket/blue_steel',
	});

	e.replaceOutput({}, 'afc:maple_sugar', 'sugar');
	e.replaceOutput({}, 'afc:birch_sugar', 'sugar');

	e.replaceInput({ output: 'sns:reinforced_fiber' }, 'tfc:jute_fiber', [
		'tfc:jute_fiber',
		'textile:flax_fiber',
	]);


	e.recipes.create
		.sequenced_assembly(
			[
				'tfc:brass_mechanisms',
				Item.of('tfc:brass_mechanisms').withChance(0.5),
			],
			'tfc:metal/ingot/brass',
			[
				e.recipes.create.cutting(
					'tfc:metal/ingot/brass',
					'tfc:metal/ingot/brass'
				),
			]
		)
		.transitionalItem('tfc:metal/ingot/brass')
		.loops(5);

	let anvil_metals = {
		red_steel: 1540,
		blue_steel: 1540,
		black_steel: 1485,
		steel: 1540,
		wrought_iron: 1535,
		copper: 1080,
		bronze: 950,
		black_bronze: 1070,
		bismuth_bronze: 985,
	};

	for (let [metal, temp] of Object.entries(anvil_metals)) {
		e.remove({ output: `tfc:metal/anvil/${metal}` });
		e.remove({ id: `tfc:heating/metal/${metal}_anvil` });

		e.shaped(`tfc:metal/anvil/${metal}`, ['AAA', ` B `, `AAA`], {
			A: `tfc:metal/ingot/${metal}`,
			B: `tfc:metal/double_ingot/${metal}`,
		});

		e.recipes.tfc
			.heating(`tfc:metal/anvil/${metal}`, temp)
			.resultFluid(Fluid.of(`tfc:metal/${metal}`, 800));
	}

    e.remove({output: 'tfc:bloomery'})

    e.shaped('tfc:bloomery', ['ABA', 'A A', 'ABA'], {
        A: '#forge:sheets/any_bronze',
        B: '#forge:double_sheets/any_bronze',
    })
});
