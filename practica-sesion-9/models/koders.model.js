import mongoose from "mongoose"


const koderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    age:{
        type: Number,
        required: true,
        min: 1,
        max: 100,
        required: true
    },
    gender:{
        type: String,
        enum: ["m","h"], //El enum en el sistema nos permie definir que valores son validos
        required: true
    },
    isGraduated:{
        type: Boolean,
        default: false
    }
})

const Koder = mongoose.model("koders", koderSchema)

export { Koder }