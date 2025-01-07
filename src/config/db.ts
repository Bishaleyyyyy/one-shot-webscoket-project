import mongoose from "mongoose";
import { envConfig } from "./config";

 async function connectTODB() {
  try {
        mongoose.connection.on("connected",()=>{
        console.log("Database connection bhayo hai")
    })
        await mongoose.connect(envConfig.mongoConnectionString as string); 
  } 

  catch (error) {
    console.log(error)
    process.exit(1)
  }

}

export default connectTODB