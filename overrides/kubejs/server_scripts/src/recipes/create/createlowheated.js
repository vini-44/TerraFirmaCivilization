//Create mod related recipes.

ServerEvents.recipes((e) => {
    e.remove({ mod: 'createlowheated' })
    e.shaped('createlowheated:basic_burner', [
        'R R',
        'R R',
        'AAA'
    ], {
        A: 'create:andesite_alloy',
        R: 'tfc:metal/rod/cast_iron',
    })
});



