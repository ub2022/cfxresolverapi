var express = require('express');
var app = express();
var child_process = require('child_process');
var shelljs = require ('shelljs')
var PORT = 8080;
 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port http://ip:", PORT);
})

app.get('/cfx',(req,res)=>{
var {cfx} = req.query;

var cfx_result = shelljs.exec(`node cfx.js ${cfx}`);


res.jsonp({msg:`Result ${cfx_result}`})


});

