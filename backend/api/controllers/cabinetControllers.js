const Cabinet = require('../models/cabinetModel');
const Animal = require('../models/animalModel'); // Assurez-vous que la casse est correcte et cohérente
const User = require('../models/userModel');

const CabinetController = {
    // Lister tous les cabinets
    getAllCabinet: async(req, res) => {
        let allCabinet = await Cabinet.findAll();
        res.status(200).json({
            message: "Voici toutes les cabinets",
            cabinet: allCabinet
        });
    },

    // Obtenir un cabinet spécifique
    getCabinet: async (req, res) => {
        const cabinetId = req.params.id;
        const cabinet = await Cabinet.findOne({
            where: {
                id: cabinetId,
            }
        });

        res.status(200).json({
            message: "Voici le cabinet demandée",
            cabinet: cabinet
        });
    },

    // Créer un nouveau cabinet
    createCabinet: async(req, res) => {
        let cabinet = req.body;
        await Cabinet.create(cabinet);
        res.status(201).json("Cabinet créé");
    },

    // Mettre à jour un cabinet
    updateCabinet: async(req, res) => {
        let idC = req.params.id;
        let UpdateDataCabinet = req.body;

        let cabinet = await Cabinet.update(UpdateDataCabinet, {
            where: {
                id: idC,
            }
        });
        res.status(200).json("cabinet mis à jour");
    },

    // Supprimer un cabinet
    deleteCabinet: async(req, res) => {
        let idC = req.params.id;
        
        let deleteCabinet = await Cabinet.destroy({
            where: {
                id: idC
            }
        });
        res.status(200).json("cabinet supprimé");
    }
};

module.exports = CabinetController;
