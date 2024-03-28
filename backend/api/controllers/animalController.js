const Animal = require("../models/animalModel");

//ecriture des différentes logiques crud concernant la table animal

//get animal pour afficher tous les animaux -> test OK
exports.getAllAnimal = async (req, res) => {
  const allAnimal = await Animal.findAll();
  res.status(200).json({
    message: "Voici tous les animaux",
    animal: allAnimal,
  });
};

//pour afficher un seul animal -> OK
exports.getAnimal = async (req, res) => {
  const animalId = req.params.id;
  const animal = await Animal.findOne({
    where: {
      id: animalId,
    },
  });
  res.status(200).json({
    message: "Voici l'animal demandé",
    animal: animal,
  });
};


exports.postAnimal = async(req, res) => {
    let animalData = req.body;
    try {
        const newAnimal = await Animal.create({
            ...animalData,
            userId: req.user.id 
        });
        res.status(201).json({ message: "Animal ajouté avec succès", animal: newAnimal });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de l'animal", error: error.message });
    }
};


//pour modifier un animal
exports.updateAnimal = async (req, res) => {
  let animalId = req.params.id;
  let UpdateQueryAnimal = req.body;
  try {
    await Animal.update(UpdateQueryAnimal, {
      where: {
        id: animalId,
      },
    });
    res.status(200).json("l'animal est mise à jour");
  } catch (error) {
    res.status(500).json(error);
  }
};

//pour supprimer un animal
exports.deleteAnimal = async (req, res) => {
  let animalId = req.params.id;
  let deleteAnimal = await Animal.destroy({
    where: {
      id: animalId,
    },
  });
  res.status(200).json("l'animal est supprimé");
};

//pour les routes filtrées par les champs présents dans la base de données

//afficher les animaux par leur noms
exports.getAnimalByName = async (req, res) => {
  try {
    const animalName = req.params.name;
    const animal = await Animal.findAll({
      where: {
        name: animalName,
      },
    });
    res.status(200).json({
      message: "Voici les animaux demandé par leur noms",
      animal: animal,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//afficher les animaux par leur age
exports.getAnimalByAge = async (req, res) => {
  try {
    const animalAge = req.params.age;
    const animal = await Animal.findAll({
      where: {
        age: animalAge,
      },
    });
    res.status(200).json({
      message: "Voici les animaux demandé par leur age",
      animal: animal,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//afficher les animaux par leur race
exports.getAnimalByRace = async (req, res) => {
  try {
    const animalRace = req.params.race;
    const animal = await Animal.findAll({
      where: {
        race: animalRace,
      },
    });
    res.status(200).json({
      message: "Voici les animaux demandé par leur race",
      animal: animal,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//afficher les animaux par leur type
exports.getAnimalByType = async (req, res) => {
  try {
    const animalType = req.params.type;
    const animal = await Animal.findAll({
      where: {
        name: animalType,
      },
    });
    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getTypeEnum = async (req, res) => {
  try {
    const typeEnum = Animal.rawAttributes.type.values;
    res.status(200).json(typeEnum);
  } catch (error) {
    res.status(500).json(error);
  }
};
