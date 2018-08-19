var http =require("http")
var url = require("url")
var express = require('./express');
var app = express();


// http.createServer(function(request,response){
//     response.writeHead(200,{'content-type':'text/plain'});
//     var params=url.parse(request.url,true).query;
//     console.log(params);
//     response.write("网站名："+params.name);
//     response.write("\n");
//     response.write("网站URL："+params.url);
//     response.write("\n");
//     response.end('hello mainworld\n');
// }).listen(8856);
// console.log('server running at http://127.0.0.1:8856/');


// function start(){
//     function onRequest(request,response){
//         var pathname = url.parse(request.url).pathname;
//         console.log("Request for"+pathname+"received.");
//         response.writeHead(200,{"content-type":"text/plain"});
//         response.write("hello start");
//         response.end();
//     }
//     http.createServer(onRequest).listen(8856);
//     console.log("server has started.");
// }
// exports.start = start;
app.get('/',function(req,res){
    res.send("hello expr");
})

app.get('/test',function(req,res){
    console.log("/test get 请求");
    var params=url.parse(req.url,true).query;
    console.log(params);
    
    var response ={
        "first_name":"nihao",
        "last_name":"ok"
    };
    


    //res.send("test页面");
    //res.send("test页面结束");
    res.end(JSON.stringify(response));
})

var server = app.listen(8856,function(){
    var host = server.address().address
    var port =server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})