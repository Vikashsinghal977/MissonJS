const http = require('http');

// function deploy(req, resp){
//     resp.write("This side Vikash Singhal")
//     resp.end();
// }
// http.createServer(deploy).listen(4500);
// const add = (a) => a*10;

http.createServer((req, resp)=>{
    resp.write("This side Vikash Singhal");
    resp.end();
}).listen(4500);