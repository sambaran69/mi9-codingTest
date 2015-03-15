'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var util = require('util');

var port = process.env.port || 3000;

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(port, function() {
	console.log(util.format('Server listening on port %d.', port));
});