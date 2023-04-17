import express from "express"
import fs from "fs"

const router = express.Router() // crea el router

router.get("/",async(request, response)=>{
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    let mentors = json["mentors"]

    const {module, age, generations} = request.query

    let filteredMentors = mentors

    if (module){ 
        filteredMentors = filteredMentors.filter(mentor => mentor.module===module)
    }

    if (age){
        filteredMentors = filteredMentors.filter(mentor => mentor.age===age)
    }

    if (generations){
        filteredMentors = filteredMentors.filter(mentor => mentor.generations.includes(generation)===true)
    }
    
    response.json({
        success: true,
        data: {
            mentors: filteredMentors
        }
    })
})

router.get("/:id", async (request, response)=>{

    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    
    const id = parseInt(request.params.id)
    const result = json.mentors.find(item => item.id === id)   

    response.json ({
        data: {
            mentors: result
        }
    })

    response.json({message})

})
router.patch("/",(request, response)=>{

    response.json({message: "Aqui se actualizaran los koders" })

})

router.delete("/",(request, response)=>{

    response.json({message: "Aqui se eliminaran los koders" })
})

export default router

