import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/user/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Stockage du token dans les cookies
          document.cookie = "jwt=" + data.token + ";path=/;max-age=86400"; // Expiration après 1 jour
          alert("Connexion réussie!");
          window.location.href = "/";
          // window.history.back();
        } else {
          alert("Erreur de connexion: " + JSON.stringify(data));
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Erreur lors de la connexion: " + error.message);
      });
  };

  return (
    <div className="content">
      <div className="bg_color_2">
        <div className="container margin_60_35">
          <div id="login">
            <h1>Se connecter à VétoLib !</h1>
            <div className="box_form">
              <form id="loginForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    placeholder="Adresse e-mail"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    placeholder="Mot de passe"
                  />
                </div>
                <div className="form-group text-center add_top_20">
                  <button className="btn btn-primary" type="submit">
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
            <p className="text-center link_bright">
              Vous n'avez pas de compte{" "}
              <Link to="/registration">
                <strong>S'inscrire maintenant!</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
