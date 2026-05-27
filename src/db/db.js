import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dns from "dns";

dns.setServers(['8.8.8.8']);

const connectDB = async() => {
    try {
        console.log(process.env.MONGODB_URI);
        console.log(DB_NAME);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        });
        console.log(`\n MONGODB CONNECTED !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection Error : ", error);
        process.exit(1);
    }
} 

export default connectDB;