import { FaUserPlus, FaSearch, FaUser } from "react-icons/fa";
import avatar from './avatar.png'
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        
        
      </div>
      <div className="header-actions">
        <div className="header-search">
          <input type="text" placeholder="Buscar" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>

       
        <a href="/create"><button className="create-user"> 
          <FaUserPlus />
          Crear usuario
        </button></a>
        <div className="header-profile">
          <img src={avatar} alt="Profile" />
          <span>Perfil</span>
          <FaUser className="profile-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;



