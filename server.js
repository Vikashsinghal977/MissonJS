const http = require('http')

http.createServer((req, resp)=>{
    resp.write("<h1>hello I am Singhal<h2>");
    resp.end();
}).listen(4500);