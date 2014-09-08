'use strict';

var fs = require('fs')
  , request = require('request')
  , cheerio = require('cheerio')
  , requiredParams = ['session', 'opointJar', 'fileName']
  , loginUrl = 'http://monitor2.opoint.com'
  , formOpts = {
      actionPerformed:'MB_select',
      actionCount:14,
      App_activeMode:'reporting',
      App_activeItemType:'list',
      App_activeItem:112382,
      App_activeTab:'article',
      App_tagState:1,
      App_tagFocus:133978,
      App_tagLastOp:0,
      App_activeReportType:0,
      App_activeAlertType:'mail',
      App_activeAlert:0,
      App_activeReport:2,
      App_activePRType:'drafts',
      App_activePR:0,
      App_width:1439,
      App_widthLeft:0.2,
      App_widthCenter:0.22,
      App_widthColorbar:201,
      App_callbacks:0,
      App_pullThreashold:5,
      App_activeItemLbl:'Adm. og politikere'
    }
  ;


function getLatestReportUrl(opts, callback){

  var reqOpts = {
      method: 'POST',
      jar: opts.opointJar,
      headers : {
        'Referer': 'http://monitor2.opoint.com/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36'
      },
      form : opts.form
    }
    ;

  request(loginUrl, reqOpts, function(err, response, body){
    if(err){
      return callback(err, null);
    }
    //console.log(body.toString());
    var $ = cheerio.load(body.toString())
      , reportUrl = loginUrl + $('#HistoryCollection_items .view').attr('href')
      ;

    return callback(null, {response:response, body:body, reportUrl:reportUrl});

  });
}

module.exports = function downloadReport(opts, callback){

  requiredParams.forEach(function(param){
    if(!opts[param]){
      return callback(new Error('Missing required param: ' + param), null);
    }
  });

  formOpts.session = opts.session;

  getLatestReportUrl({opointJar:opts.opointJar, form:formOpts}, function(err, data){
    if(err){
      return callback(err, null);
    }

    var wStream = fs.createWriteStream(opts.fileName);

    wStream.on('finish', function(){
      data.status = 'File downloaded';
      return callback(null, data);
    });

    request(data.reportUrl).pipe(wStream);

  });

}