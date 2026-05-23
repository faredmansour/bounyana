
const dotenv = require("dotenv").config({path:"./connection/config.env"});
const express = require("express")
const app = express()
const port  = process.env.PORT ;
const mongoose = require ("mongoose"); 
const Router = require("./routers/productrouter")
app.use(express.json())
async function dbconnection (){
 try{
 await mongoose.connect(process.env.DB_URL)
 console.log("db connection sucess")
 }
 catch(err){
    console.log(err);
 }
}
dbconnection ()



// Request Logger (المرحلة 5)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// المسارات الأساسية
app.use("/api/auth", require("./routers/authrouter"));
app.use("/api/products", require("./routers/productrouter"));

// Global Error Handler (المرحلة 8)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: "error", message: "Something went wrong!" });
});



app.listen(port ,()=>{
    console.log(`server is running in port at ${port}`)
})