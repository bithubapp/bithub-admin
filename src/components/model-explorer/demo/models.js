// import Organization from 'bithub-admin/models/organization';
import User from 'bithub-admin/models/user/';

const models = {};

export default models;

// Users Model
models['user'] = {
    label: 'User',
    methods: [
        {value: 'getList', label: 'Get List'},
		{
			value: 'get',
			label: 'Get (one)',
            defaultRequest: {
                email: ''
            }
		},
        {
            value:'save',
            label: 'Save/Update',
            defaultRequest: {
                email: ''
            },
			useMethodInstance: true
        }
    ],
    Model: User
};


// models['organization'] = {
//     label: 'Organization',
//     methods: [
//         {value: 'getList', label: 'Get List'},
// 		{value: 'get', label: 'Get (one)'},
//         {
//             value:'invite',
//             label: 'Invite',
//             defaultRequest: {
//                 email: ''
//             },
// 				useMethodInstance: true
//         }
//     ],
//     Model: Organization
// };
