'use strict';

module.exports = function (err, req, res, next) {
  //'next' unused but needed for express.

  if(!err) return;
  var errorResponse = 'Could not decode request: ' + (err.message || 'Server error occurred.');
  var errorStatus = err.status || err.statusCode || 400;

  res.status(errorStatus).json({ 'error': errorResponse });
};