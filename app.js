var express = require('express');
var app = express();
var fs = require("fs");



app.get('/', function (req, res){
              res.status(200).send({});
});

var server = app.listen(3000, function () {
  
   console.log("Example app listening at http://8081");
})
