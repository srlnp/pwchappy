var express=require("express");
var app=express();
app.get("/",(req,res)=>{
    res.send("welcome to pwc");
})
app.listen("3000",function(){
 console.log("server listinng port no 3000");   
})