import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src="/compose.webp" alt="Logo da Marvel" className="marvel-logo" />
      </div>

      <nav className="sidebar-nav">
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

      <div className="spiderman-image-container">
        <img src="/homemaranha.webp" alt="Homem-Aranha" className="spiderman-sidebar-img" />
      </div>

      <div className="spiderweb-detail"></div>
    </aside>
  );
}