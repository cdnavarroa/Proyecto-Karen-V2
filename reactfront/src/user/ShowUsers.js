    import axios from 'axios'
    import { useState, useEffect } from 'react'
    import { Link } from 'react-router-dom'


    const URI = 'http://localhost:8000/users/'

    const CompShowUsers = () => {

        const [users, setUser] = useState([])
        useEffect(() =>{

            getUsers()
        },[])

        //procedimiento para mostrar todos los usuarios

        const getUsers = async()=>{
            const res = await axios.get(URI)
            setUser(res.data)
        }

        //procedimiento para eliminar un usuario

        const DeleteUser = async (id ) => {
            await axios.delete(`${URI}${id}`).then(res => {

                console.log(res)
                console.log(res.data)
            })
            
            getUsers()
        }
        

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <table className='table'>
                            <thead className="table-info">
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Rol</th>
                                    <th>Celular</th>
                                    <th>Correo</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td> {user.nombre_aprendiz}</td>
                                        <td> {user.apellido_aprendiz}</td>
                                        <td>  Aprendiz  </td>
                                        <td> {user.celular_aprendiz}</td>
                                        <td> {user.correo_aprendiz}</td>
                                        <td> <Link to={`/edit/${user.id}`} className='btn btn-info'><i className="fas fa-edit">Editar</i></Link> </td>
                                        <td> <button onClick={() => DeleteUser(user.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        )
    }


    export default CompShowUsers