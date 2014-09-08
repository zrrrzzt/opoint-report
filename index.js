'use strict';

var login = require('./lib/login')
  , createReport = require('./lib/createReport')
  , downloadReport = require('./lib/downloadReport')
  ;

module.exports.login = login;

module.exports.createReport = createReport;

module.exports.downloadReport = downloadReport;