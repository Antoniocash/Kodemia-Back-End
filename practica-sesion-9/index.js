import express from "express"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
import kodersRouter from "./routers/koders.router.js"

dotenv.config()

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, SERVER_PORT} = process.env 

URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

// CREAR SERVIDOR

const server = express()

// Middlewares

server.use(express.json()) // Convierte (parsea) el request a un JSON // similar a lo que se hacia con JSON.parse()

server.use((request, response, next)=>{
    const { isAdmin } = request.body

    if (!isAdmin) {
        response.status(403).json({
            success: false,
            message: "Unauthorized."
        })
        return
    }
delete request.isAdmin
next()
})

server.use("/", kodersRouter)

//Conexion a base de datos
mongoose.connect(URL)
.then((connection)=>{
    console.log("Database connected.")
    server.listen(SERVER_PORT, ()=>{
        console.log(`Server listening on port ${SERVER_PORT}.`)
    })

})
.catch((error)=>{
    console.log("Error: ", error)
})