import Organization from 'bithub-admin/models/organization';

var models = {};

export default models;

models['organization'] = {
    label: 'Organization',
    methods: [
        {value: 'getList', label: 'Get List'},
		{
			value: 'get',
			label: 'Get (one)',
			defaultRequest: {
				id: ''
			}
		},
        {
            value:'invite',
            label: 'Invite',
            defaultRequest: {
                email: ''
            },
				useMethodInstance: true
        }
    ],
    Model: Organization
};
