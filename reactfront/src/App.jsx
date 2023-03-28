import logo from "./logo-cultupaz.jpg";
import "./App.css";
//importamos usuarios 
import CompShowUsers from "./user/ShowUsers"; // importamos componente ShowUsers (VER TODOS LOS USUARIO)
import CompCreateuser from "./user/Createuser"// importamos  CompCreateuser (CREAR UN USUARIO)
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompEditUser from "./user/EditUser"; // importamos CompEditUser (EDITAR UN USUARIO) 
import Sidebar from "./user/navegacion/inicio";
import Header from "./user/navegacion/Header";


function App() {
  //componentes de usuarios
  return (
    <div className="App">
      <header className="App-header">
      {/* <CompNavbar/> */}
      <Header/>
      <Sidebar />
      </header>
      <main className="App-Main">
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<CompShowUsers />} />
          <Route path="/edit/:id" element={<CompEditUser />} />
          <Route path="/create" element={<CompCreateuser />} />
        </Routes>
      </BrowserRouter>
      </main>

    </div>
  );



  
}

export default App;
