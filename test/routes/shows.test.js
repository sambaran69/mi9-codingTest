'use strict';

var myApp = require('../../app.js');
var request = require('supertest')(myApp);
var expect = require('chai').expect;
var showsRoute = require('../../app/routes/shows');
var testData = require('../data/testData.json');

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
	  it('should parse test data to return 3 results',function(done){
	  	request
	  		.post('/')
	  		.send(testData)
	  		.expect(200)
	  		.end(function(err,res) {
        	expect(res.body).to.have.property('Response');
        	expect(res.body.Response).to.be.a('array');
        	expect(res.body.Response.length).to.be(3);        	
	  			done();
	  		});
	  });
	  it('should parse test data to return response correctly',function(done){
	  	request
	  		.post('/')
	  		.send(testData)
	  		.expect(200)
	  		.end(function(err,res) {
        	expect(res.body).to.have.property('Response');
        	expect(res.body.Response[0].title).toEqual("16 Kids and Counting");
        	expect(res.body.Response[1].title).toEqual("The Taste");
        	expect(res.body.Response[2].title).toEqual("Thunderbirds");        	        	
	  			done();
	  		});
	  });
	  it('should return response with status 400 for invalid request',function(done){
	  	request
	  		.post('/')
	  		.send({})
	  		.expect(400)
	  		.end(function(err,res) {
					expect(res.status).toEqual(400);
	  			done();
	  		});
	  });	
	});
});