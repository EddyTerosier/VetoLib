import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-dark my-0">
        <Link to="/">Accueil</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className="nav-link">
              <Link to="/appointment">Prendre un RDV</Link>
            </li>
            <li className="nav-link">
              <Link to="/profile">Mon profil</Link>
            </li>
            <li className="nav-link">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-link">
              <Link to="/registration">Registration</Link>
            </li>
            <li className="nav-link">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
