const Cabinet = require("../models/cabinetModel");
const Animal = require("../models/animalModel");
const User = require("../models/userModel");

const CabinetController = {
  // Lister tous les cabinets
  getAllCabinet: async (req, res) => {
    res.status(200).json({
      cabinet: await Cabinet.findAll(),
    });
  },

  // Obtenir un cabinet spécifique
  getCabinet: async (req, res) => {
    const cabinetId = req.params.id;
    const cabinet = await Cabinet.findOne({
      where: {
        id: cabinetId,
      },
    });

    res.status(200).json({
      message: "Voici le cabinet demandée",
      cabinet: cabinet,
    });
  },

  // Créer un nouveau cabinet
  createCabinet: async (req, res) => {
    let cabinet = req.body;
    await Cabinet.create(cabinet);
    res.status(201).json("Cabinet créé");
  },

  // Mettre à jour un cabinet
  updateCabinet: async (req, res) => {
    let idC = req.params.id;
    let UpdateDataCabinet = req.body;

    let cabinet = await Cabinet.update(UpdateDataCabinet, {
      where: {
        id: idC,
      },
    });
    res.status(200).json("cabinet mis à jour");
  },

  // Supprimer un cabinet
  deleteCabinet: async (req, res) => {
    let idC = req.params.id;

    let deleteCabinet = await Cabinet.destroy({
      where: {
        id: idC,
      },
    });
    res.status(200).json("cabinet supprimé");
  },
  //pour les routes filtrées
  //afficher les cabinets par leurs noms
  getCabinetByName: async (req, res) => {
    try {
      const cabinetName = req.params.name;
      const cabinet = await Cabinet.findAll({
        where: {
          name: cabinetName,
        },
      });
      res.status(200).json(cabinet);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //afficher les cabinets par leurs adresse
  getCabinetByAddress: async (req, res) => {
    try {
      const cabinetAddress = req.params.address;
      const cabinet = await Cabinet.findAll({
        where: {
          address: cabinetAddress,
        },
      });
      res.status(200).json(cabinet);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = CabinetController;
