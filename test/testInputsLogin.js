'use strict';

var assert = require('assert')
  , login = require('../lib/login')
  ;

describe('opoint - inputs - login', function(){

  it('Should throw if username is not specified', function(done){

    var opts = {
        username:false,
        password:true
      }
      ;

    login(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: username/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Should throw if password is not specified', function(done){

    var opts = {
        username:true,
        password:false
      }
      ;

    login(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: password/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});