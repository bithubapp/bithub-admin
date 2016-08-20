import Models from 'models/';

export default function (appState) {
	Models.Service.on('saving', function (ev, service) {
		const loadingServices = appState.attr('loadingServices');
		const index = loadingServices.indexOf(service);

		if (index > -1) {
			loadingServices.splice(index, 1);
		}

		loadingServices.unshift(service);
	});

	Models.Service.on('errored', function (ev, service) {
		const loadingServices = appState.attr('loadingServices');
		const index = loadingServices.indexOf(service);

		loadingServices.splice(index, 1);
	});

	Models.Service.on('destroyed', function (ev, service) {
		const loadingServices = appState.attr('loadingServices');
		const index = loadingServices.indexOf(service);

		if (index > -1) {
			loadingServices.splice(index, 1);
		}
	});
}
