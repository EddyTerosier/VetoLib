import React, { useEffect, useState } from "react";
import "../css/custom.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddAnimalForm() {
  const [formData, setFormData] = useState({
    name: "",
    race: "",
    age: "",
    type: "",
  });
  const [animalTypes, setAnimalTypes] = useState([]);
  const [message, setMessage] = useState();
  const notify = () => toast(message);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/animal/add-animal", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Quelque chose s'est mal passé. Veuillez réessayer.");
        }
        return response.json();
      })
      .then((formData) => {
        console.error("Succès:", formData);
        setMessage("Animal ajouté avec succès!");
        notify(message);
      })
      .catch((error) => {
        setMessage("Erreur lors de l'ajout de l'animal.");
        notify(message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/animal/get-type-enum", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Quelque chose s'est mal passé");
        }
        return response.json();
      })
      .then((data) => {
        setAnimalTypes(data);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  }, []);

  return (
    <div className="container">
      <ToastContainer />
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">Ajouter un Animal</h2>
        <p className="text-white-50">
          Remplissez les informations ci-dessous pour ajouter un nouvel animal.
        </p>
      </div>
      <div className="form-container my-5">
        <div className="guidance-section text-center mb-5">
          <p>
            N'oubliez pas de vérifier les informations avant de soumettre. Un
            historique précis aide à fournir les meilleurs soins possibles.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="row justify-content-center">
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nom de l'animal
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Nom de l'animal"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Âge
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                placeholder="Âge de l'animal"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="race" className="form-label">
                Race
              </label>
              <input
                type="text"
                className="form-control"
                id="race"
                name="race"
                value={formData.race}
                placeholder="Race de l'animal"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type d'animal
              </label>
              <select
                className="form-control"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                {animalTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="additional-info text-center my-5">
              <h3>Importance des Informations:</h3>
              <p>
                La connaissance du type et de la race de l'animal nous permet de
                personnaliser les traitements et conseils. L'âge est crucial
                pour les bilans de santé réguliers.
              </p>
            </div>
            <button type="submit" className="btn appointmentBtn">
              Ajouter Animal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
