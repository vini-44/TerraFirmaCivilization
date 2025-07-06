TFCEvents.data((event) => {
    //fuel
    event.fuel('thermal:coal_coke', 1415, 2200*1.5, 1)

    //lamp fuel
    event.lampFuel('thermal:creosote', '#tfc:lamps', 8000)
    event.lampFuel('kubejs:kerosene', '#tfc:lamps', 16000)
})