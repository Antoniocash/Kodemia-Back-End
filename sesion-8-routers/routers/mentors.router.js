import express from "express"
import fs from "fs"

const router = express.Router() // crea el router

router.get("/",async(request, response)=>{
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    let filteredMentors = json["mentors"]

    const {module, age, generations, id} = request.query

    if (module){ 
        filteredMentors = filteredMentors.filter(mentor => mentor.module==module)
    }

    if (age){
        filteredMentors = filteredMentors.filter(mentor => mentor.age==age)
    }

    if (generations){
        filteredMentors = filteredMentors.filter(mentor => mentor.generations.includes(generation)==true)
    }

    if (id){
        filteredMentors = filteredMentors.filter(mentor => mentor.id==id)
    }
    
    response.json({
        success: true,
        data: {
            mentors: filteredMentors
        }
    })
})

router.post("/", async (request, response)=>{
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    let mentors = json["mentors"]

    let newMentor = request.body

    mentors.push(newMentor)

    await fs.promises.writeFile("./kodemia.json", JSON.stringify(json, null, 2), "utf8") 


    const message = {
        success: true,
        message: "Se agrego un mentor existosamente"
    }

    response.json(message)
})

router.delete("/:idMentor", async (request, response)=>{

    const id = request.params.idMentor
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    const elementIndex = json.mentors.findIndex((item => item.id == id))
    console.log(elementIndex)
    json.mentors.splice(elementIndex, 1)

    await fs.promises.writeFile("./kodemia.json", JSON.stringify(json, null, 2), "utf8")

    const message = {
        success: true,
        message: "Se elimino mentor"
    }

})

export default router

