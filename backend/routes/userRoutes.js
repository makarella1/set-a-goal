import { Router } from 'express';

import userController from '../controllers/userController.js';

const router = Router();

router.post('/', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', userController.getMe);

export default router;
