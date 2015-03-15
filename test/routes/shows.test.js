'use strict';

var myApp = require('../../app.js');
var request = require('supertest')(myApp);
var expect = require('chai').expect;
var showsRoute = require('../../app/routes/shows');

describe('showsRoute', function() {
	it('should exist', function() {
		expect(showsRoute).to.be.a('function');
	});

	describe('POST /', function() {
	  it('should map the response correctly',function(done){
	  	request
	  		.post('/')
	  		.send({})
	  		.expect(200)
	  		.end(function(err,res) {
        	expect(res.body).to.have.property('Response');
        	expect(res.body.Response).to.be.a('array');
	  			done();
	  		});
	  });
	});
});