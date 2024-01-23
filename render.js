const express = require('express');
const { rawListeners } = require('process');
const app = require("url")
const app = express();

app.get('',(req,resp)=>{
    resp.send(`<h1>Welcome, To my Page</h1><a href="/form">Go too The form</a>`);
});
app.get('/form',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="user name" value=${req.query.name}>
    <button>click Me</button>
    `);
});
app.get('/file',(req,resp)=>{
    resp.send([
        {
            name: "Vikash",
            age: 20
        }
    ]);
});
app.listen(4500);


const point = new URL("www.pointer.com")
point.get('form',(req, resp)=>{
    resp.URL(`<input type = "text" placeholder = "user name" value=${req.query.name}`);
})

const pointer = new rawListeners();

pointer.URL("pointer" (req, resp)=>{
    resp.send([
        {
            name: "Rahul",
            class:
        }
    ])
})