import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ErrorHandler } from "./utils/createError.js";
import authRoute from "./routes/auth.route.js"
import userRoute from "./routes/user.route.js"
import gigRoute from "./routes/gig.route.js"
import orderRoute from './routes/order.route.js'
import conversationRoute from './routes/conversation.route.js'
import messageRoute from './routes/message.route.js'
import reviewRoute from './routes/review.route.js'
const app = express();
dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("MonogoDB is connected successfully")
    } catch (error) {
        console.log(error)
    }
}


app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/gigs", gigRoute)
app.use("/api/orders", orderRoute)
app.use("/api/reviews", reviewRoute)
app.use('/api/messages', messageRoute)
app.use("/api/conversations", conversationRoute)
app.use(ErrorHandler)



app.listen(8000, () => {
    connect();
    console.log("Backend server is running on port 8000")
})