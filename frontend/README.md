VetoLib

VetoLib est une application web permettant aux propriétaires d'animaux de compagnie de prendre des rendez-vous avec des vétérinaires. L'application facilite la gestion des rendez-vous et assure une meilleure organisation pour les vétérinaires et les propriétaires d'animaux.
Commencer

Ce guide vous aidera à mettre en place l'application VetoLib sur votre système local pour le développement et le test.

Mise en Place du Back-End

    Installation des Dépendances : Naviguez vers le répertoire backend et installez les dépendances nécessaires en exécutant :

    bash
cd backend
npm install
# ou
yarn install

Configuration du fichier .env dans le fichier /api :  remplissez les valeurs nécessaires, notamment les détails de connexion à votre base de données MySQL.

DATABASE_NAME="vetolib"
DATABASE_HOST="localhost"
DATABASE_USER=""
DATABASE_PASSWORD=""
DATABASE_DIALECT="mysql"
SECRET_KEY=""

Démarrage du Serveur : Lancez le serveur back-end avec la commande suivante :

bash

    npm run ndm
    # ou
    yarn ndm

Votre serveur back-end devrait maintenant être opérationnel sur http://localhost:8000.

Mise en Place du Front-End

    Installation des Dépendances : Naviguez vers le répertoire frontend et installez les dépendances nécessaires en exécutant :

    bash
cd frontend
npm install
# ou
yarn install

Démarrage de l'Application Front-End : Lancez l'application front-end avec la commande suivante :

bash

    npm run dev
    # ou
    yarn dev

Votre application front-end devrait maintenant être accessible sur http://localhost:5173.


Initialisation de la Base de Données avec l'API

Après avoir configuré et démarré votre serveur back-end, vous pouvez initialiser votre base de données avec le bouton disponible sur la navbar de l'acceuil "Générer la base de données".


Le bouton "Générer base de données" est conçu pour être utilisé une seule fois lors de l'initialisation initiale de votre base de données. Il crée les structures de tables nécessaires pour que l'application fonctionne correctement. Si vous exécutez cet endpoint sur une base de données déjà initialisée, cela pourrait entraîner la perte de données existantes si les tables sont recréées. 
