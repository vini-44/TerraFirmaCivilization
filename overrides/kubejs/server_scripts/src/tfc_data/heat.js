TFCEvents.data((event) => {
	for (const [metal, heat] of Object.entries(POWDER_HEAT_DEFS)) {
		event.itemHeat(`tfc:powder/${metal}`, heat, null, null);
		event.itemHeat(`kubejs:${metal}_powder_block`, heat, null, null);
	}
	event.itemHeat(`kubejs:chromite_powder`, 1.143, null, null);
	event.itemHeat(`kubejs:chromite_powder_block`, 1.143, null, null);
	event.itemHeat('kubejs:scrap', 2.0, 240, 320);
	event.itemHeat('kubejs:unfired_andesite_alloy', 0.5, null, null);
	event.itemHeat('create:andesite_alloy', 0.5, null, null);
	event.itemHeat('createbigcannons:recoil_spring', 1.429, 924, 1232);
	event.itemHeat('createbigcannons:steel_scrap', 0.171, 924, 1232);
	event.itemHeat('createbigcannons:nethersteel_ingot', 0.171, 924, 1232);
	event.itemHeat('createbigcannons:cast_iron_nugget', 1.143, 921, 1228);
	event.itemHeat('createbigcannons:bronze_scrap', 0.171, 570, 760);
	event.itemHeat('#kubejs:available_guns', 2.857, 921, 1228);
	event.itemHeat('scguns:plasgun', 0.5, 921, 1228);
	event.itemHeat('scguns:laser_musket', 0.1, 921, 1228);
	event.itemHeat('scguns:waltz_conversion', 0.1, 921, 1228);
	event.itemHeat('scguns:gauss_rifle', 0.025, 921, 1228);

    //event.itemHeat('kubejs:plastic', 2.0, 240, 320)

	event.itemHeat('kubejs:rhodocrosite_fragment', 1.143, 921, 1228);
	event.itemHeat('kubejs:manganite_chunk', 1.143, 921, 1228);

	let metal_items = {
		ingot: 2.857143,
		double_ingot: 5.714286,
		sheet: 5.714286,
		double_sheet: 11.428572,
		rod: 1.428572,
	};

	let metals = ['aluminum', 'mangalloy', 'manganese', 'titanium', 'tungsten', 'carotine_steel'];

	for (const [part, heat] of Object.entries(metal_items)) {
		metals.forEach((metal) => {
			event.itemHeat(
				`kubejs:metal/${part}/${metal}`,
				heat,
				891.00006,
				1188.0
			);
		});
	}
});
