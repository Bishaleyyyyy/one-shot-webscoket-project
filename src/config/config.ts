import { config } from "dotenv";
config()

export const envConfig = {
      port: process.env.PORT,
      mongoConnectionString: process.env.MONGO_URI
}