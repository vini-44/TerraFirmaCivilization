
ServerEvents.tags('item', event => {
	event.removeAllTagsFrom('butchersdelight:cow_hide')
	event.removeAllTagsFrom('butchersdelight:sheephide')
	event.removeAllTagsFrom('butchersdelight:goat_fur')
	event.removeAllTagsFrom('butchersdelight:hoglinskin')
	
	event.remove('tfc:fluxstone', 'tfc:rock/loose/dolomite')
	event.remove('tfc:fluxstone', 'tfc:rock/mossy_loose/dolomite')
})