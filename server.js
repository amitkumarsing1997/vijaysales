var express = require("express");
var app = express();
app.get("/",(req,res)=>{

    res.send(
        "<h1>Vijay Sales</h1>"
        +"</hr>"
        +"<h3>smart devices for sales</h3>"
        +"</br"
        +"<ol>"
        +"<li>laptops</li>"
        +"<li>Mobile phones</li>"
        +"<li>Holographics devices</li>"
        +"<li>SmartWatches</li>"
        +"<li>Gaming Consoles</li>"
        +"</ol"
    )

    

});

app.get("/aboutus",(req,res)=>{

    res.send(
        "<h1>Vijay Sales</h1>"
        +"</hr>"
        +"<h3>Doing things extraordernery </h3>"
        +"</br"
        +"<ol>"
        +"<li>Chief Mentor : Ravi Tambade</li>"
        +"<li>Director : Shubangi Tambade</li>"
        +"<li>subject Matter Experts : Rohit Gore</li>"
        +"</ol"
    )

    

});
var server = app.listen("9000");
console.log("vijay sales runs on port 9000");

