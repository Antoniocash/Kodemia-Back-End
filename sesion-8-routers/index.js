import express from "express"
import kodersRouter from "./routers/koders.router.js"
import mentorsRouter from "./routers/mentors.router.js"

const server = express() // crea servidor
const port = 8080

server.use(express.json())
server.use("/koders", kodersRouter)
server.use("/mentors", mentorsRouter)


server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})

/* Endpoint ->
Conjunto de un METODO y una RUTA (PATH)

Cada Endpoint va a implementar su propia logica, y cada una es independiente de la otra. */
