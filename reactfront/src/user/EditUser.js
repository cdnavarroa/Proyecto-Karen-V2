//componentes
//impotamos las librerias

import axios from 'axios' //importamos las lerias
import { useState, useEffect } from 'react' // importa funcion useState, useEffect/

import { Link, useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/users/'
//componente compShowblogs principal y lo ejcuta el app.js

const CompEditUser = () => {

    const [nombre_aprendiz, setnombre] = useState('')
    const [apellido_aprendiz, setapellido] = useState('')
    const [celular_aprendiz, setcelular] = useState('')
    const [correo_aprendiz, setcorreo] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre_aprendiz: nombre_aprendiz,
            apellido_aprendiz: apellido_aprendiz,
            celular_aprendiz: celular_aprendiz,
            correo_aprendiz: correo_aprendiz
        })
        navigate('/')
    }
    useEffect(() => {
        getUserById()
    }, [])

    const getUserById = async () => {

        const res = await axios.get(URI + id)
        setnombre(res.data.nombre_aprendiz)
        setapellido(res.data.apellido_aprendiz)
        setcelular(res.data.celular_aprendiz)
        setcorreo(res.data.correo_aprendiz)
    }
    return (
        <div>
            <h3>Editar usuario</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre_aprendiz}
                        onChange={(e) => setnombre(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Apellido</label>
                    <textarea
                        value={apellido_aprendiz}
                        onChange={(e) => setapellido(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Celular</label>
                    <textarea
                        value={celular_aprendiz}
                        onChange={(e) => setcelular(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <textarea
                        value={correo_aprendiz}
                        onChange={(e) => setcorreo(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    )
}

export default CompEditUser