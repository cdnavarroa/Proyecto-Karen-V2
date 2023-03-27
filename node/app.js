import express from "express";
import cors from "cors";

import db from "./database/db.js";
import userRoutes from './routes/routes.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)


try {
    await db.authenticate()
    console.log('*** Conexion Exitosa ***')

} catch (error) {
    console.log(`*** Error de Conexion: ${error}`)
}


app.listen(8000, () =>{
    console.log(`server up running in http://localhost:8000/`)
})