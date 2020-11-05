const express =require('express')
const app =express()



//testing the server whether is working or not..

app.listen(3000,()=>{
    console.log("server is listening on 3000");
});

app.get('/',(req,res)=>{
    res.send('hello there');
});

//yes it is working fine.