
StartupEvents.registry('fluid', (event) => {
    for (const [flower, color] of Object.entries(BREW_COLORS)) {
        let name = flower.replace(/_([a-z])/g, (match, char) => {
            return ` ${char.toUpperCase()}`;
        });
        name = name.charAt(0).toUpperCase() + name.slice(1);

        event
            .create(flower + '_brew')
            .tag('tfc:drinkables')
            .tag('tfc:any_drinkables')
            .tag('tfc:usable_in_pot')
            .tag('tfc:usable_in_jug')
            .tag('tfc:usable_in_barrel')
            .tag('kubejs:flower_brew')

            .thinTexture(color)
            .displayName(name + ' Brew')
            .noBlock();
    }

    event.create('any_potion').stillTexture('create:fluid/potion_still').flowingTexture('create:fluid/potion_flow').displayName(Text.of("Mystery Potion").italic().aqua()).noBucket().noBlock();

    event.create('kerosene').stillTexture('kubejs:fluid/kerosene_still').flowingTexture('kubejs:fluid/kerosene_flow').displayName("Kerosene").bucketColor(Color.AQUA);

    event.create('sugarcane_juice').stillTexture('kubejs:fluid/sugarcane_juice_still').flowingTexture('kubejs:fluid/sugarcane_juice_flow').displayName("Sugarcane Juice").bucketColor(Color.DARK_GREEN);

    event.create('molten_aluminum').stillTexture('supplementaries:block/lumisene/lumisene').flowingTexture('supplementaries:block/lumisene/lumisene').displayName("Molten Aluminum").bucketColor(Color.GRAY)

    event.create('alumina_slurry').thinTexture('WHITE').displayName("Alumina Slurry").bucketColor(Color.WHITE) //TODO
    event.create('molten_alumina').thickTexture(Color.LIGHT_GRAY_DYE).displayName("Molten Alumina").bucketColor(Color.LIGHT_GRAY_DYE) //TODO?
    event.create('kaolinite_mixture').stillTexture('kubejs:fluid/kaolinite_mixture').flowingTexture('kubejs:fluid/kaolinite_mixture').displayName("Kaolinite Mixture").bucketColor(Color.PINK_DYE) //TODO

    event.create('molten_manganese').displayName("Molten Manganese").bucketColor(Color.CYAN_DYE).thickTexture(Color.CYAN_DYE)//TODO?
    event.create('molten_raw_manganese').displayName("Molten Crude Manganese").bucketColor(Color.BROWN_DYE).thickTexture(Color.BROWN_DYE)//TODO?
    event.create('molten_mangalloy').displayName("Molten Mangalloy").flowingTexture('createbigcannons:fluid/molten_nethersteel_flow').stillTexture('createbigcannons:fluid/molten_nethersteel_still').bucketColor(Color.BROWN_DYE)

    event.create('liquid_hydrogen').noBucket().noBlock().displayName("Liquid Hydrogen").thinTexture(Color.LIGHT_BLUE_DYE)//TODO? This looks fine.
    event.create('liquid_oxygen').noBucket().noBlock().displayName("Liquid Oxygen").thinTexture(Color.LIGHT_GRAY_DYE)//TODO? This looks fine.
    event.create('liquid_nitrogen').noBucket().noBlock().displayName("Liquid Nitrogen").thinTexture(Color.GRAY_DYE)//TODO? This looks fine.

    event.create('lubricant').displayName("Lubricant").thinTexture(Color.ORANGE_DYE)//TODO

    event.create('molten_titanium').displayName("Molten Titanium").bucketColor(Color.CYAN_DYE).flowingTexture('kubejs:fluid/molten_titanium_flow').stillTexture('kubejs:fluid/molten_titanium_still')
    event.create('molten_tungsten').displayName("Molten Tungsten").bucketColor(Color.CYAN_DYE).flowingTexture('kubejs:fluid/molten_tungsten_flow').stillTexture('kubejs:fluid/molten_tungsten_still')

    event.create('molten_carotine_steel').displayName("Molten Carotine Steel").bucketColor(Color.ORANGE_DYE).flowingTexture('createbigcannons:fluid/molten_bronze_flow').stillTexture('createbigcannons:fluid/molten_bronze_still')

    //event.create('liquid_petroleum_gas').displayName("Liquid Petroleum Gas").bucketColor(Color.YELLOW_DYE).flowingTexture('thermal:fluids/refined_fuel_flow').stillTexture('thermal:fluids/refined_fuel_still')

    //event.create('molten_plastic').displayName("Molten Plastic").bucketColor(Color.LIGHT_GRAY_DYE).flowingTexture('thermal:fluids/latex_flow').stillTexture('thermal:fluids/latex_still')
});
