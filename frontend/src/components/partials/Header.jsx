import { Link } from "react-router-dom";
import Cookie from "js-cookie";
export default function Header() {
  const token = Cookie.get("jwt");
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
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav justify-content-start">
            {token ? (
              <>
                <li className="nav-link">
                  <Link to="/appointment">Prendre un RDV</Link>
                </li>
                <li className="nav-link">
                  <Link to="/add-animal">Ajouter un animal</Link>
                </li><li className="nav-link">
                  <Link to="/generate-bdd">Générer base de données</Link>
                </li>
              </>
            ) : (
              <div></div>
            )}
          </div>
          <div className="navbar-nav justify-content-end">
            {token ? (
              <>
                <li className="nav-link">
                  <Link to="/update-profile">Modififer mon profil</Link>
                </li>
                <li className="nav-link">
                  <Link to="/profile">Mon profil</Link>
                </li>
                <li className="nav-link">
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-link">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav-link">
                  <Link to="/registration">Registration</Link>
                </li>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
