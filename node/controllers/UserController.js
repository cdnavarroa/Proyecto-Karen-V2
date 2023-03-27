import UsersModel from "../models/UsersModel.js";

//Mostrar registros

export const getAllUsers = async (req, res) =>{

    try{
        const Users = await UsersModel.findAll()
        res.json(Users)
    } catch(error){
        res.json({ message: error.message})
    }

    
}


//mostrar un registro

export const getUser= async (req, res)=>{
    try{
        const User = await UsersModel.findAll({
            where: {id: req.params.id}
        })
        res.json(User[0])
    } catch (error){
        res.json({ message: error.message})
    }
}


//Actualizar un registro

export const updateUser = async (req, res) => {

    try{
        await UsersModel.update(req.body,{
            where: ({id: req.params.id})
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch(error){
        res.json({ message: error.message})
    }
}


//elimina un usuario
export const DeleteUser = async (req, res) =>{
    try {
        await UsersModel.destroy({
            where: { id: req.params.id}
        })
        res.json({"message":"¡Registro Eliminado Correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}