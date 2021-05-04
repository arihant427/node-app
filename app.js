var express = require('express');
var app = express();
var fs = require("fs");




app.get('/getdata', function (req, res) {
 var request = require("request");
    var options = { method: 'GET',
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
});

});

app.get('/', function (req, res){
              res.status(200).send({});
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
