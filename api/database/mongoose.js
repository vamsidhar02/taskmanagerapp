//mongo db connection

const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/taskmanager',{useNewUrlParser:true}).then(()=>{
    console.log('connection to mongodb is successful');
}).catch((er)=>{
    console.log('connection failed');
    console.log(er);
})