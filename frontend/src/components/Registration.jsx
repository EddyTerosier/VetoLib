import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "user",
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/user/register", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          document.cookie = "jwt=" + data.token + ";path=/;max-age=86400";
          navigate("/");
          window.location.reload();
        } else {
          alert("Erreur lors de l'inscription: " + JSON.stringify(data));
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Erreur lors de l'inscription: " + error.message);
      });
  };

  return (
    <div className="registration-page min-vh-100 container">
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">Inscrivez-vous !</h2>
        <p className="text-white-50">
          Et naviguez sur notre site dès maintenant.
        </p>
      </div>
      <div className="form-container mt-5 mb-4">
        <h1 className="text-center mb-4">Formulaire d'inscription</h1>
        <form
          id="registerForm"
          onSubmit={handleSubmit}
          className="row justify-content-center"
        >
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={registerData.firstname}
                  onChange={handleChange}
                  placeholder="Prénom"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={registerData.lastname}
                  onChange={handleChange}
                  placeholder="Nom"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Numéro de téléphone</label>
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={registerData.phone}
                  onChange={handleChange}
                  placeholder="Numéro de téléphone"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Adresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={registerData.address}
                  onChange={handleChange}
                  placeholder="Adresse"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleChange}
                  placeholder="Adresse e-mail"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleChange}
                  placeholder="Mot de passe"
                />
              </div>
            </div>
            <label>Êtes-vous vétérinaire ?</label>
            <div className="form-check form-switch">
              <input
                className="form-check-input mt-2"
                type="checkbox"
                role="switch"
                id="vet"
                name="role"
                value="vet"
                onChange={handleChange}
              />
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
          {isAdmin && <div id="roleField">Role: Admin</div>}
        </form>
      </div>
      <p className="text-center link_bright">
        Vous avez déjà un compte{" "}
        <Link to="/login">
          <strong>Se connecter maintenant!</strong>
        </Link>
      </p>
    </div>
  );
}
