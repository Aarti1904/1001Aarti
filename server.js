var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


//server configuration
//app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
  
    res.send("HEllo world");
}
});
 

app.get('/hello', function (req, res) {
  console.log("Calling rest api");
  var person={firstName:'Aarti',lastName:'Madre',age:23};
  res.send(person);
});

 
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8081", host, port)
})