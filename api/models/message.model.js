import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema({
    conversationid: {
        type: String,
        required: true
    },
    userId: {
        type: Stirng,
        required: true,
    },
    desc: {
        type: Stirng,
        required: true
    }
},
    { timestamps: true })


export default mongoose.model("Message", MessageSchema)