import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function AdminAppointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const token = Cookies.get("jwt");
        fetch("http://127.0.0.1:8000/appointment/getAllAppointments", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                setAppointments(data);
            } else {
                console.error("Réponse inattendue, attendu un tableau:", data);
            }
        })
        .catch(error => console.error("Erreur lors de la récupération des rendez-vous:", error));
    }, []);

    const deleteAppointment = (appointmentId) => {
        const token = Cookies.get("jwt");
        fetch(`http://127.0.0.1:8000/appointment/deleteAppointment/${appointmentId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (response.ok) {
                // Supprime le rendez-vous de l'état `appointments` après la suppression réussie
                setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
            } else {
                // Gérer l'échec de la suppression
                console.error("Échec de la suppression du rendez-vous");
            }
        })
        .catch(error => console.error("Erreur lors de la suppression du rendez-vous:", error));
    };

    return (
        <div>
            <h2 className="section-title text-center">Gestion des Rendez-vous</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Heure</th>
                        <th>Raison</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td>{appointment.date}</td>
                            <td>{appointment.hour}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status}</td>
                            <td>
                                <button onClick={() => deleteAppointment(appointment.id)} className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminAppointments;
