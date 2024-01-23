const http = require('http');
const data = require('./data');

http.createServer((req, resp)=>{
    resp.writeHead(200,{
        'content-type':'application\josn'
    }); //200 is the status
    resp.write(JSON.stringify({
        name:"alpha",
        age:"bita",
        Phone_no:"gama"
    }));
    resp.end();
}).listen(1500);