import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('MONGODB connected!!! DB Host: ',connectionInstance.connection.host)
    } catch(error){
        console.log("failed to connect to DB:",error)
        throw error;
    }
}

export default connectDB