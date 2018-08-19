var http =require("http")
var url = require("url")

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});

    response.end('hello mainworld\n');
}).listen(8856);
console.log('server running at http://127.0.0.1:8856/');