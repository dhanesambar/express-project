var express = require('express');
var fs = require('fs');
var app = express();

app.get('/display', function(req, res){
  var json = JSON.parse(fs.readFileSync('./employee.json','utf8'));
  res.send(json);
});

app.listen(7200);
console.log('Listening on port 7200');
