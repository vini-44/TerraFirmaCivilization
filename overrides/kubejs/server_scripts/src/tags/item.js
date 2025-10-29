ServerEvents.tags('item', (e) => {
	e.add('createlowheated:burner_starters', 'tfc:firestarter');
	e.add('tfc:starts_fires_with_durability', 'createdieselgenerators:lighter');

	CHROMITE_POWDER_TAGS.forEach((tag) => {
		e.add(tag, 'kubejs:chromite_powder');
	});

	METAL_POWDERS.forEach((metal) => {
		e.add('kubejs:metal_powders', metal);
	});

	CHAINS.forEach((chain) => {
		e.add('kubejs:chains', chain);
	});

		e.add('kubejs:copper_deposit', /tfc:deposit\/native_copper\/.*/);
		e.add('kubejs:silver_deposit', /tfc:deposit\/native_silver\/.*/);
		e.add('kubejs:gold_deposit', /tfc:deposit\/native_gold\/.*/);
		e.add('kubejs:tin_deposit', /tfc:deposit\/cassiterite\/.*/);

	METAL_BARS.forEach((bar) => {
		e.add('kubejs:metal_bars', bar);
	});

	e.add('tfc:deals_piercing_damage', [
		'musketmod:musket_with_bayonet',
		'musketmod:musket',
		'musketmod:pistol',
	]);
	e.add('tfc:deals_piercing_damage', AVAILABLE_GUNS);
    	e.add('tfc:deals_piercing_damage', 'scguns:gale');

	e.add('tfc:usable_on_tool_rack', AVAILABLE_GUNS);
	e.add('tfc:usable_on_tool_rack', ['scguns:cr4k_mining_laser', 'scguns:rocket_rifle', 'scguns:waltz_conversion', 'scguns:gale', 'scguns:dozier_rl', 'scguns:gauss_rifle', 'scguns:laser_musket', 'scguns:plasgun']);
	//e.remove('c:cast_iron_ingots', 'tfc:metal/ingot/cast_iron')
	//e.removeAllTagsFrom('createbigcannons:cast_iron_ingot')

	//e.remove('c:cast_iron_ingots', 'minecraft:iron_ingot')
	//e.removeAllTagsFrom('minecraft:iron_ingot')

	e.add('kubejs:brew_ingredients', BREW_INGREDIENTS);
	e.add('kubejs:brew_fruit_ingredients', BREW_FRUIT_INGREDIENTS);

	e.add('tfc:axes_that_log', 'thermal:flux_saw');

	USABLE_ON_TOOL_RACK.forEach((tool) => {
		e.add('tfc:usable_on_tool_rack', tool);
	});

	e.add('map_atlases:sticky_crafting_items', 'tfc:glue');
	e.add('createbigcannons:gas_masks', 'scguns:anthralite_respirator');

	e.remove('sns:allowed_in_ore_sack', /.*/);

	e.add('quark:seed_pouch_holdable', '#tfc:seeds');

	e.add('tfc:bladed_axles', /.*bladed_axle.*/);

	e.add('tfc:metal_plated_blocks', [
		'firmalife:metal/block/chromium',
		'firmalife:metal/block/stainless_steel',
	]);

	e.add('tfc:metal_item/chromium', 'firmalife:metal_item/chromium');
	e.add(
		'tfc:metal_item/stainless_steel',
		'firmalife:metal_item/stainless_steel'
	);

	e.add('everycomp:chests', /everycomp:.*_chest/);

	e.add('forge:rods/wooden', 'minecraft:bamboo');

	e.remove('tfc:powders', [
		'minecraft:blaze_powder',
		'minecraft:glowstone_dust',
	]);

	e.remove('tfc:makes_lime_dye', 'tfc:plant/moss');
	e.add('tfc:makes_lime_dye', 'tfc:plant/field_horsetail');
	e.remove('tfc:makes_brown_dye', 'tfc:plant/field_horsetail');

	e.add('createlowheated:basic_burner_fuel_whitelist', '#tfc:firepit_fuel');

	e.add('tfc:foods/usable_in_sandwich', [
		'tfc:food/cooked_egg',
		'tfc:food/boiled_egg',
	]);
	e.add('tfc:foods/usable_in_soup', [
		'tfc:food/cooked_egg',
		'tfc:food/boiled_egg',
	]);

	e.add('tfc:forge_fuel', 'thermal:coal_coke');
	e.add('tfc:blast_furnace_fuel', 'thermal:coal_coke');
	e.add('kubejs:available_guns', AVAILABLE_GUNS);
    e.add('kubejs:available_guns', 'scguns:cr4k_mining_laser');

	e.add('alekiships:icebreaker_upgrades', 'tfc:metal/double_sheet/steel');

	e.add('forge:slimeballs', 'tfc:glue');

	e.add('c:hidden_from_recipe_viewers', REMOVED_ITEMS);

	e.add('tfc:metal/rod/any_bronze', /.*\/rod\/.*bronze.*/);

	e.add('createlowheated:burner_starters', 'kubejs:flint_and_pyrite');
	e.add('tfc:usable_on_tool_rack', 'kubejs:flint_and_pyrite');
	e.add('minecraft:creeper_igniters', 'kubejs:flint_and_pyrite');
	e.add('supplementaries:fire_sources', 'kubejs:flint_and_pyrite');
	e.add('tfc:starts_fires_with_durability', 'kubejs:flint_and_pyrite');

	e.add('tfc:fluxstone', 'thermal:slag');

	e.add('railways:locometal', /.*locometal.*/);
	e.remove('railways:locometal', /.*boiler.*/);
	e.remove('railways:locometal', /.*wrapped.*/);

	e.add('railways:boiler', /.*locometal_boiler.*/);

	e.add('railways:brass_wrapped_locometal', /.*brass_wrapped.*/);
	e.add('railways:iron_wrapped_locometal', /.*iron_wrapped.*/);
	e.add('railways:copper_wrapped_locometal', /.*copper_wrapped.*/);
    
    e.add(`minecraft:stone_buttons`, /tfc:rock\/button\/.*/)

    e.add('tfc:metal/double_ingot/any_bronze', ['tfc:metal/double_ingot/bismuth_bronze', 'tfc:metal/double_ingot/black_bronze', 'tfc:metal/double_ingot/bronze'])
});