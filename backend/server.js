const app =require("./app")

const dotenv=require("dotenv");
const connectDatabase = require("./config/database")
 //handling uncaught exception
 process.on("unCaughtException",(err)=>{
     console.log(`error: ${err.message}`);
     console.log("shutting down the server due to uncaught exception");
     process.exit(1);
 })


//config
dotenv.config({path : "backend/config/config.env"})

//connection to database
connectDatabase();
const PORT=process.env.PORT;

const server =app.listen(PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT} `)
});

//unHandled Promise rejection

process.on("unhandledRejection",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to unhandled promise  rejection");
    server.close(()=>{
        process.exit(1);
    });
});