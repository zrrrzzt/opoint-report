'use strict';

var assert = require('assert')
  , opcr = require('../lib/createReport')
  ;

describe('opoint - inputs - createReport', function(){

  it('Should throw if session is not specified', function(done){

    var opts = {
        session:false,
        opointJar:true,
        reportTemplate:true,
        reportTitle:true,
        reportHandleIdentical:true,
        startDate:true,
        endDate:true
      }
      ;

    opcr(opts, function(err, data){
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
        session:true,
        opointJar:false,
        reportTemplate:true,
        reportTitle:true,
        reportHandleIdentical:true,
        startDate:true,
        endDate:true
      }
      ;

    opcr(opts, function(err, data){
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

  it('Should throw if reportTemplate is not specified', function(done){

    var opts = {
        session:true,
        opointJar:true,
        reportTemplate:false,
        reportTitle:true,
        reportHandleIdentical:true,
        startDate:true,
        endDate:true
      }
      ;

    opcr(opts, function(err, data){
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

  it('Should throw if reportTitle is not specified', function(done){

    var opts = {
        session:true,
        opointJar:true,
        reportTemplate:true,
        reportTitle:false,
        reportHandleIdentical:true,
        startDate:true,
        endDate:true
      }
      ;

    opcr(opts, function(err, data){
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

  it('Should throw if reportHandleIdentical is not specified', function(done){

    var opts = {
        session:true,
        opointJar:true,
        reportTemplate:true,
        reportTitle:true,
        reportHandleIdentical:false,
        startDate:true,
        endDate:true
      }
      ;

    opcr(opts, function(err, data){
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
        session:true,
        opointJar:true,
        reportTemplate:true,
        reportTitle:true,
        reportHandleIdentical:true,
        startDate:false,
        endDate:true
      }
      ;

    opcr(opts, function(err, data){
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
        session:true,
        opointJar:true,
        reportTemplate:true,
        reportTitle:true,
        reportHandleIdentical:true,
        startDate:true,
        endDate:false
      }
      ;

    opcr(opts, function(err, data){
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