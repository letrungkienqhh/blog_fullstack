const mongoose=require('mongoose');


const categorySchema = new mongoose.Schema({
 
    name:{
        type:String,
        trim:true,
        required:true,
       
    },
    slug:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        unique:true,
    }
},{timestamps:true}
)

module.exports=mongoose.model('Category',categorySchema)