import express from "express"
import fs from "fs"

const router = express.Router() // crea el router

router.get("/",async(request, response)=>{

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

router.post("/", async (request, response)=>{

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

    response.json({message})

})
router.patch("/:idKoder",(request, response)=>{

    response.json({message: "Aqui se actualizaran los koders" })

})

router.delete("/",(request, response)=>{

    response.json({message: "Aqui se eliminaran los koders" })
})

export default router