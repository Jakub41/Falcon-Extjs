Ext.define('jakub.model.UsersModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'Name', type: 'string' },
		{ name: 'Firstname', type: 'string' },
		{ name: 'Lastname', type: 'string' },
		{ name: 'Department', type: 'string' },
		{ name: 'E-Mail *', type: 'string' },
		{ name: 'Login', type: 'string' },
		{ name: 'Status', type: 'string' }
	]
})