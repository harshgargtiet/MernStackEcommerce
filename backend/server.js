const app =require("./app")

const dotenv=require("dotenv");
const connectDatabase = require("./config/database")


dotenv.config({path : "backend/config/config.env"})
connectDatabase();
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT} `)
});