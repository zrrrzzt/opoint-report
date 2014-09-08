'use strict';

var request = require('request')
  , loginUrl = 'http://monitor2.opoint.com'
  , reportOpts = {
      RA_report_preface:'',
      RA_report_footer:'',
      RA_use_categories:false,
      RA_categories:'',
      RA_range_option:'dr',
      actionPerformed:'RA_generate',
      actionCount:4,
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
      App_activeReport:18,
      App_activePRType:'drafts',
      App_activePR:0,
      App_width:1439,
      App_widthLeft:0.2,
      App_widthCenter:0.22,
      App_widthColorbar:201,
      App_callbacks:0,
      App_pullThreashold:5,
      App_activeItemLbl:"Adm. og politikere"
    }
  , requiredParams = ['session', 'opointJar', 'reportTemplate', 'reportTitle', 'reportHandleIdentical', 'startDate', 'endDate']
  ;

module.exports = function createReport(opts, callback){

  requiredParams.forEach(function(param){
    if(!opts[param]){
      return callback(new Error('Missing required param: ' + param), null);
    }
  });

  reportOpts.RA_report = opts.reportTemplate;
  reportOpts.RA_report_title = opts.reportTitle;
  reportOpts.RA_identical = opts.reportHandleIdentical;
  reportOpts.RA_dateFrom = opts.startDate;
  reportOpts.RA_dateTo = opts.endDate;
  reportOpts.session = opts.session;


  var reqOpts = {
        method:'POST',
        jar: opts.opointJar,
        headers : {
          'Referer': 'http://monitor2.opoint.com/',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36'
        },
        form: {json:JSON.stringify(reportOpts)}
      }
    ;

  request(loginUrl, reqOpts, function(err, response, body){
    if(err){
      return callback(err, null);
    }
    return callback(null, {response:response, body:body, status:'Report created'});
  });

};