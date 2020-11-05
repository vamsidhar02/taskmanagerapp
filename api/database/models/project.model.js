const mongoose=require('mongoose');

//creation of schema for project
const projectschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
    }
});

const project =mongoose.model('project',projectschema);

//exporting the project schema
module.exports={
    project
}