const express =require('express')
const app =express()

//creating the route modules....


//testing the server whether is working or not..
app.listen(3000,()=>{
    console.log("server is listening on 3000");
});


//returns all the projects in the database.
app.get('/projects',(req,res)=>{

});

//create a new project and returns the project.
app.post('/projects',(req,res)=>{
    
});

//update the specified project
app.patch('/projects/:projectid',(req,res)=>{

});

//for deleting specified project 
app.delete('/projects/:projectid',(req,res)=>{

});

