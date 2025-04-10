import express from 'express';
import authController from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware';


const router = express.Router();

// Register a new user
router.post('/register', authController.register);

// Login a user
router.post('/login', authController.getToken);

// Get user details
router.get('/dashboard', authMiddleware, authController.getUser);
res.status(200).json({ message: 'User authenticated successfully' });

export default router;