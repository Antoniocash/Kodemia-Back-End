import fs from "fs"

const newKoder = {
    "id": 2,
    "name": "Jesus",
    "lastName": "Mendoza",
    "age": 25,
    "favoriteFood": "Caviar"
}

let data = {}
fs.readFile("/home/antnio/back-end/sesion-4-CRUD/koders.json", (error, content)=>{
    if (error) throw error
    data = JSON.parse(content)
    data["koders"].push(newKoder)
    console.log(data)
    fs.writeFile("/home/antnio/back-end/sesion-4-CRUD/koders.json", JSON.stringify(data, null, " "), (error) =>{
        if (error) throw error
        console.log("Koder agregado")
    })
})