// require('dotenv').config({path:'../'})
import dotenv from "dotenv";
dotenv.config({
    path:'./.env'
})
import express from "express";
import connectDB from "./db/db.js";

connectDB();
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

