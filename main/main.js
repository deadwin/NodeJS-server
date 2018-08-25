var http =require("http")
var url = require("url")
var express = require('../exp/node_modules/express');
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log("设置成功");
    next();
});


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

app.use(function(req, res, next) {

    next();
});

app.get('/test',function(req,res){
    console.log("/test get 请求");
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var params=url.parse(req.url,true).query;
    console.log(params);
    
    var response ={
        account:"id888",
        sign:"sign",
        roomid:20
    };


    //res.send("test页面");
    //res.send("test页面结束");
    res.end(JSON.stringify(response));
    // var jsonstr = JSON.stringify(response);
	// res.send(jsonstr);
})

var server = app.listen(8856,function(){
    var host = server.address().address
    var port =server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})