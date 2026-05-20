

require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV==="DEV"){
    app.use((req,res,next)=>{
        console.log(`${req.method}${req.originally}`);
        next();

    })
}

//routes 
app.get("/test" ,(req,res)=>{
    res.status(200).json({message:"test route"});
})


const connedDB= require("./config/db");
connedDB();

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})