const mongoose= require('mongoose')

const {Schema}= mongoose;

//here make a schema object wheere we input our required data 
const UserSchema= new Schema({

    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
// NOW WE CAN PERFORM THE CRUD OPERATION ON THIS SCHEMA MODEL 
//exports.User = mongoose.model('User',UserSchema)
module.exports = mongoose.model('user',UserSchema)