var express = require('express');
var app = express();
var fs = require("fs");

var cors = require('cors')


var corsOptions = {

  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/getdata',cors(corsOptions), function (req, res) {
var request = require("request");
    /* var options = { method: 'GET',
    url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=301001&date=03-05-2021',
   
 }
 request(options, function (error, response, body) {
        if (error) {
          console.error(error);
                        res.status(200).send(error);

        }
        else{
          console.log(response);
        }
              res.status(200).send(response);
});*/



var options = { method: 'GET',
  url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin',
  qs: { pincode: '301001', date: '04-05-2021' },
  headers: 
   { 'postman-token': '6d91a281-de1e-2299-d8bc-24f6a24f0c47',
   	'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
     'cache-control': 'no-cache',
     'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
     'access-control-allow-methods': 'GET, POST, DELETE, OPTIONS',
     'access-control-allow-origin': 'cowin.basicfloat.com' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  res.status(200).send(body);
});

});








app.get('/', function (req, res){
              res.status(200).send({});
});

var server = app.listen(process.env.PORT || 5000, function () {
  
   console.log("Example app listening at http://8081");
})



