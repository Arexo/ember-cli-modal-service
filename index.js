/* jshint node: true */
'use strict';

var path = require('path');

function importBootstrap(parent){

  while (parent.app) {
    parent = parent.app;
  }

  var bootstrapPath = path.join(parent.bowerDirectory, 'bootstrap/dist');

  parent.import(path.join(bootstrapPath, 'css/bootstrap.css'));
  //app.import(path.join(bootstrapPath, 'css/bootstrap.css.map'), {destDir: 'assets'});

  parent.import(path.join(bootstrapPath, 'js/bootstrap.js'));

  parent.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.eot'), {destDir: '/fonts'});
  parent.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.svg'), {destDir: '/fonts'});
  parent.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.ttf'), {destDir: '/fonts'});
  parent.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff'), {destDir: '/fonts'});
  parent.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff2'), {destDir: '/fonts'});

}

module.exports = {
  name: 'ember-cli-modal-service',
  included(parent) {
  	this._super.included.apply(this, arguments);
  	importBootstrap(parent);
  }
};
