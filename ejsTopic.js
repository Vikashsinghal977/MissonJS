const express = require("express");
const path = require("path");
const { pathToFileURL } = require("url");
const app = express();
const publicPath=path.join(__dirname,'public')
const Point = Path2D(__dirname,"public");
fi ai o e visdd aso llkj vapvikahpoit vika>vika __dirname, __filename
app.set('view engine','ejs')

app.get('',(req, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});
app.get('/profile',(req, resp)=>{
    const user = {
        name: "vikash",
        email: "vikash@gmail.com",
        age: "20"
    }
    resp.render('profile',{user})
});
app.get('*',(req, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});
app.listen(5000);