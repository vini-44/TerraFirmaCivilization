// priority: 50

ServerEvents.recipes((e) => {
    let remove = ['firmalife:exposed_copper_greenhouse_port', 'firmalife:exposed_copper_greenhouse_port', 'firmalife:weathered_copper_greenhouse_port', 'firmalife:oxidized_copper_greenhouse_port', 'firmalife:iron_greenhouse_port', 'firmalife:rusted_iron_greenhouse_port', 'firmalife:pumping_station', 'firmalife:irrigation_tank', 'firmalife:oxidized_copper_pipe', 'firmalife:copper_pipe', 'firmalife:stainless_steel_greenhouse_port', 'firmalife:treated_wood_greenhouse_port', 'firmalife:weathered_treated_wood_greenhouse_port', 'firmalife:copper_greenhouse_port']

    remove.forEach((item) => {
        e.remove({output: item})
        e.remove({input: item})
    })
})