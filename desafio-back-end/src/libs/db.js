// funcion que nos permita conectar a la Base de Datos.

import * as dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env  

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const connect = () => {
    return mongoose.connect(URL)
}

export default connect