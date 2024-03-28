import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
export default function Login() {
  const navigate = useNavigate();
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
          navigate("/");
          window.location.reload();
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
    <div className="registration-page min-vh-100 container">
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">Connectez-vous !</h2>
        <p className="text-white-50">
          Et naviguez sur notre site dès maintenant.
        </p>
      </div>
      <div className="form-container my-5">
        <h1 className="text-center mb-4">Formulaire de connexion</h1>
        <form
          id="loginForm"
          onSubmit={handleSubmit}
          className="row justify-content-center"
        >
          <div className="col-md-8">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="Adresse e-mail"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 mb-3">
                <label className="form-label">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Mot de passe"
                />
              </div>
            </div>
            <div className="text-center add_top_20">
              <button
                type="submit"
                value="submit"
                className="mt-4 btn bg-orange appointmentBtn"
              >
                S'inscrire
              </button>
            </div>
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
  );
}
