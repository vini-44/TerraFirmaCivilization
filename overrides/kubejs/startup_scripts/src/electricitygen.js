//!!! SCUFFED ALERT !!!
CapabilityEvents.blockEntity((event) => {
	event.attach(
		'refurbished_furniture:electricity_generator',
		CapabilityBuilder.ENERGY.customBlockEntity()
			.canExtract(() => false)
			.canReceive(() => true)

			.receiveEnergy(
				(/**@type {Internal.BlockEntity}*/ be, amount, simulate) => {
			
					be.getUpdateTag().putInt('TotalEnergy', 200);
					let energy = be.getUpdateTag().getInt('Energy');
					let received = Math.min(200, energy + amount);
				
					if (!simulate) {
						let { x, y, z } = be.blockPos;
						be.level.server.runCommandSilent(
							`data modify block ${x} ${y} ${z} Energy set value ${received}`
						); //IF YOU WONT LET ME DO IT WITH THE NATIVE METHODS, THEN YOU BETTER LET ME THROUHG COMMANDS
						be.getUpdateTag().putInt('Energy', received);
					}
					return received;
				}
			)
			.getEnergyStored((be) => {
				return be.getUpdateTag().getInt('Energy');
			})
			.getMaxEnergyStored(() => 200)
	);
});

