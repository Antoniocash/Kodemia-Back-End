import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

/* const DB_USER=`antonioCash`
const DB_PASSWORD =`7GrLYhPIKhhJTHkh`
const DB_HOST = `kodemiacluster.tfmsipq.mongodb.net`
const DB_NAME = `kodemia` */

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

/**
 * Modelos - Interfaz para comunicarnos con la DB - Termino de Mongoose
 *  - crear
 *  - actualizar
 *  - editar
 *  - eliminar
 * 
 * Para poder crear un modelo se necesita un schema
 * 
 *  SCHEMA - Nos permitira definir la estructura de los documentos
 * 
 *      Que contiene un SCHEMA
 *          - Que campos tiene (name, lastName, generations) 
 *          - Validacion (requerido, default, minLength)
 *          - Restricciones
 * 
 *  Modelos hace referencia a la coleccion.
 *  - como utilizar/crear modelo -
 * 
 * 
 */

const koderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    age:{
        type: Number,
        required: true,
        min: 1,
        max: 100,
        required: true
    },
    gender:{
        type: String,
        enum: ["m","h"], //El enum en el sistema nos permie definir que valores son validos
        required: true
    },
    isGraduated:{
        type: Boolean,
        default: false
    }
})

// El modelo comienza con Mayuscula, como convencion.
// El modelo hace referencia a la coleccion.


const Koder = mongoose.model("koders", koderSchema)


mongoose.connect(URL)
.then(async(connection)=>{
    console.log("Database connected.")

 const allKoders = await Koder.find({})
    console.log(allKoders)

   /*  const newKoder = {
        name: "Rodolfo",
        lastName: "Perez",
        age: "23",
        gender: "h"
    }
    const koderCreated = await Koder.create(newKoder)
    console.log(koderCreated)
     */

  /*   const newData = {
        name: "Rodolfo",
        age: 99
    }

    const koderUpdated = await Koder.findByIdAndUpdate("643e009a6828687c743dbc5f",newData, { new : true })
    console.log(koderUpdated) */

    const koderDeleted = await Koder.findByIdAndDelete("643e009a6828687c743dbc5f")
    console.log(koderDeleted)
})

.catch((error) =>{
    console.log("Could not connect.", error)
})