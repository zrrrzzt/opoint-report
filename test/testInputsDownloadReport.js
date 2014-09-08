'use strict';

var assert = require('assert')
  , opr = require('../lib/downloadReport')
  ;

describe('opoint - inputs - downloadReport', function(){

  it('Should throw if fileName is not specified', function(done){

    var opts = {
        fileName:false,
        session: true,
        opointJar: true
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


  it('Should throw if session is not specified', function(done){

    var opts = {
        fileName:true,
        session: false,
        opointJar: true
      }
      ;

    opr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: session/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });


  it('Should throw if opointJar is not specified', function(done){

    var opts = {
        fileName:true,
        session: true,
        opointJar: false
      }
      ;

    opr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: opointJar/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});