'use strict';

module.exports = function (err, req, res, next) {
  //'next' unused but needed for express.

  if(!err) return;
  var errorResponse = {};
  var errorString = err.message.split(':');
  errorResponse.status = err.status || err.statusCode || 400;
  errorResponse.code = err.code || errorResponse.status;
  errorResponse.error = errorString[0];
  errorResponse.message = err.message || 'Server error occurred.';
  errorResponse.stack = err.stack;

  res.status(errorResponse.status).json(errorResponse);
};