'use strict';

module.exports = function(app) {
  app.post('/', function(req, res, next) {
    res.send({ Response: [] });
  });
}