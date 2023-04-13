import fs from "fs"

const newKoder = {
    "id": 2,
    "name": "Jesus",
    "lastName": "Mendoza",
    "age": 25,
    "favoriteFood": "Caviar"
}

const newKoder2 = {
    "id": 3,
    "name": "Andrea",
    "lastName": "Mazzoco",
    "age": 26,
    "favoriteFood": "Verduritas"
}

const newKoder3 = {
    "id": 4,
    "name": "Hola",
    "lastName": "KAse",
    "age": 50,
    "favoriteFood": "Aire"
}

const newKoder4 = {
    "id": 5,
    "name": "AAAAAAA",
    "lastName": "bbbbbb",
    "age": 230,
    "favoriteFood": "Comer"
}

let data = {}
fs.readFile("/home/antnio/back-end/sesion-4-CRUD/koders.json", (error, content)=>{
    if (error) throw error
    data = JSON.parse(content)
    console.log(data)
    data["koders"].push(newKoder)
    fs.writeFile("/home/antnio/back-end/sesion-4-CRUD/koders.json", JSON.stringify(data, null, " "), (error) =>{
        if (error) throw error
        console.log("Koder agregado")
    })
})