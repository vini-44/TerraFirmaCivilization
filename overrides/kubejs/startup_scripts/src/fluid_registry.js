
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
    event.create('molten_alumina').thickTexture(Color.LIGHT_GRAY_DYE).displayName("Molten Alumina").bucketColor(Color.LIGHT_GRAY_DYE) //TODO
    event.create('kaolinite_mixture').stillTexture('kubejs:fluid/kaolinite_mixture').flowingTexture('kubejs:fluid/kaolinite_mixture').displayName("Kaolinite Mixture").bucketColor(Color.PINK_DYE) //TODO

    event.create('molten_manganese').displayName("Molten Manganese").bucketColor(Color.CYAN_DYE).thickTexture(Color.CYAN_DYE)
    event.create('molten_processed_manganite').displayName("Molten Processed Manganese").bucketColor(Color.BROWN_DYE).thickTexture(Color.BROWN_DYE)
    event.create('molten_mangalloy').displayName("Molten Mangalloy").bucketColor(Color.BROWN_DYE).thickTexture(Color.BROWN_DYE)

});
