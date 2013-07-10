var 	express = require('express'),
		fs = require('fs'),
		app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var message = fs.readFileSync('index.html', {encoding: 'utf8'});
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});