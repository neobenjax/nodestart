var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response){
  response.writeHead(200, {'Content-type':'text/plain'});
  response.write('<h1>Pollo</h1>');
  response.write(module1.cadena);
  module1.moduleFunction();
  response.write(module2.stringVar);
  module2.funcionModule2();
  response.end();
}

http.createServer(onRequest).listen(9999);
