'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.resources('test', '/api/v1/test', 'test');
};
