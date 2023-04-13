import express from "express"

const server = express() // crea servidor
const port = 8080

server.get("/",(request, response)=>{

    response.write("GET /")
    response.end()

})

server.post("/",(request, response)=>{

    response.write("POST /")
    response.end()

})

server.patch("/",(request, response)=>{

    response.write("PATCH /")
    response.end()

})

server.delete("/",(request, response)=>{

    response.write("DELETE /")
    response.end()
})

server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})