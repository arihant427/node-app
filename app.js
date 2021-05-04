/*var express = require('express');
var app = express();
var fs = require("fs");



app.get('/', function (req, res){
              res.status(200).send({});
});

var server = app.listen(3000, function () {
  
   console.log("Example app listening at http://8081");
})
*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.status(200).send({});
});

app.listen(process.env.PORT || 5000, () => console.log(`url-shortener listening on port ${port}!`));
