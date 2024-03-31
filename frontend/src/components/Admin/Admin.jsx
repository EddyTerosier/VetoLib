import React from "react";
import AdminUser from "./AdminUser";
import AdminCabinet from "./AdminCabinet";
import AdminAnimal from "./AdminAnimal";
import AdminAppointments from "./AdminAppointment";
function AdminPanel() {
   
  return (
    <div className="admin-panel-page container">
      <div className="info-section text-center my-5">
        <h2 className="section-title text-white">Panneau d administration</h2>
        <p className="text-white-50">Gérez les utilisateurs, les rendez-vous, et plus.</p>
      </div>
      <div className="data-container my-5">
        <h1 className="text-center mb-4">Gestion des Utilisateurs</h1>
        <AdminUser/>
      </div>
      <div className="data-container my-5">
        <h1 className="text-center mb-4">Gestion des Cabinets</h1>
        <AdminCabinet/>
      </div>
      <div className="data-container my-5">
        <h1 className="text-center mb-4">Gestion des animaux</h1>
        <AdminAnimal/>
      </div>
      <div className="data-container my-5">
        <h1 className="text-center mb-4">Gestion des Rendez-vous</h1>
        <AdminAppointments/>
      </div>
    </div>
  );
}

export default AdminPanel;
