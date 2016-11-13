var _ = require('underscore');
var Uuid = require('node-uuid');

var EntryId = 'EntryId_' + Uuid.v4();
var contacts = [];

exports.getAllContacts = function getAllContacts (req, res) {
	res.send(contacts);

};

exports.getContactById = function getContactById (req, res) {

	if (!req.params.id) {
		res.status(409).res.send('id is mondatory');
	}

	var fullInfoOfContact = [];
	contacts.map( function returnContact (item) {

		if(req.params.id == item.id ) {
			// res.send(item);
			fullInfoOfContact.push(item);
		}
	});
	
	res.send(fullInfoOfContact);


};

exports.addNewContact = function addNewContact (req, res) {
	console.log(req.body);

	if (!req.body.name) {
		res.status(409).res.send('name is mondatory');
	}

	if (!req.body.phone) {
		res.status(409).res.send('phone is mondatory');
	}

	if (!req.body.address) {
		res.status(409).res.send('address is mondatory');
	}



	var addContact = {
		id: Uuid.v4(),
		name: req.body.name,
		phone: req.body.phone,
		address: req.body.address

	};
	contacts.push(addContact);
	res.send('Success added new Contact');

};

exports.deleteContact = function deleteContact (req, res) {

	if (!req.params.id) {
		res.status(409).res.send('id is mondatory');
	}

	contacts.forEach( function findAndDeleteContact (item) {
//if true find index and delete contact 
		if(req.params.id == item.id) {
			contacts.splice(contacts.indexOf(item), 1);
			res.send('Contact was deleted');
		}
	});


};

exports.editContact = function editContact (req, res) {
	console.log(req.body);

	if (!req.params.id) {
		res.status(409).res.send('id is mondatory');
	}
	contacts.forEach( function findAndDeleteContact (item) {
//if true find index and delete contact 
		if(req.params.id == item.id) {
			item.name = req.body.name
			item.phone = req.body.phone
			item.address = req.body.address
			res.send(item);
		}
	});

};