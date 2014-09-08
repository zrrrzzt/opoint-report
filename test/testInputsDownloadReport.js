'use strict';

var assert = require('assert')
  , opr = require('../lib/downloadReport')
  ;

describe('opoint - inputs - downloadReport', function(){

  it('Should throw if fileName is not specified', function(done){

    var opts = {
        filename:false
      }
      ;

    opr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: fileName/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});