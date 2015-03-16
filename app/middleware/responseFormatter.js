'use strict';

module.exports = function(req, res, next) {
  //'next' unused but needed for express.

  //Catch 404s here.
  if (!res.response) {
    var errorResponse = 'Could not decode request: File Not Found';
    res.status(400).json({ 'error': errorResponse }); 
  }
};