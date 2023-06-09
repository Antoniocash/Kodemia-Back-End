
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30,
        trim: true
    },
    email: {
        type: String,
        required: true,
        match: /.*@.*\..*/,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    user_since: {
        type: Date,
        required: true
    },
    bio: {
        type: String,
        maxLength: 200
    },
    nat: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: user
    }
})

const User = mongoose.model("users", userSchema)

export { User }