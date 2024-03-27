import React, { useState } from "react";
import "../css/custom.css";
function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    race: "",
    age: "",
    type: "",
    email: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les données du formulaire au serveur
    console.log(formData);
  };

  return (
    <div className="appointment-page container">
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">
          Prenez rendez-vous en ligne
        </h2>
        <p className="text-white-50">
          Programmez la visite de votre animal en quelques clics.
        </p>
      </div>
      <div className="form-container my-5">
        <h1 className="text-center mb-4">Formulaire de Rendez-vous</h1>
        <form onSubmit={handleSubmit} className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-8 mb-3">
                <label htmlFor="petType" className="form-label">
                  Pour quel animal souhaitez-vous prendre rendez-vous ?
                </label>
                <select
                  className="form-control"
                  id="petType"
                  name="petType"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un animal</option>
                  <option></option>
                </select>
              </div>
              <div className="col-md-2 mb-3">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2 mb-3">
                <label htmlFor="time" className="form-label">
                  Heure
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">
                Raison de la visite
              </label>
              <textarea
                className="form-control"
                id="reason"
                name="reason"
                rows="3"
                value={formData.reason}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn bg-orange appointmentBtn">
              Prendre rendez-vous
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <h2 className="section-title mb-4">FAQ</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Comment préparer votre animal pour le rendez-vous ?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Avant le rendez-vous, promenez votre animal pour qu'il soit
                calme et détendu, et n'oubliez pas de le garder à jeun si
                nécessaire pour l'examen ou les procédures prévues.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Quels documents apporter ?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Veuillez apporter le carnet de santé de votre animal ainsi que
                tout document pertinent concernant son historique médical et
                votre pièce d'identité.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Comment annuler ou reprogrammer un rendez-vous ?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Pour annuler ou reprogrammer, contactez-nous au moins 24 heures
                à l'avance par téléphone ou via notre plateforme en ligne pour
                éviter des frais d'annulation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
