// priority: 50

ServerEvents.recipes((event) => {
    event.recipes.create.mixing('kubejs:wood_pulp', ['4x createdieselgenerators:wood_chip', Fluid.of('water')]).lowheated()
    event.recipes.create.splashing('kubejs:washed_wood_pulp', ['kubejs:wood_pulp'])
    event.recipes.create.pressing('tfc:unrefined_paper', ['kubejs:washed_wood_pulp'])
})