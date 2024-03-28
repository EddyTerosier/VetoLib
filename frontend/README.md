VetoLib

VetoLib est une application web permettant aux propriétaires d'animaux de compagnie de prendre des rendez-vous avec des vétérinaires. L'application facilite la gestion des rendez-vous et assure une meilleure organisation pour les vétérinaires et les propriétaires d'animaux.
Commencer

Ce guide vous aidera à mettre en place l'application VetoLib sur votre système local pour le développement et le test.
Prérequis

    Node.js (v14.x ou plus récente)
    npm (v6.x ou plus récente) ou yarn (v1.22.x ou plus récente)
    MySQL (v8.x ou plus récente)
    Postman (pour tester les API)

Configuration de la Base de Données

    Création de la Base de Données : Ouvrez votre système de gestion de base de données MySQL et créez une nouvelle base de données nommée vetolib.

    Initialisation de la Base de Données : Importez le script SQL fourni avec le projet pour initialiser votre base de données avec les tables nécessaires.

Mise en Place du Back-End

    Installation des Dépendances : Naviguez vers le répertoire backend et installez les dépendances nécessaires en exécutant :

    bash

npm install
# ou
yarn install

Configuration : Dupliquez le fichier .env.example en .env et remplissez les valeurs nécessaires, notamment les détails de connexion à votre base de données MySQL.

Démarrage du Serveur : Lancez le serveur back-end avec la commande suivante :

bash

    npm ndm
    # ou
    yarn ndm

Votre serveur back-end devrait maintenant être opérationnel sur http://localhost:8000.
Mise en Place du Front-End

    Installation des Dépendances : Naviguez vers le répertoire frontend et installez les dépendances nécessaires en exécutant :

    bash

npm install
# ou
yarn install

Démarrage de l'Application Front-End : Lancez l'application front-end avec la commande suivante :

bash

    npm run dev
    # ou
    yarn dev

Votre application front-end devrait maintenant être accessible sur http://localhost:5173.
Tester l'API avec Postman

    Importer la Collection Postman : Importez la collection Postman fournie avec le projet dans votre application Postman.

    Envoyer des Requêtes : Sélectionnez une requête à tester, par exemple, l'inscription d'un nouvel utilisateur. Remplissez les détails requis dans le corps de la requête et envoyez-la à votre serveur local.

    Vérification : Vérifiez la réponse reçue pour confirmer que l'API fonctionne comme attendu.

Initialisation de la Base de Données avec l'API

Après avoir configuré et démarré votre serveur back-end, vous pouvez initialiser votre base de données avec les tables nécessaires en utilisant l'endpoint create-all-table fourni par l'API de VetoLib.

Suivez ces étapes pour créer les tables dans votre base de données :

    Démarrage du Serveur Back-End : Assurez-vous que votre serveur back-end est en cours d'exécution en suivant les instructions de la section Mise en Place du Back-End.

    Utilisation de Postman pour Initialiser la Base de Données :
        Ouvrez Postman et créez une nouvelle requête.
        Définissez le type de la requête sur GET.
        Entrez l'URL de l'endpoint pour initialiser la base de données. Si votre serveur s'exécute localement sur le port 8000, l'URL sera :

        sql

        http://localhost:8000/database/create-all-tables

        Appuyez sur le bouton Send pour envoyer la requête à votre serveur.

    Vérification : Après avoir envoyé la requête, vous devriez recevoir une réponse de succès de la part de votre serveur, indiquant que les tables ont été correctement créées dans votre base de données. Vous pouvez vérifier cela en consultant votre système de gestion de base de données MySQL.

Note Importante

L'endpoint create-all-table est conçu pour être utilisé une seule fois lors de l'initialisation initiale de votre base de données. Il crée les structures de tables nécessaires pour que l'application fonctionne correctement. Si vous exécutez cet endpoint sur une base de données déjà initialisée, cela pourrait entraîner la perte de données existantes si les tables sont recréées. Utilisez cet endpoint avec prudence.