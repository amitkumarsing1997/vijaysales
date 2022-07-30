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


app.get("/login",(req,res)=>{

    res.send(
        "<h1>Vijay Sales</h1>"
        +"<h3>Login</h3>"
        +"</hr>"
        +"<form>"
        +"<input/>"
        +"<br/>"
        +"<input/>"
        +"<button>login</button>"
    
        +"</form>"
    )
});

var server = app.listen("8000");
console.log("vijay sales runs on port 8000");

