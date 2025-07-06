ServerEvents.highPriorityData((event) => {
	let jsonFolder = global.readJsonFolderFromMod('data', 'scguns', 'guns');
	for (let [datapath, _json] of Object.entries(jsonFolder)) {
		_json = JsonIO.toObject(_json);

		if (_json.projectile) {
			_json.projectile.advantage = 'scguns:none';

			switch (_json.projectile.item) {
				case 'scguns:ramrod_round':
					_json.projectile.item = 'scguns:beowulf_round';
					_json.projectile.casingType =
						'scguns:small_diamond_steel_casing';
                        _json.reloads.reloadItem = 'scguns:beowulf_round';

					break;
				case 'scguns:standard_copper_round':
					_json.projectile.item = 'scguns:advanced_round';
					_json.projectile.casingType = 'scguns:medium_brass_casing';
                    _json.reloads.reloadItem = 'scguns:advanced_round';

					break;
				case 'scguns:compact_copper_round':
					_json.projectile.item = 'scguns:compact_advanced_round';
					_json.projectile.casingType = 'scguns:small_brass_casing';
                    _json.reloads.reloadItem = 'scguns:compact_advanced_round';

					break;
				case 'scguns:bearpack_shell':
					_json.projectile.item = 'scguns:shotgun_shell';
					_json.projectile.casingType = 'scguns:small_brass_casing';
                    _json.reloads.reloadItem = 'scguns:shotgun_shell';
			}

			if (
				_json.projectile.item == 'scguns:beowulf_round' ||
				_json.projectile.item == 'scguns:compact_advanced_round'
			) {
				_json.projectile.speed = _json.projectile.speed * 2.5;
			} else {
				_json.projectile.speed = _json.projectile.speed * 2.5;
			}

            if (_json.general.spread) {
                _json.general.spread = _json.general.spread * 0.75;
            }


			_json.projectile.life = _json.projectile.life * 100;


			_json.projectile.damage = _json.general.projectileAmount > 1 ? _json.projectile.damage * 3 : _json.projectile.damage * 2;

			_json.projectile.gravity = true;

		    event.addJson(datapath, _json);
		}
	}
});