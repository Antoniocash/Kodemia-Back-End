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
  atHome: false,
};

function goToSuperMarket(personInSuperMarket) {
  return new Promise((resolve, reject) => {
    console.log(`${personInSuperMarket.name} esta yendo al Chedrahui`);
    setTimeout(() => {
      personInSuperMarket.atSuperMarket = true;
      if (!personInSuperMarket.atSuperMarket) {
        reject(`${personInSuperMarket} fue asaltado en el camino.`);
      }
      resolve(personInSuperMarket);
    }, 3000);
  });
}

function pay(personAtCashier) {
  return new Promise((resolve, reject) => {
    console.log(`${personAtCashier.name} esta pagando sus articulos.`);
    setTimeout(() => {
      personAtCashier.paidPantry = true;
      if (!personAtCashier.paidPantry) {
        reject(`${personAtCashier.name} fallecio en el intento.`);
      }
      resolve(personAtCashier);
    }, 5000);
  });
}

function goHome(personAtHome) {
  return new Promise((resolve, reject) => {
    console.log(`${personAtHome.name} esta yendo a casa.`);
    setTimeout(() => {
      personAtHome.atHome = true;
      if (!personAtHome.atHome) {
        reject(`${personAtHome.name} fue victima de la inseguridad.`);
      }
      resolve(personAtHome);
    }, 7000);
  });
}

/* Infierno de Promesas ===================================================================*/

/* goToSuperMarket(person).then((personInSuperMarket) =>{
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
}) */


/* Encadenamiento de Promesas =============================================================

goToSuperMarket(person)
  .then((personInSuperMarket) => {
    console.log(`${personInSuperMarket.name} ha llegado al Chedrahui.`);
    console.log(personInSuperMarket);
    return pay(personInSuperMarket);
  })
  .then((personAtCashier) => {
    console.log(`${personAtCashier.name} termino de pagar.`);
    console.log(personAtCashier);
    return goHome(personAtCashier);
  })
  .then((personAtHome) => {
    console.log(`${personAtHome.name} ha llegado a casa sin problemas. `);
    console.log(personAtHome);
  })
  .catch((error) => {
    console.log(error);
  });
 */


/* Otra forma de Manejar Promesas: ASNYC - AWAIT ========================================================
 async -> Marca una funcion que se ejecutara de forma asincrona
 await -> Espera el resultado de una promesa

 CONDICIONES:

 - Para poder utilizar await necesitamos una funcion que sea marcada como asincrona
 - Las funciones asincronas, por defecto regresan una promesa
*/

async function main(){
    
    const personInSuperMarket = await goToSuperMarket(person)
    console.log(`${personInSuperMarket.name} llego al super.`)
    console.log(personInSuperMarket)

    const personAtCashier = await pay(personInSuperMarket)
    console.log(`${personAtCashier.name} termino de pagars.`)
    console.log(personAtCashier)

    const personAtHome = await goHome(personAtCashier)
    console.log(`${personAtHome.name} llego a casa sin ser asaltado.`)
    console.log(personAtHome)
}

main()