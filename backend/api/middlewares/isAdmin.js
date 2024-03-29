const jwt = require('jsonwebtoken');

exports.checkRole = (requiredRoles) => {
    return (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;      
            const token = authHeader && authHeader.split(' ')[1];
            if (!token) {
                return res.status(403).json({ message: "Aucun token fourni, accès refusé." });
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (!requiredRoles.includes(decoded.role)) {
                console.log(`Rôle [${decoded.role}] non autorisé.`);
                return res.status(403).json({ message: "Vous n'avez pas les droits suffisants pour accéder à cette ressource." });
            }
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ message: "Échec de l'authentification." });
        }
    };
};
