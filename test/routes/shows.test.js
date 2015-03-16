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
	  		.send(testData)
	  		.expect(200)
	  		.end(function(err,res) {
        	expect(res.body).to.have.property('response');
        	expect(res.body.response).to.be.a('array');
	  			done();
	  		});
	  });
	  it('should parse test data to return 3 results',function(done){
	  	request
	  		.post('/')
	  		.send(testData)
	  		.expect(200)
	  		.end(function(err,res) {
        	expect(res.body).to.have.property('response');
        	expect(res.body.response).to.be.a('array');
        	expect(res.body.response.length).to.be.equal(3);        	
	  			done();
	  		});
	  });
	  it('should parse test data to return response correctly',function(done){
	  	request
	  		.post('/')
	  		.send(testData)
	  		.expect(200)
	  		.end(function(err,res) {
        	expect(res.body).to.have.property('response');
        	expect(res.body.response[0].title).to.be.equal("16 Kids and Counting");
        	expect(res.body.response[1].title).to.be.equal("The Taste");
        	expect(res.body.response[2].title).to.be.equal("Thunderbirds");        	        	
	  			done();
	  		});
	  });
	  it('should return response with status 400 for bad request - no data',function(done){
	  	request
	  		.post('/')
	  		.send({})
	  		.expect(400)
	  		.end(function(err,res) {
					expect(res.body.error).to.be.equal('Could not decode request: JSON parsing failed');				
	  			done();
	  		});
	  });
	  it('should return response with status 400 for bad request - invalid JSON',function(done){
	  	request
	  		.post('/')
	  		.send({ 'abcd': 'efgh' })
	  		.expect(400)
	  		.end(function(err,res) {
					expect(res.body.error).to.be.equal('Could not decode request: JSON parsing failed');				
	  			done();
	  		});
	  });
	  it('should return response with status 400 for bad request - JSON with no array',function(done){
	  	request
	  		.post('/')
	  		.send({ 'payload': 'no array value' })
	  		.expect(400)
	  		.end(function(err,res) {
					expect(res.body.error).to.be.equal('Could not decode request: JSON parsing failed');				
	  			done();
	  		});
	  });	  
	  it('should return response with status 400 for bad request - invalid Path',function(done){
	  	request
	  		.post('/invalidPath')
	  		.send({})
	  		.expect(400)
	  		.end(function(err,res) {
					expect(res.body.error).to.be.equal('Could not decode request: File Not Found');				
	  			done();
	  		});
	  });		    
	});
});