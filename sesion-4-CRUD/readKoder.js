import fs from "fs"

function readKoders(){
    
    fs.readFile("/home/antnio/back-end/sesion-4-CRUD/koders.json", "utf8", (error, data) => {
    if (error) {
        console.log(error)
    } else {
    console.log(data.toString())
    }
})
}

readKoders()

export {readKoders}

