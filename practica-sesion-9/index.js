import express from "express"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
import kodersRouter from "./routers/koders.router.js"

dotenv.config()

const {DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, SERVER_PORT} = process.env

URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

// CREAR SERVIDOR

const server = express()

// Middlewares

server.use(express.json) // Convierte (parsea) el request a un JSON // similar a lo que se hacia con JSON.parse()

// Routers
/* 
server.get("/koders", async (request, response)=>{
    response.json({
        success: true,
        message: "Hola desde mi API."
    })
}) */

server.use("/koders", kodersRouter)

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