const app =require("./app")

const dotenv=require("dotenv");
dotenv.config({path : "backend/config/dotenv.config.env"})
app.listen(process.env.PORT,()=>{
    console.log('Server is working ')
})