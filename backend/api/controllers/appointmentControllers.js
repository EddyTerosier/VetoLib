// controllers/appointmentController.js
const Appointment = require('../models/appointmentModel'); 

const AppointmentController = {
    // Créer un nouveau rendez-vous
    createAppointment: async (req, res) => {
        try {
            const appointment = await Appointment.create(req.body);
            res.status(201).json(appointment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Obtenir tous les rendez-vous
    getAllAppointments: async (req, res) => {
        try {
            const appointments = await Appointment.findAll();
            res.status(200).json(appointments);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Obtenir un rendez-vous par ID
    getAppointmentById: async (req, res) => {
        try {
            const appointment = await Appointment.findByPk(req.params.id);
            if (!appointment) {
                return res.status(404).json({ message: 'Rendez-vous non trouvé' });
            }
            res.status(200).json(appointment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Mettre à jour un rendez-vous
    updateAppointment: async (req, res) => {
        try {
            const updated = await Appointment.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated[0] === 0) {
                return res.status(404).json({ message: 'Rendez-vous non trouvé' });
            }
            res.status(200).json({ message: 'Rendez-vous mis à jour' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Supprimer un rendez-vous
    deleteAppointment: async (req, res) => {
        try {
            const deleted = await Appointment.destroy({
                where: { id: req.params.id }
            });
            if (deleted === 0) {
                return res.status(404).json({ message: 'Rendez-vous non trouvé' });
            }
            res.status(200).json({ message: 'Rendez-vous supprimé' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = AppointmentController;
