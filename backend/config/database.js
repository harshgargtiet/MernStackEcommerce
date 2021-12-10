const mongoose =require ("mongoose");
const dotenv=require("dotenv");
dotenv.config({path : "backend/config/config.env"})
const URI =process.env.DB_URL ;
const connectDatabase =()=>{
    mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true }).then(
        (data)=>{
            console.log(`MongoDB connected with server : ${data.connection.host}`);

        }
    )
}

module.exports=connectDatabase