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
              VétoLib est un site de prise de rendez-vous en ligne spécialement
              conçu pour faciliter l'accès aux soins vétérinaires. Notre
              plateforme a été créée dans le but de simplifier la vie des
              propriétaires d'animaux et des vétérinaires en offrant un moyen
              simple et rapide de prendre rendez-vous en ligne.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <h2 className="text-center mb-4 section-title">
              Comment ça marche ?
            </h2>
            <h4>
              Notre plateforme est très facile à utiliser. Il vous suffit de
              suivre ces trois étapes simples :
            </h4>
            <div className="d-flex justify-content-center">
              <ol className="list-unstyled">
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fa-solid fa-magnifying-glass-location"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Recherchez un vétérinaire près de chez vous en utilisant
                    notre moteur de recherche. Vous pouvez filtrer les résultats
                    en fonction de la distance, des horaires d'ouverture, des
                    spécialités et des avis laissés par les autres utilisateurs.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-calendar-alt me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Prenez rendez-vous en ligne en quelques clics. Sélectionnez
                    le créneau horaire qui vous convient le mieux et suivez les
                    instructions pour confirmer votre rendez-vous. Vous recevrez
                    une confirmation par e-mail et par SMS.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-clinic-medical me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Rendez-vous chez le vétérinaire à l'heure convenue. Nous
                    vous recommandons d'arriver quelques minutes à l'avance pour
                    remplir les formalités administratives et pour que votre
                    animal soit pris en charge dans les meilleures conditions.
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
            <h4>
              En utilisant notre plateforme, vous bénéficierez de nombreux
              avantages :
            </h4>
            <div className="d-flex justify-content-center">
              <ul className="list-unstyled text-center">
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-map-marker-alt me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Trouvez un vétérinaire près de chez vous : notre moteur de
                    recherche vous permet de trouver rapidement un vétérinaire
                    proche de chez vous, en fonction de vos critères de
                    recherche.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-clock me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Prenez rendez-vous en ligne en quelques clics : plus besoin
                    de passer des coups de fil ou d'attendre en ligne pour
                    prendre rendez-vous. Notre plateforme vous permet de
                    réserver votre créneau horaire en quelques clics seulement.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-center list-item-custom">
                  <i
                    className="fas fa-hourglass-start me-3"
                    style={{ fontSize: "32px" }}
                  ></i>
                  <span className="text-custom">
                    Gagnez du temps en évitant les files d'attente : en prenant
                    rendez-vous en ligne, vous évitez les files d'attente et les
                    temps d'attente inutiles. Vous pouvez ainsi planifier votre
                    visite chez le vétérinaire en fonction de votre emploi du
                    temps.
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
