import React from "react";
import Cookies from "js-cookie";
export default function GenerateBdd() {
  const token = Cookies.get("jwt");
  const handleClick = () => {
    fetch("http://localhost:8000/database/create-all-tables", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          alert("Base de données créée avec succès !");
        } else {
          throw new Error("Erreur lors de la création de la base de données");
        }
      })
      .catch((error) => {
        console.error(error);
        console.log(
          "Une erreur est survenue lors de la création de la base de données",
        );
      });
  };
  return <button onClick={handleClick}>Créer la base de données</button>;
}
 