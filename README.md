#opoint-report [![Build Status](https://travis-ci.org/zrrrzzt/opoint-report.svg?branch=master)](https://travis-ci.org/zrrrzzt/opoint-report)

Node.js module for creating and downloading reports from Opoint's [monitor solution](http://monitor2.opoint.com/)

##Installation
Use [npm](https://www.npmjs.org/)

```
$ npm install opoint-report
```

##Test
Make sure you have [Mocha](https://www.npmjs.org/package/mocha) installed.

```
$ npm test
```

##Usage

You can create and download reports.

At the moment download is limited to the latest report created. That might change in future versions.

##Create report
Creates a new report

Requires sessionkey and coookiejar provided by the login method.

Required params

*reportTemplate* - Valid options 1, 2, 3, 11, 12, 13, 17, 18 , 19, 20

*reportTitle*

*reportHandleIdentical* - Valid options 0, 2, 3

*startDate* - timestamp format

*endDate* - timestamp format


```
var opoint = require('opoint-report')
  , loginOpts = {
    username: 'MyUserName',
    password: 'MyTopSecretPassword'
  };

opoint.login(loginOpts, function(err, data){
  if(err){
    console.error(err);
  } else {

    var repOpts = {
          session: data.session,
          opointJar: data.opointJar,
          reportTemplate: '18',
          reportTitle: 'API test - new and improved',
          reportHandleIdentical:'0',
          startDate:1406847600,
          endDate:1409525999
        }
      ;

    opoint.createReport(repOpts, function(error, crdata){
      if(error){
        console.error(error);
      } else {
        console.log(crdata.status);
      }
    });
  }
});
```

##Dowload report

Downloads the latest created report.

Requires sessionkey and coookiejar provided by the login method.

Required params

*fileName*

```
var opoint = require('opoint-report')
  , loginOpts = {
    username: 'MyUserName',
    password: 'MyTopSecretPassword'
  };

opoint.login(loginOpts, function(err, data){
  if(err){
    console.error(err);
  } else {
    var dlOpts = {
          session: data.session,
          opointJar: data.opointJar,
          fileName: 'report.xlsx'
        }
      ;
    opoint.downloadReport(dlOpts, function(error, dldata){
      if(error){
        console.error(error);
      } else {
        console.log(dldata.status);
      }
    });
  }
});
```

##Disclaimer
This is not an official API for [Opoint's](http://opoint.no/) services.