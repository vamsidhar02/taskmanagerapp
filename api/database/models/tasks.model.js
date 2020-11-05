const mongoose=require('mongoose');

const taskschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
    },
    projectid:{
        type:mongoose.Types.ObjectId,
        required:true,
    }
});

const task=mongoose.model('task',taskschema);

//exporting the task schema
module.exports={
    task
}