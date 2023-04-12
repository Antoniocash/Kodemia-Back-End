/* 1. Realizar proceso de inscripcion a Kodemia con Promesas:
    - Encadenamiento
    - Async await */

    koder = {
        name: "Leonardo",
        interviewed: false,
        isEnrolled: false,
        proposalSent: false,
        introductoryCourse: false
    }

    /* ENCADENAMIENTO =============================================================================================================*/
    
    function interview (koderToInterview){
        return new Promise ((resolve, reject) =>{
            console.log(`${koderToInterview.name} esta realizando su entrevista.`)
            setTimeout(()=>{
                koderToInterview.interviewed = true
                if (!koderToInterview.interviewed){
                    reject(`${koderToInterview.name} fallo su entrevista.`)
                }
                resolve(koderToInterview)
            }, 3000)
        })
    }
      
    function enroll (koderToEnroll){
        return new Promise ((resolve, reject) =>{
            console.log(`${koderToEnroll.name} esta realizando tramite de inscripcion.`)
            setTimeout(()=>{
                koderToEnroll.isEnrolled = true
                if (!koderToEnroll.isEnrolled){
                    reject(`${koderToEnroll.name} no pudo inscribirse.`)
                }
                resolve(koderToEnroll)
            }, 3000)
        })
    }
    
    function sendProposal (koderToPropose){
        return new Promise ((resolve, reject) =>{
            console.log(`${koderToPropose.name} esta realizando y enviando su propuesta.`)
            setTimeout(()=>{
                koderToPropose.proposalSent = true
                if (!koderToPropose.proposalSent){
                    reject(`La propueta de ${koderToPropose.name} fue rechazada.`)
                }
                resolve(koderToPropose)
            }, 5000)
        })
    }

    function introduction(koderToIntroduce){
        return new Promise ((resolve, reject) =>{
            console.log(`${koderToIntroduce.name} esta tomando su curso de introduccion.`)
            setTimeout(()=>{
                koderToIntroduce.introductoryCourse = true
                if (!koderToIntroduce.introductoryCourse){
                    reject(`${koderToIntroduce.name} reprobo su curso de introduccion.`)
                }
                resolve(koderToIntroduce)
            }, 5000)
        })
    }
    
    
 /*   interview(koder)
   .then((koderToInterview)=>{
        console.log(`${koderToInterview.name} ha pasado su entrevista inicial.`)
        console.log(koderToInterview)
        return enroll(koderToInterview)
   })
   .then((koderToEnroll)=>{
        console.log(`${koderToEnroll.name} ha sido inscrito exitosamente.`)
        console.log(koderToEnroll)
        return sendProposal(koderToEnroll)
   })
   .then((koderToPropose)=>{
        console.log(`La propuesta de ${koderToPropose.name} ha sido aceptada.`)
        console.log(koderToPropose)
        return introduction(koderToPropose)
   })
   .then((koderToIntroduce)=>{
        console.log(`${koderToIntroduce.name} ha pasado su curso de introduccion.`)
        console.log(koderToIntroduce)
   })
   .catch((error)=>{
        console.log("Error:", error)
   })
 */

   /* ASYNC / AWAIT ============================================================================================================================*/

async function main(){

    const koderToInterview = await interview(koder)
    console.log(`${koderToInterview.name} ha pasado su entrevista inicial.`)
    console.log(koderToInterview)

    const koderToEnroll = await enroll(koderToInterview)
    console.log(`${koderToEnroll.name} ha sido inscrito exitosamente.`)
    console.log(koderToEnroll)

    const koderToPropose = await sendProposal(koderToEnroll)
    console.log(`La propuesta de ${koderToPropose.name} ha sido aceptada.`)
    console.log(koderToPropose)

    const koderToIntroduce = await introduction(koderToPropose)
    console.log(`${koderToIntroduce.name} ha pasado su curso de introduccion.`)
    console.log(koderToIntroduce)
}

main()


  /* 2. Actualizar codigo de CRUD de Koders con File System del Pomise API
*/