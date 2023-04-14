import fs from "fs"
import express, { json } from "express"

const server = express() // crea servidor
const port = 8080

server.use(express.json())

server.get("/koders",async(request, response)=>{

    /* writeHead(200, {
        "Content-Type": "json/package"
    })

    const message = ("HOLA AMISTAD")
    messageString = JSON.stringify(message)
    response.write(messageString)
    response.end() */
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    const koders = json["koders"]
    
    response.json({
        success: false,
        data: {
            koders: koders
        }
    })
})

server.post("/koders", async (request, response)=>{

    /* 
    Leer archivo de Koders
    Obtener Koders
    Obtener el nuevo Koder desde el request.body
    Agregar el nuevo Koder a la lista
    Escribir en el archivo kodemia.json los koders actualizados
    Responder al cliente con el Status    
    */
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    const koders = json.koders

    const newKoder = request.body

    koders.push(newKoder)
    
    await fs.promises.writeFile("./kodemia.json", JSON.stringify(json, null, 2), "utf8")

    const message = {
        success: true,
        message: "Se agrego un nuevo koder exitosamente"
    
    }

    response.json({message: "Aqui se crearan koders" })

})
server.patch("/koders",(request, response)=>{

    response.json({message: "Aqui se actualizaran los koders" })

})

server.delete("/koders",(request, response)=>{

    response.json({message: "Aqui se eliminaran los koders" })
})

server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})

/* Endpoint ->
Conjunto de un METODO y una RUTA (PATH)

Cada Endpoint va a implementar su propia logica, y cada una es independiente de la otra. */