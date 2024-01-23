const express = require('express');

const app = express();

// app.get('',(req, resp)=>{
//     console.log(req);
//     resp.send("hello, My name is Vikash");
// })
app.get('',(req, resp)=>{
    // console.log("data sent to browser =>>",req.query.name);
    resp.send("hello, My name is Vikash"+req.query.name);
})

app.get('/about',(req, resp)=>{
    resp.send("hello, I am from about");
})
app.get('/help',(req, resp)=>{
    resp.send("hello, I am from help");
});
app.listen(4500);
