const mongoose =require("mongoose")
const bcrypt =require("bcryptjs")

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})


userschema.pre("save",async function(next){
    if(!this.isModified("password")) return  next();
    this.password =await bcrypt.hash(this.password,10);
    next();
})


const usermodel = mongoose.model("User",userschema);


module.exports =usermodel;