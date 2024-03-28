import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";

export default function UpdateProfile() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const userId = useParams()["id"];

  useEffect(() => {
    const cookie = Cookies.get("jwt");
    fetch(`http://127.0.0.1:8000/user/getUser/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données utilisateur:",
          error,
        );
      });
  }, [userId]);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registration-page min-vh-100 container">
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">
          Bienvenue sur votre profil !
        </h2>
        <p className="text-white-50">Ici vous pouvez modifier votre profil.</p>
      </div>
      <div className="form-container mt-5 mb-4">
        <h1 className="text-center mb-4">Profil de {userData.firstname} </h1>
        <form onSubmit={handleSubmit} className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  Prénom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={userData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={userData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Adresse
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                />
              </div>
            </div>
          </div>
          <div className="text-center add_top_20">
            <button
              type="submit"
              value="submit"
              className="mt-4 btn bg-orange appointmentBtn"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
