import mongoose from "mongoose"

const URL = `mongodb+srv://antonioCash:7GrLYhPIKhhJTHkh@kodemiacluster.tfmsipq.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(URL)
.then((connection)=>{
    console.log("Database connected.")
})
.catch((error) =>{
    console.log("Could not connect.")
})