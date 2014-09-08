'use strict';

var requiredParams = ['session', 'opointJar', 'reportTemplate', 'reportTitle', 'reportHandleIdentical', 'startDate', 'endDate']
  ;

module.exports = function createReport(opts, callback){

  requiredParams.forEach(function(param){
    if(!opts[param]){
      return callback(new Error('Missing required param: ' + param), null);
    }
  });

  return callback(null, {});
}