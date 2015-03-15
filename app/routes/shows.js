'use strict';

module.exports = function(app, callback) {
  app.post('/', function(req, res, next) {
    res.send({ Response: [] });
  });
}