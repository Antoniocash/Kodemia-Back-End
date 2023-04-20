/* 
 Index es el punto de entrada/inicio de la aplicacion.

  - conectar a base de datos
  - levantar el servidor

*/
import * as dotenv from "dotenv"
import mongoose from "mongoose"
import dbConnect from "./src/libs/db.js"
import { server } from "./src/libs/server.js"


dbConnect()
    .then(()=>{
        server.listen(8080,()=>{
            console.log("Server listening on port 8080")
        })
    })
    .catch((error)=>{
        console.error("Error:", error)
    })
