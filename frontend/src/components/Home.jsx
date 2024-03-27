import React from "react";
import "../css/custom.css";

export default function Home() {
  return (
    <div>
      {/* Hero section with updated background image and overlay */}
      <div
        className="hero-section position-relative overflow-hidden p-3 p-md-5 text-center bg-orange"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(243, 156, 18, 0.7), rgba(231, 76, 60, 0.7)), url('https://images.unsplash.com/photo-1561037404-61e1fe9d3836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Recherchez un vétérinaire</h1>
          <p className="lead fw-normal">
            Trouvez un vétérinaire près de chez vous et prenez rendez-vous en
            ligne en quelques clics.
          </p>
          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ex. Nom du vétérinaire, adresse..."
              />
              <div className="input-group-append">
                <button className="btn btn-modern" type="submit">
                  Rechercher
                </button>
              </div>
            </div>
            {/* Updated radio buttons */}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radio_search"
                id="all"
                value="all"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="all">
                Tous
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radio_search"
                id="vet"
                value="vet"
              />
              <label className="form-check-label" htmlFor="vet">
                Vétérinaires
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radio_search"
                id="clinic"
                value="clinic"
              />
              <label className="form-check-label" htmlFor="clinic">
                Cliniques
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Content sections with updated styles */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-center mb-4 section-title">
              Qui sommes-nous ?
            </h2>
            <p className="text-center">
              Un site de prise de rendez-vous en ligne pour les vétérinaires.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <h2 className="text-center mb-4 section-title">
              Comment ça marche ?
            </h2>
            <div className="d-flex justify-content-center">
              <ol className="list-unstyled">
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fa-solid fa-magnifying-glass-location"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Recherchez un vétérinaire près de chez vous.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-calendar-alt me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Prenez rendez-vous en ligne en quelques clics.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-clinic-medical me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Rendez-vous chez le vétérinaire à l'heure convenue.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <h2 className="text-center mb-4 section-title">
              Les avantages de VétoLib
            </h2>
            <div className="d-flex justify-content-center">
              <ul className="list-unstyled text-center">
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-map-marker-alt me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Trouvez un vétérinaire près de chez vous.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-clock me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Prenez rendez-vous en ligne en quelques clics.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-hourglass-start me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Gagnez du temps en évitant les files d'attente.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
