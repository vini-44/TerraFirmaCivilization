StartupEvents.registry('item', event => {
    event.create('grasshopper').food(food => {
      food
        .hunger(2)
        .saturation(0.5) 
        
        .fastToEat() // Like dried kelp
      
        
    })

    event.create('cooked_grasshopper').food(food => {
      food
        .hunger(2.5)
        .saturation(0.8) 
        
        .fastToEat() // Like dried kelp
      
        
    })

  })