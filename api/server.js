import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ErrorHandler } from "./utils/createError";
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


app.use(ErrorHandler())


app.listen(8000, () => {
    connect();
    console.log("Backend server is running on port 8000")
})