var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(express.static(__dirname + '/../public'));

require('./routes/routes.js').routes(app);

var server = app.listen('3000', function () {
	console.log('server listen on port' + server.address().port);
});