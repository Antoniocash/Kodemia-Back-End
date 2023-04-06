function avisar(error, data) {
    if (error) {
        console.log("No pude llegar al super", error)
    } else {
        console.log(data)
    }
}

function irAlSuper(callback) {
    console.log("Yendo al supermercado")
    callback(null, "Llegue al super")
}

function escogerDespensa(callback) {
    console.log("Estoy escojiendo la despensa")
    callback(null, "Escogi la despensa")
}

function pagar(callback) {
        console.log("Estoy pagando")
    callback(null, "Termine de pagar")
}

function irACasa(callback) {
    console.log("Estoy yendo a casa")
    callback(null, "Llegue a casa")
}

irAlSuper(avisar)
escogerDespensa(avisar)
pagar(avisar)
irACasa(avisar)