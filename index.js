require('coffee-script');
module.exports.Engine = require('./lib/engine');
module.exports.parse = require('./lib/parser').parse;
module.exports.parseFiles = require('./lib/parser').parseFiles;
