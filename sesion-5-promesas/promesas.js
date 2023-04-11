/* const myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = null

        if (error) {
            reject(error)
        }
        resolve("Todo fino, pa")
    }, 5000)
})

console.log(myFirstPromise)

myFirstPromise
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
}) */

const person = {
    name: "Antonio",
    atSuperMarket: false,
    paidPantry: false,
    atHome: false
}

function goToSuperMarket(personInSuperMarket){
    return new Promise((resolve, reject) => {
        console.log(`${personInSuperMarket.name} esta yendo al Chedrahui`)
        setTimeout(()=>{
            personInSuperMarket.atSuperMarket = true
            if(!personInSuperMarket.atSuperMarket){
                reject(`${personInSuperMarket} fue asaltado en el camino.`)
            }
            resolve(personInSuperMarket)
        }, 3000)
    }) 
}

function pay(personAtCashier){
    return new Promise((resolve, reject) => {
        console.log(`${personAtCashier.name} esta pagando sus articulos.`)
        setTimeout(()=>{
            personAtCashier.paidPantry = true
            if(!personAtCashier.paidPantry){
                reject(`${personAtCashier.name} fallecio en el intento.`)
            }
            resolve(personAtCashier)
        }, 5000)
    }) 
}

function goHome(personAtHome){
    return new Promise((resolve, reject) => {
        console.log(`${personAtHome.name} esta yendo a casa.`)
        setTimeout(()=>{
            personAtHome.atHome = true
            if(!personAtHome.atHome){
                reject(`${personAtHome.name} fue victima de la inseguridad.`)
            }
            resolve(personAtHome)
        }, 7000)
    }) 
}

goToSuperMarket(person).then((personInSuperMarket) =>{
    console.log(`${personInSuperMarket.name} llego al Chedraui.`)
    console.log(personInSuperMarket)

    pay(personInSuperMarket).then((personAtCashier) =>{
        console.log(`${personAtCashier.name} ha pagado.`)
        console.log(personAtCashier)
        
        goHome(personAtCashier).then((personAtHome) =>{
            console.log(`${personAtHome.name} ha llegado a casa.`)
            console.log(personAtHome)
        })
        .catch((error) => {
            console.log(error)
        })
    })
    .catch((error) => {
        console.log(error)
    })
})
.catch((error) => {
    console.log(error)
})