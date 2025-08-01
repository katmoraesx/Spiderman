import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Logo da Marvel ou Homem-Aranha - substituindo o "Spidey" */}
      <div className="logo-container">
        <img src="https://example.com/marvel-logo.svg" alt="Marvel Logo" className="marvel-logo" />
        <img src="https://example.com/spiderman-icon.svg" alt="Spider-Man Icon" className="spiderman-icon" />
      </div>

      <nav>
        {/* Usando ícones para cada item de navegação */}
        <NavLink to="/" exact activeClassName="active">
          <i className="fas fa-book"></i> Sinopse
        </NavLink>
        <NavLink to="/autor" activeClassName="active">
          <i className="fas fa-pen-nib"></i> Autor
        </NavLink>
        <NavLink to="/publico-alvo" activeClassName="active">
          <i className="fas fa-users"></i> Público-Alvo
        </NavLink>
        <NavLink to="/colega" activeClassName="active">
          <i className="fas fa-user-friends"></i> Colega
        </NavLink>
      </nav>

      {/* Detalhe da teia de aranha na parte inferior */}
      <div className="spiderweb-detail"></div>
    </div>
  );
}