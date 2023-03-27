import logo from './logo-cultupaz.jpg';
import './App.css';

import CompShowUsers from './user/ShowUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompEditUser from './user/EditUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt='logo' />
      </header>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowUsers />}/>
          <Route path='/edit/:id' element={<CompEditUser />}/> 
        </Routes>
        </BrowserRouter>
     
      
    </div>
  );
}

export default App;
