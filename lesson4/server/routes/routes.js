exports.routes = function routes (app) {

	var contacts =  require('../components/contacts');

	//fetching all users
	app.get('/app', contacts.getAllContacts);
	app.get('/app/:id', contacts.getContactById);
	app.post('/app', contacts.addNewContact);
	app.delete('/app/:id', contacts.deleteContact);
	app.put('/app/:id', contacts.editContact);
};