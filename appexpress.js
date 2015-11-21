var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
// untuk menjalankan di browser perlu syntax ini
// akses di browser dengan url "localhost:3700"
var port = Number(process.env.PORT || 3700);
app.listen(port, function(){
  console.log("Listening on "+port);

});
