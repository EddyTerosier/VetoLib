const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserController = {
  // Lire les informations d'un utilisateur
  async getUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Avoir l'id d'un utilisateur
  async getIdUser(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.user.id } });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Lire les informations de tous les utilisateurs
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Mettre à jour un utilisateur
  async updateUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { firstname, lastname, email, password, role, address, phone } =
        req.body;

      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }

      user.firstname = firstname;
      user.lastname = lastname;
      user.email = email;
      user.role = role;
      user.address = address;
      user.phone = phone;
      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }

      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Supprimer un utilisateur
  async deleteUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }

      await user.destroy();
      res.status(200).json({ message: "Utilisateur supprimé" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Inscription d'un utilisateur
  async register(req, res) {
    try {
      const { firstname, lastname, email, password, role } = req.body;
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ message: "Email déjà utilisé" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role: role || "user",
      });
      const token = jwt.sign(
        { id: newUser.id, email: newUser.email, role: newUser.role },
        process.env.SECRET_KEY,
        { expiresIn: "1h" },
      );
      res.status(201).json({
        user: { id: newUser.id, firstname, lastname, email, role },
        token,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Connexion d'un utilisateur
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Email ou mot de passe incorrect" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "Email ou mot de passe incorrect" });
      }
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: "1h" },
      );
      res.status(200).json({
        message: "Connexion réussie",
        token,
        role: user.role,
        id: user.id,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Déconnexion d'un utilisateur
  async logout(req, res) {
    res.cookie("token", "", { expires: new Date(0), httpOnly: true });
    res.status(200).json({ message: "Déconnexion réussie" });
  },

  // Récupérer l'utilisateur par son token
  async getUserByToken(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findByPk(decodedToken.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;
