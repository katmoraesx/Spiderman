import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="logo-container">
          <img src="/compose.webp" alt="Marvel Logo" className="marvel-logo" />
        </div>
       
      </div>


       {/* NOVO: Espaço para a imagens */}
        <div className="spiderman-image-container">
          <img src="/hulk.webp" alt="Homem-Aranha" className="spiderman-sidebar-img" />
        </div>


       <div className="spiderman-image-container">
          <img src="/aaaaa.webp" alt="Homem-Aranha" className="spiderman-sidebar-img" />
        </div>

       <div className="spiderman-image-container">
          <img src="/pppp.webp" alt="Homem-Aranha" className="spiderman-sidebar-img" />
        </div>

        <nav>
          <NavLink to="/" exact activeClassName="active">
            <i className="fas fa-spider"></i> Sinopse
          </NavLink>
          <NavLink to="/autor" activeClassName="active">
            <i className="fas fa-pen-nib"></i> Autor
          </NavLink>
          <NavLink to="/publico-alvo" activeClassName="active">
            <i className="fas fa-users"></i> Público-Alvo
          </NavLink>
          <NavLink to="/Kelvin" activeClassName="active">
            <i className="fas fa-user-friends"></i> Kelvin
          </NavLink>
        </nav>
        

      <div className="spiderweb-detail"></div>
    </div>
  );
}