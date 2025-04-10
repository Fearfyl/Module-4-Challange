import jwt from 'jsonwebtoken';

// Middleware to check if the user is authenticated
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
   

    if (!authHeader) {
    }
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY;
    
    // Verify the token
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

module.exports = authMiddleware;
