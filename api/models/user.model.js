import mongoose from "mongoose";

const { Schema } = mongoose;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
    img: {
        type: String,
        requried: false,
    },
    country: {
        type: String,
        requried: true,
    },
    phone: {
        type: String,
        required: false,
    },
    desc: {
        type: String,
        requried: false,
    },
    isSeller: {
        type: Boolean,
        default: false
    }

},
    {
        timestamps: true
    })

export default mongoose.model("User", userSchema)