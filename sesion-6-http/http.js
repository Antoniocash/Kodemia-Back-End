const http = require("http")

const server = http.createServer((request, response) => {
    const url = request.url
    console.log(url)
    const method = request.method
    console.log(method)
    const header = request.header
    console.log(header)

    response.writeHead(200,{
        "Content-Type": "application/json"
    })

    if (url === "/koders" && method === "GET"){
        response.write("Aqui estaran todos los Koders")
    } else if (url === "/koders" && method === "POST"){ 
        response.write("Aqui podras crear un nuevo Koder.")
    } else {
        response.write("No conozco la solicitud.")
    }
    response.end()
})

server.listen(8080, () => {
    console.log("server listening on port 8080")
})