'use strict';

var requiredParams = ['fileName']
  ;

module.exports = function downloadReport(opts, callback){

  requiredParams.forEach(function(param){
    if(!opts[param]){
      return callback(new Error('Missing required param: ' + param), null);
    }
  });

  return callback(null, {});
}