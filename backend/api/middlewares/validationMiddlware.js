const express = require('express');
const{ body, validationResult} = require('express-validator');


//fontion middleware pour la validation des données entrantes
exports.validateRegistration = [
    //validation du nom pour correspondre au format string nécéssité
    body('firstname').trim().notEmpty().withMessage('Le nom est requis').isString().withMessage('Le nom doit être une chaîne de caractères de l\'alphabet'),

    //validation de la donnée prénom pour correspondre au format string
    body('lastname').trim().notEmpty().withMessage('Le prénom est requis').isString().withMessage('Le prénom doit être une chaîne de caractères de l\'alphabet'),

    //validation de la donnée adresse pour correspondre au format string
    body('address').trim().notEmpty().withMessage('L\'adresse est requise').isString().withMessage('L\'adresse doit être une chaîne de caractères de l\'alphabet'),

    //validation de la donnée email pour correspondre au format string
    body('email').trim().notEmpty().withMessage('L\'email est requis').isEmail().withMessage('L\'email doit être valide'),

    //validation de la donnée mot de passe pour correspondre au format string
    body('password').trim().notEmpty().withMessage('Le mot de passe est requis').isString().withMessage('Le mot de passe doit être une chaîne de caractères de l\'alphabet'),

    //validation de la donnée téléphone pour correspondre au format integer
    body('phone').trim().notEmpty().withMessage('Le téléphone est requis').isInt().withMessage('Le téléphone doit être composé de chiffres'),

    // Validation de la donnée rôle pour correspondre aux valeurs de type enum 'user', 'vet' ou 'admin'
    body('role').trim().notEmpty().withMessage('Le rôle est requis').isIn(['user', 'vet', 'admin']).withMessage('Le rôle "user", "vet", "admin" doit être spécifié'),

    // Vérifier les erreurs de validation
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }

]