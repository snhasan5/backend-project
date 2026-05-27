// require('dotenv').config({path:'../'})
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
    path:'./.env'
})
import express from "express";
import connectDB from "./db/db.js";
import { error, log } from "console";

connectDB().then(()=>{
  app.listen(process.env.PORT,()=>{
            console.log(`App is running on port : ${process.env.PORT}`)
        })
}).catch((error)=>{
    console.log("MONGODB connection failed !!! ",error);
    
});
/* Approch 1
const app = express();
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("errror",(error)=>{
            console.log("Error not able to connect to database : ",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is running on port : ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("ERROR : ",error);
        throw error;
    }
})()
*/

