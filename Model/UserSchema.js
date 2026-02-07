const mongoose=require("mongoose");//Mongoose ek ODM (Object Data Modeling) library hai jo Node.js aur MongoDB ko connect karti hai. 
// Iske through hum schemas, models, aur queries easily define kar sakte hain.

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,max:50
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        min:6
    }
},{timestamps:true});
module.exports=mongoose.model("practice",UserSchema);