//taken from https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
//I have NO IDEA how this works. But it does.

var lut = [];
for (var i = 0; i < 256; i++) {
	lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}

/**
 * Generates a UUID (Universally Unique Identifier) using a combination of random numbers and a lookup table.
 *
 * @return {string} The generated UUID in the format of xxx-xxx-xxx-xxx-xxx.
 */
function uuid() {
	var d0 = (Math.random() * 0xffffffff) | 0;
	var d1 = (Math.random() * 0xffffffff) | 0;
	var d2 = (Math.random() * 0xffffffff) | 0;
	var d3 = (Math.random() * 0xffffffff) | 0;
	return (
		lut[d0 & 0xff] +
		lut[(d0 >> 8) & 0xff] +
		lut[(d0 >> 16) & 0xff] +
		lut[(d0 >> 24) & 0xff] +
		'-' +
		lut[d1 & 0xff] +
		lut[(d1 >> 8) & 0xff] +
		'-' +
		lut[((d1 >> 16) & 0x0f) | 0x40] +
		lut[(d1 >> 24) & 0xff] +
		'-' +
		lut[(d2 & 0x3f) | 0x80] +
		lut[(d2 >> 8) & 0xff] +
		'-' +
		lut[(d2 >> 16) & 0xff] +
		lut[(d2 >> 24) & 0xff] +
		lut[d3 & 0xff] +
		lut[(d3 >> 8) & 0xff] +
		lut[(d3 >> 16) & 0xff] +
		lut[(d3 >> 24) & 0xff]
	);
}

const filled_fuel_cans = [
	'diesel_fuel_can',
	'gasoline_fuel_can',
	'biodiesel_fuel_can',
	'ethanol_fuel_can',
];

ItemEvents.modification((event) => {
	event.modify('gunpowder', (item) => {
		item.setMaxStackSize(32);
	});
	event.modify('tfc:ore/bituminous_coal', (item) => {
		item.burnTime = 16000;
	});

	filled_fuel_cans.forEach((name) => {
		event.modify('kubejs:' + name, (item) => {
			item.burnTime = 32000;
			item.setCraftingRemainder('kubejs:empty_fuel_can');
		});
	});

	event.modify('scguns:diamond_steel_leggings', (item) => {
		item.armorKnockbackResistance = 0;
		item.armorToughness = 0;
		item.armorProtection = 0;
	});

	event.modify('scguns:diamond_steel_boots', (item) => {
		item.armorToughness = 0;
		item.armorProtection = 2;
	});
	event.modify('scguns:diamond_steel_helmet', (item) => {
		item.armorToughness = 0;
		item.armorProtection = 2;
	});
	event.modify('scguns:diamond_steel_chestplate', (item) => {
		item.armorToughness = 1;
		item.armorProtection = 5;
	});
});

