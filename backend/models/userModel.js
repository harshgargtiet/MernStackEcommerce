const mongoose = require("mongoose") ;
const validator = require("validator");

const userSchema = new mongoose.Schema({

    name :{
        type :String,
        required :[true,"Please enter your Name "],
        maxLength :[30,"Name cannot exceeds 30 characters"],
        minlength:[4,"Name should have more than 4 characters"]

    },
    email:{
        type: String ,
        required : [true ,"Please enter your Email"],
        unique : true,
        validate : [validator.isEmail,"Please enter the valid email"]
    },
    password:{
        type: String ,
        required : [true,"Please enter your Password"],
        minlength :[8,"Password should be more than 8 characters"],
        select : false 
    },
    avatar : {
        public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          }
    },
    role :{
        type : String,
        default: "user",
    },
    resetPasswordToken : String,
    resetPasswordExpire : Date, 

})

module.exports=mongoose.model("User",userSchema);