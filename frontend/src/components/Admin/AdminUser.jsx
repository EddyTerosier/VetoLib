import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function AdminUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const token = Cookies.get("jwt");
        fetch("http://127.0.0.1:8000/user/getAllUsers", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        })
        .catch(error => console.error("Erreur lors de la récupération des utilisateurs:", error));
    }, []);

    const deleteUser = (userId) => {
        const token = Cookies.get("jwt");
        fetch(`http://127.0.0.1:8000/user/deleteUser/${userId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (response.ok) {
                // Supprime l'utilisateur de l'état `users` après la suppression réussie
                setUsers(users.filter(user => user.id !== userId));
            } else {
                // Gérer l'échec de la suppression
                console.error("Échec de la suppression de l'utilisateur");
            }
        })
        .catch(error => console.error("Erreur lors de la suppression de l'utilisateur:", error));
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Rôle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminUser;
