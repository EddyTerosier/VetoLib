import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function UpdateProfile({ userData }) {
  const [userDetails, setUserDetails] = useState({});
  const [message, setMessage] = useState();

  const userId = useParams()["id"];

  useEffect(() => {
    if (userData) {
      setUserDetails({
        ...userDetails,
        firstname: userData.firstname || "",
        lastname: userData.lastname || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
        role: userData.role || "",
      });
    }
  }, [userData]);

  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userDetails.newPassword !== userDetails.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const dataToSend = {
      ...userDetails,
      password: userDetails.newPassword
        ? userDetails.newPassword
        : userDetails.password,
    };

    fetch(`http://127.0.0.1:8000/user/updateUser/${userId}`, {
      method: "PUT",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.id) {
          setMessage("Profil modifié avec succès!");
          toast(message);
        } else {
          setMessage(
            "Erreur lors de la mise à jour du profil: " + JSON.stringify(data),
          );
          toast(message);
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Erreur lors de la mise à jour du profil: " + error.message);
      });
  };

  return (
    <div className="registration-page min-vh-100 container">
      <ToastContainer />
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">Modifier le profil</h2>
        <p className="text-white-50">Ici vous pouvez modifier votre profil.</p>
      </div>
      <div className="form-container mt-5 mb-4">
        <form onSubmit={handleSubmit} className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstname" className="form-label">
                  Prénom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={userDetails.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastname" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={userDetails.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="address" className="form-label">
                  Adresse
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={userDetails.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="newPassword" className="form-label">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                  value={userDetails.newPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={userDetails.confirmPassword}
                  onChange={handleChange}
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

UpdateProfile.propTypes = {
  userData: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    password: PropTypes.string,
    newPassword: PropTypes.string,
    confirmPassword: PropTypes.string,
    role: PropTypes.string,
  }),
};
