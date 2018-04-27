'use strict';

var crypto = require('crypto');

exports.randomBytes = function(size) {
  return function() {
    return crypto.randomBytes(size);
  };
};
