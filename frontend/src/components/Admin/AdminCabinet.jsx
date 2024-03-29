import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function AdminCabinet() {
    const [cabinets, setCabinets] = useState([]);

    useEffect(() => {
        const token = Cookies.get("jwt");
        fetch("http://127.0.0.1:8000/cabinet/getAllCabinet", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.cabinet) { 
                setCabinets(data.cabinet); 
            } else {
                console.error("Réponse inattendue:", data);
            }
        })
        .catch(error => console.error("Erreur lors de la récupération des cabinets:", error));
    }, []);

    const deleteCabinet = (cabinetId) => {
        const token = Cookies.get("jwt");
        fetch(`http://127.0.0.1:8000/cabinet/deleteCabinet/${cabinetId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (response.ok) {
                setCabinets(cabinets.filter(cabinet => cabinet.id !== cabinetId));
            } else {
                console.error("Échec de la suppression du cabinet");
            }
        })
        .catch(error => console.error("Erreur lors de la suppression du cabinet:", error));
    };

    return (
        <div>
            <h2 className="section-title text-center">Gestion des Cabinets</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Code Postal</th>
                        <th>Téléphone</th>
                        <th>Email</th>
                        <th>Site Internet</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cabinets.map((cabinet) => (
                        <tr key={cabinet.id}>
                            <td>{cabinet.id}</td>
                            <td>{cabinet.name}</td>
                            <td>{cabinet.address}</td>
                            <td>{cabinet.postal_code}</td>
                            <td>{cabinet.phone}</td>
                            <td>{cabinet.email}</td>
                            <td>{cabinet.website}</td>
                            <td>
                                <button onClick={() => deleteCabinet(cabinet.id)} className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminCabinet;
