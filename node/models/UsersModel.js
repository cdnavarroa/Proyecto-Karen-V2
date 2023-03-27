import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UsersModel = db.define('aprendices',{
    nombre_aprendiz: {type: DataTypes.STRING},
    apellido_aprendiz: {type: DataTypes.STRING},
    celular_aprendiz: {type: DataTypes.INTEGER},
    correo_aprendiz: {type: DataTypes.STRING}
})

export default UsersModel