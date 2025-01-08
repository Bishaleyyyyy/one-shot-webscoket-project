import mongoose from "mongoose";
import { Itodo, Status } from "./todoTypes";
const Schema = mongoose.Schema

const todoSchema = new Schema<Itodo>({
    task:String,
    deadline:String,
    
    status:{
        type:String,
        enum:[Status.Completed, Status.Pending],
        default:Status.Pending
    }
})


export default mongoose.model("Todo",todoSchema)