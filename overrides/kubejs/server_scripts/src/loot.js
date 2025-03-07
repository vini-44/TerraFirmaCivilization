//cba to do propper lootjs version

ServerEvents.highPriorityData((event) => {
	event.addJson('supplementaries:loot_tables/blocks/ash', {
		type: 'minecraft:block',
		pools: [
			{
				rolls: 1.0,
				bonus_rolls: 0.0,
				entries: [
					{
						type: 'minecraft:alternatives',
						children: [
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '1',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 1.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '2',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 2.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '3',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 3.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '4',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 4.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '5',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 5.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '6',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 6.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '7',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 7.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								functions: [
									{
										function: 'minecraft:set_count',
										count: 8.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
						],
					},
				],
			},
		],
	});
});

LootJS.modifiers((e) => {
	e.addLootTableModifier('minecraft:archaeology/trail_ruins_common')
		.removeLoot(/.*/)
		.addWeightedLoot(
			[1, 2],
			[
				'scguns:medium_brass_casing',
				'scguns:small_brass_casing',
				'firmalife:pottery_sherd',
				'tfccanes:walking_cane',
				'tfc:ceramic/jug',
				'minecraft:mourner_pottery_sherd',
				'minecraft:miner_pottery_sherd',
				'minecraft:angler_pottery_sherd',
				'kubejs:scrap',
				'kubejs:horse_relic',
				'kubejs:humanlike_relic',
				'kubejs:rusty_sword',
				'kubejs:rusty_axe',
				'kubejs:rusty_shovel',
				'kubejs:rusty_scythe',
				'kubejs:rusty_mace',
				'kubejs:rusty_pickaxe',
				'kubejs:straw_doll_0',
				'kubejs:straw_doll_1',
			]
		);

	e.addLootTableModifier('minecraft:archaeology/trail_ruins_rare')
		.removeLoot(/.*/)
		.addWeightedLoot(
			[1, 2],
			[
				'tfc:gem/topaz',
				'tfc:gem/sapphire',
				'tfc:gem/emerald',
				'tfc:gem/ruby',

				'minecraft:archer_pottery_sherd',
				'minecraft:arms_up_pottery_sherd',
				'minecraft:plenty_pottery_sherd',
				'minecraft:prize_pottery_sherd',
				'minecraft:blade_pottery_sherd',
				'minecraft:brewer_pottery_sherd',
				'minecraft:sheaf_pottery_sherd',
				'minecraft:shelter_pottery_sherd',
				'minecraft:burn_pottery_sherd',
				'minecraft:danger_pottery_sherd',
				'minecraft:skull_pottery_sherd',
				'minecraft:snort_pottery_sherd',
				'minecraft:explorer_pottery_sherd',
				'minecraft:friend_pottery_sherd',
				'minecraft:heart_pottery_sherd',
				'minecraft:heartbreak_pottery_sherd',
				'minecraft:howl_pottery_sherd',
				'kubejs:automaton_head',
				'kubejs:bee_trinket',
				'kubejs:horse_relic_gold',
				'kubejs:humanlike_relic_gold',
			]
		);

	let kaolin_ores = [
		'kubejs:limestone_kaolinite',
		'kubejs:chalk_kaolinite',
		'kubejs:conglomerate_kaolinite',
		'kubejs:shale_kaolinite',
		'kubejs:claystone_kaolinite',
		'kubejs:dolomite_kaolinite',
		'kubejs:chert_kaolinite',
	];

	kaolin_ores.forEach((ore) => {
		e.addBlockLootModifier(ore)
			.removeLoot(/.*/)
			.addLoot('kubejs:kaolinite');
	});

    e.addBlockLootModifier(/.*manganite.*/).removeLoot(/.*/).addLoot('kubejs:manganite_chunk');

	//I'M GOING TO GO INSANE AAAAAAAAAAA
	let clear_glasses = [
		'create:vertical_framed_glass',
		'create:horizontal_framed_glass',
		'create:framed_glass',
		'create:tiled_glass',
		'minecraft:glass',
	];
	clear_glasses.forEach((glass) => {
		e.addBlockLootModifier(glass)
			.removeLoot(/.*/)
			.addAlternativesLoot(
				LootEntry.of(glass).when((e) => e.matchMainHand('tfc:gem_saw')),
			);
	});

	ALL_COLORS.forEach((color) => {
		e.addBlockLootModifier(`minecraft:${color}_stained_glass`)
			.removeLoot(/.*/)
			.addAlternativesLoot(
				LootEntry.of(`minecraft:${color}_stained_glass`).when((e) => e.matchMainHand('tfc:gem_saw')),
			);
	});

    e.addLootTableModifier(/.*/).removeLoot('scguns:pebbles')
});
