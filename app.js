const express=require("express");
const app=express();

app.set("view engine","ejs");

app.get('/',function(req,res){
    res.send("Welcome to my assignments");
})

app.get('/speak/:animals',function(req,res){
    var sounds={
        tiger:"Ha ha",
        cat:'meo',
        cow:'huma'
        };
    var animal=req.params.animals.toLowerCase();
   console.log(animal);
    var sound=sounds[animal]
    
    res.send(animal+" speaks "+sound);
})

app.get('/repeat/:message/:times',(req,res)=>{
    var message=req.params.message;
    var times=req.params.times
    var sendd=message;
    for(var i=0;i<times;i++){
        sendd=sendd+" "+message;
    }
    res.send(sendd);
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The server has started!");
});