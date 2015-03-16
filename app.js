'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var util = require('util');
var fs = require('fs');
var errorHandler = require('./app/middleware/errorHandler');
var responseFormatter = require('./app/middleware/responseFormatter');
var routesDir = './app/routes/';

var app = module.exports = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('MI9 Coding Test App by Sambaran Roy!');
});
var routes = fs.readdirSync(routesDir);
routes.forEach(function(route) {
	var routePath = routesDir + route;
	require(routePath)(app, errorHandler);
});

app.use(responseFormatter);
app.use(errorHandler);

app.listen(app.get('port'), function() {
	console.log(util.format('Server listening on port %d.', app.get('port')));
});