import React, { useState, useEffect } from "react";
import "../css/custom.css";

export default function Cabinet() {
  const [CabinetData, setCabinetData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cabinet/get-all-cabinets", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Quelque chose s'est mal passé");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCabinetData(data.cabinet);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">Cabinets Vétérinaires</h2>
        <p className="text-white-50">
          Trouvez toutes les informations sur les cabinets vétérinaires
          disponibles.
        </p>
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Nom</th>
              <th>Numéro de rue</th>
              <th>Adresse</th>
              <th>Code postal</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Site Web</th>
            </tr>
          </thead>
          <tbody>
            {CabinetData.map((cabinet, index) => (
              <tr key={index}>
                <td>{cabinet.name}</td>
                <td>{cabinet.street_number}</td>
                <td>{cabinet.address}</td>
                <td>{cabinet.postal_code}</td>
                <td>{cabinet.email}</td>
                <td>{cabinet.phone}</td>
                <td>{cabinet.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
