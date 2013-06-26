var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('&#1090;&#1077;&#1089;&#1090; &#1089;&#1090;&#1088;&#1072;&#1085;&#1080;&#1094;&#1099;');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});