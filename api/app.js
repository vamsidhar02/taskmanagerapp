const mongoose=require('./database/mongoose');
const express =require('express')
const app =express()
//imported those two schemas 
const {project}=require('./database/models/project.model');
const { task } = require('./database/models/tasks.model');

//body parser 
const bodyparser=require('body-parser');

app.use(bodyparser.json());


//we are getting some cors errors to eliminate that we are including these
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next();
});

//creating the route modules....

//testing the server whether is working or not..
app.listen(3000,()=>{
    console.log("server is listening on 3000");
});


//  THESE ARE FOR PROJECTS 


//returns all the projects in the database.
app.get('/projects',(req,res)=>{
    project.find({}).then((projects)=>{
        res.send(projects);
    })
});

//create a new project and returns the project.
app.post('/projects',(req,res)=>{
    let title=req.body.title; // this needs body parser 
    //creation of new project by accepting title from user
    let newproject=new project({
        title
    });
    //saving the project and giving the response a projectdocument of json format
    newproject.save().then((projectdocument)=>{
        res.send(projectdocument);
    });
});

//update the specified project
app.patch('/projects/:projectid',(req,res)=>{
    project.findOneAndUpdate({_id:req.params.projectid},{
        //update the body which by the contents of req.body using id which we get from the req._id
        $set:req.body
    }).then(()=>{
        res.sendStatus(200);//responding by sending status signal for the updated project project..(we can even send the updated project if we want to)
    });
});

//for deleting specified project 
app.delete('/projects/:projectid',(req,res)=>{
project.findByIdAndRemove({_id:req.params.projectid}).then((removedproject)=>{
    res.send(removedproject);
});
});


//THESE ARE FOR TASKS 

app.get('/projects/:projectid/tasks',(req,res)=>{
    //for getting all the tasks of a project using project id
    task.find({projectid:req.params.projectid}).then((tasks)=>{
        res.send(tasks);
    })
})


app.post('/projects/:projectid/tasks',(req,res)=>{
    //for posting/creating the tasks of a project using project id
    let title=req.body.title;
    let projectid=req.params.projectid;

    let newtask=new task({
        title,
        projectid
    });
    newtask.save().then((newtaskdocument)=>{
        res.send(newtaskdocument)
    })
})


app.patch('/projects/:projectid/tasks/:taskid',(req,res)=>{
    //for updating the tasks of projects using project id and task id
    task.findByIdAndUpdate({
        projectid:req.params.projectid,
        _id:req.params.taskid
    },
    {
        $set:req.body
    }
    ).then(()=>{
        res.sendStatus(200);
    });
});

app.delete('/projects/:projectid/tasks/:taskid',(req,res)=>{
    //for deleting the tasks of projects using project id and task id 
    task.findByIdAndRemove({
        projectid:req.params.projectid,
        _id:req.params.taskid}).then((removedtask)=>{
            res.send(removedtask);
        });
});