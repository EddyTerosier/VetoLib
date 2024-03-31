import React, { useEffect, useState } from "react";
import "../css/custom.css";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import UpdateProfile from "./UpdateProfile.jsx";

export default function Profile() {
  const userId = useParams()["id"];
  const [userData, setUserData] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/user/getUser/${userId}`, {
      method: "GET",
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
  const handleEditClick = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  return (
    <div className="container min-vh-100">
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">Mon Profil</h2>
        <p className="text-white-50">Les détails de mon profil.</p>
      </div>
      <div className="profile-details row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Prénom</h5>
              <p className="card-text">
                {userData ? userData.firstname : "Chargement..."}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nom</h5>
              <p className="card-text">
                {userData ? userData.lastname : "Chargement..."}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">
                {userData ? userData.email : "Chargement..."}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Téléphone</h5>
              <p className="card-text">
                0{userData ? userData.phone : "Chargement..."}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Adresse</h5>
              <p className="card-text">
                {userData ? userData.address : "Chargement..."}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Rôle</h5>
              <p className="card-text">
                {userData ? userData.role : "Chargement..."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button
          onClick={handleEditClick}
          className="btn bg-orange appointmentBtn"
        >
          Modifier le profil
        </button>
      </div>
      <div className="text-center mt-4">
        {showUpdateForm && userData && <UpdateProfile userData={userData} />}
      </div>
    </div>
  );
}
