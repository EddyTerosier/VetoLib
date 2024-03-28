import React, { useEffect } from "react";
import "../css/custom.css";
import { Link, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const userId = useParams()["id"];

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/user/getUser/${userId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données utilisateur:",
          error,
        );
      });
  }, [userId]);

  return (
    <div className="container">
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">Mon Profil</h2>
        <p className="text-white-50">Les détails de mon profil.</p>
      </div>
      <div className="profile-details row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Prénom</h5>
              <p className="card-text">Jean</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nom</h5>
              <p className="card-text">Dupont</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">jean.dupont@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Téléphone</h5>
              <p className="card-text">0123456789</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Adresse</h5>
              <p className="card-text">123 Rue de la République, 75001 Paris</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Rôle</h5>
              <p className="card-text">Utilisateur</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/update-profile/1" className="btn btn-modern">
          Modifier le Profil
        </Link>
      </div>
    </div>
  );
}
