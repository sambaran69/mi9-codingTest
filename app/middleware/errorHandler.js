'use strict';

module.exports = function (err, req, res, next) {
  //'next' unused but needed for express.
  if(!err) return;
  var errorResponse = {};
  errorResponse.status = err.status || err.statusCode || 400;
  errorResponse.code = err.code || errorResponse.status;
  errorResponse.message = err.friendlyMessage || 'Server error occurred.';
  errorResponse.developerMessage = err.message || 'Undefined server error.';
  errorResponse.stack = err.stack;

  res.status(errorResponse.status).json(errorResponse);
};