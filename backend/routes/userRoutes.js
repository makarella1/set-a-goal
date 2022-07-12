import { Router } from 'express';

import userController from '../controllers/userController.js';

import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', protect, userController.getMe);

export default router;
