import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function AdminAnimal() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const token = Cookies.get("jwt");
        fetch("http://127.0.0.1:8000/animal/getAllAnimal", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.animal) { 
                setAnimals(data.animal); 
            } else {
                console.error("Réponse inattendue:", data);
            }
        })
        .catch(error => console.error("Erreur lors de la récupération des animaux:", error));
    }, []);

    const deleteAnimal = (animalId) => {
        const token = Cookies.get("jwt");
        fetch(`http://127.0.0.1:8000/animal/deleteAnimal/${animalId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (response.ok) {
                setAnimals(animals.filter(animal => animal.id !== animalId));
            } else {
                console.error("Échec de la suppression de l'animal");
            }
        })
        .catch(error => console.error("Erreur lors de la suppression de l'animal:", error));
    };

    return (
        <div>
            <h2 className="section-title text-center">Gestion des Animaux</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Race</th>
                        <th>Age</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal) => (
                        <tr key={animal.id}>
                            <td>{animal.name}</td>
                            <td>{animal.race}</td>
                            <td>{animal.age}</td>
                            <td>{animal.type}</td>
                            <td>
                                <button onClick={() => deleteAnimal(animal.id)} className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminAnimal;
