const express=require('express');
const bodyparser=require('body-parser');
const request=require('request');
const https=require('https');
const app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/fir.html');
})

app.post('/',(req,res)=>{
  let finame=req.body.fname;
  let laname=req.body.lname;
  let gemail=req.body.email;
  console.log(finame ,laname, gemail);
})

app.listen(80,()=>{
    console.log("Server Start at 80")
})

// api Key
// 7e524c4a42b525899ebaa3cd67edfd01-us9