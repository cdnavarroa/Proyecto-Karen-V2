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

                    <div className='bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3' style={{backgroundColor:"#0395FF", borderRadius:"25px", marginTop: "10px"}}>
                <h6 className='text-white text-capitalize ps-3'>Aprendiz</h6>
              </div>
                        <table className='table table-dark table-hover' >
                            <thead className="tablathead">
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
                                        <td><button className='btn btn-info'><Link to={`/edit/${user.id}`} style={{color: 'black',}} ><i className='fa-regular fa-pen-to-square' style={{color: 'black',}}></i> Editar</Link> </button></td>
                                        <td> <button onClick={() => DeleteUser(user.id)} className='btn btn-danger' style={{color: 'white'}}><i className='fa-solid fa-user-xmark'  style={{color: 'white',}}></i> Eliminar</button></td>
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


