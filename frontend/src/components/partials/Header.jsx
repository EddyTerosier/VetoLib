import { Link, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
export default function Header() {
  const navigate = useNavigate();
  const token = Cookie.get("jwt");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/user/getIdUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données utilisateur:",
          error,
        );
      });
  }, []);

  // Fonction pour gérer le clic sur "Mon profil"
  const handleProfileClick = () => {
    if (userId) {
      navigate(`/profile/${userId.id}`);
    } else {
      console.error("User ID is not available");
    }
  };

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
                </li>
              </>
            ) : (
              <div></div>
            )}
          </div>
          <div className="navbar-nav justify-content-end">
            {token ? (
              <>
                <li
                  className="nav-link"
                  onClick={handleProfileClick}
                  style={{ cursor: "pointer" }}
                >
                  <Link to="">Mon profil</Link>
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
