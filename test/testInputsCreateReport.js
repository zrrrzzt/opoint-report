'use strict';

var assert = require('assert')
  , opr = require('../lib/createReport')
  ;

describe('opoint - inputs - createReport', function(){

  it('Should throw if reportTemplate is missing', function(done){

    var opts = {
        reportTemplate:false,
        reportTitle:true,
        reportHandleIdentical: true,
        startDate: true,
        endDate: true
      }
      ;

    opr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: reportTemplate/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Should throw if reportTitle is missing', function(done){

    var opts = {
        reportTemplate:true,
        reportTitle:false,
        reportHandleIdentical: true,
        startDate: true,
        endDate: true
      }
      ;

    opr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: reportTitle/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Should throw if reportHandleIdentical is missing', function(done){

    var opts = {
        reportTemplate:true,
        reportTitle:true,
        reportHandleIdentical: false,
        startDate: true,
        endDate: true
      }
      ;

    opr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: reportHandleIdentical/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Should throw if startDate is not specified', function(done){

    var opts = {
        reportTemplate:true,
        reportTitle:true,
        reportHandleIdentical: true,
        startDate: false,
        endDate: true
      }
      ;

    opr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: startDate/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Should throw if endDate is not specified', function(done){

    var opts = {
        reportTemplate:true,
        reportTitle:true,
        reportHandleIdentical: true,
        startDate: true,
        endDate: false
      }
      ;

    opr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: endDate/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});