 const express =require("express");
 const path =require("path");
 const bodyParser =require("body-parser");
 const https =require("https");
 const app =  express();

//  var server = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public1')));
app.use(bodyParser.urlencoded({extended : true}));

// const PORT = process.env.PORT || 3000;
 app.get('/' , function(req,res){
      res.sendFile(__dirname+"/public/index1.html");
 })
//  app.get('/about' , function(req,res){
//     res.send("<h1>welcome to about page</h1>");
// })
// app.get('/Contact' , function(req,res){
//     res.send("<h1>welcome to contact page</h1>");
// })
// app.get('/More' , function(req,res){
//     res.send("<h1>welcome to more page</h1>");
// })

// app.post('/' , function(req,res){
//     var Username=req.body.username;
//     var Password=req.body.password;
//     res.send("Username :"+Username+"<br>" +"Password :"+Password);
// })

    app.post('/' , function(req,res){
        var Cname=req.body.city;
        
  
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ Cname+"&appid=b3ca2508275672f716a69a82a3f34f7d&units=metric";
  
   https.get(url,function(response){
    response.on("data",function(data){
        const wthr=JSON.parse(data);
        const badal=wthr.weather[0].main;
         const pic=wthr.weather[0].icon;
         const temp=wthr.main.temp;
         const imgurl="http://openweathermap.org/img/wn/"+pic+"@2x.png";
        res.write("<h1>The temperature is: "+temp+"<br></h1>");
        res.write("<h1>The cloud situation is : "+badal+"<br></h1>");
        res.write("<img src="+imgurl+">");
        res.send();
    })    
    })
   })

 app.listen(process.env.PORT || 3000,function(req,res){
      console.log("port is listening at 3000)");
 })
