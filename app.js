'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var util = require('util');
var fs = require('fs');
var errorHandler = require('./app/middleware/errorHandler');

var routesDir = './app/routes/';
var port = process.env.port || 3000;

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

var routes = fs.readdirSync(routesDir);
routes.forEach(function(route) {
	var routePath = routesDir + route;
	require(routePath)(app, errorHandler);
});

app.listen(port, function() {
	console.log(util.format('Server listening on port %d.', port));
});