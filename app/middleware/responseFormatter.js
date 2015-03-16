'use strict';

module.exports = function(req, res, next) {
  //'next' unused but needed for express.

  //Catch 404s here.
  if (!res.response) {
    var errorResponse = {};
    errorResponse.status = 400;
    errorResponse.code = errorResponse.status;
    errorResponse.error = 'Could not decode request: File Not Found';
    errorResponse.message = 'Could not decode request: File Not Found';
    errorResponse.stack = '';

    res.status(errorResponse.status).json(errorResponse); 
  }
};