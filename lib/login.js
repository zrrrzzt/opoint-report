'use strict';

var request = require('request')
  , cheerio = require('cheerio')
  , opointJar = request.jar()
  , loginUrl = 'http://monitor2.opoint.com'
  , loginOpts = {
      login: 'Sign In',
      App_width: '1439'
    }
  , requiredParams = ['username', 'password']
  ;

function getSessionKey(callback){

  request(loginUrl, {jar:opointJar}, function(err, response, body){
    if(err){
      return callback(err, null);
    }
    var $ = cheerio.load(body.toString())
      , sessionKey = $('input[name="session"]');

    return callback(null, sessionKey.val());
  })

}

module.exports = function doLogin(opts, callback){

  var reqOpts = {
      method:'POST',
      jar: opointJar,
      headers : {
        'Referer': 'http://monitor2.opoint.com/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36'
      }
    }
    ;

  requiredParams.forEach(function(param){
    if(!opts[param]){
      return callback(new Error('Missing required param: ' + param), null);
    }
  });

  getSessionKey(function(error, sessionKey){
    if(error){
      return callback(error);
    }

    loginOpts.username = opts.username;
    loginOpts.password = opts.password;
    loginOpts.session = sessionKey;

    reqOpts.form = loginOpts;

    request(loginUrl, reqOpts, function(err, response, body){
      if(err){
        return callback(err, null);
      }

      return callback(null, {response:response, body:body, session:sessionKey, opointJar:opointJar});
    });

  });

};