const $UUID = Java.loadClass('java.util.UUID');
let uuid = () => {
	return $UUID.randomUUID().toString();
};


/**
 * Adds a custom attribute to an item. The attribute is added to the `kubejs:attributesetter/item` data file.
 *
 * @param {Internal.Ingredient_} item - The registry name of the item for which to add the attribute.
 * @param {Internal.Attribute} attribute - The name of the attribute to add.
 * @param {number} value - The value to assign to the attribute.
 * @param {Internal.AttributeModifier$Operation_} operation - The operation to use when applying the attribute. One of 'addition', 'multiply_base', 'multiply_total', 'override_total', or 'ignore_total'.
 * @param {string} [slot] - The slot to which the attribute should be applied. Defaults to all slots.
 */

/**
 * Adds custom attributes to an item. Attributes are stored in the `kubejs:attributesetter/item` data file.
 *
 * @param {Internal.Ingredient_} item - The registry name of the item for which to add the attributes (e.g., 'namespace:item_name').
 * @param {Array<[Internal.Attribute, number, Internal.AttributeModifier$Operation_, string]>} attribute - An array of attributes to add. Each attribute is represented as an array:
 *   - `[0]` {string} The attribute name (e.g., 'attribute_namespace:attribute_name').
 *   - `[1]` {number} The value to assign to the attribute.
 *   - `[2]` {string} The operation to use when applying the attribute. Must be one of:
 *   - `[3]` {string} The slot to which the attribute should be applied (e.g., 'curio:slot_name'). Defaults to all slots if not provided.
 * @param {string} [_uuid] - An optional UUID to uniquely identify the attribute. If not provided, a random UUID will be generated.
 *
 * @example
 * AddItemAttribute('irons_spellbooks:copper_spell_book', [
 *   ['irons_spellbooks:max_mana', 50, 'addition', 'curio:spellbook']
 * ]);
 */
function AddItemAttribute(item, attribute, _uuid) {
	let name = item.split(':')[1];
	let data = {
	};
    data[item] = []



	attribute.forEach((attribute) => {
        console.info(_uuid || uuid())

		data[item].push({
			attribute: attribute[0],
			uuid: _uuid || uuid(),
			value: attribute[1],
			operation: attribute[2],
			slot: attribute[3],
		});
	});


    ServerEvents.highPriorityData((event) => {
		event.addJson('kubejs:attributesetter/item/' + name, data);
	});
}

let caneUuid = uuid();
AddItemAttribute('tfccanes:walking_cane', [['forge:step_height_addition', 0.5, 'addition', 'offhand'], ['forge:step_height_addition', 0.15, 'addition', 'mainhand']]);
AddItemAttribute('tfccanes:refined_walking_cane', [['forge:step_height_addition', 0.5, 'addition', 'offhand']]);
AddItemAttribute('tfccanes:refined_walking_cane', [['minecraft:generic.movement_speed', 0.1, 'multiply_base', 'offhand'], ['minecraft:generic.movement_speed', 0.1, 'multiply_base', 'mainhand']]);
