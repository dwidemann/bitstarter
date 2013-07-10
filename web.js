var exppess = require('express');
var fs = require('fs');
var fn = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var indexString = fs.readFileSync(fn).toString().split('\n');
    //response.send('Hello World 2!');
    response.send(indexString[0]);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
