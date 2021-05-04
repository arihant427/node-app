var express = require('express');
var app = express();
var fs = require("fs");



app.get('/', function (req, res){
              res.status(200).send({});
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://8081");
})
