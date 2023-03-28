//componentes
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/users/';

const CompCreateuser = () => {
    const [nombre_aprendiz, setnombre] = useState('')
    const [apellido_aprendiz, setapellido] = useState('')
    const [celular_aprendiz, setcelular] = useState('')
    const [correo_aprendiz, setcorreo] = useState('')
    const navigate = useNavigate()

  //procedimiento guardar un usuario
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre_aprendiz: nombre_aprendiz,
      apellido_aprendiz: apellido_aprendiz,
      celular_aprendiz: celular_aprendiz,
      correo_aprendiz: correo_aprendiz,
    })
    navigate('/');
  }

  return (
    <div className='container'>
      <h3>Crear usuario</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>Nombre</label>
          <input
            value={nombre_aprendiz} //aca no es titulo, como va a serlo, si los datos de la base de datos son otros
            onChange={(e) => setnombre(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <textarea
            value={apellido_aprendiz}
            onChange={(e) => setapellido(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Celular</label>
          <textarea
            value={celular_aprendiz}
            onChange={(e) =>  setcelular(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <textarea
            value={correo_aprendiz}
            onChange={(e) =>  setcorreo(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <button type='submit' className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>

  )
}

export default CompCreateuser
