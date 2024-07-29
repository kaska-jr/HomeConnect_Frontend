import express from 'express';
import {login, register, updateUserAsAdmin } from '../controllers/auth';
import { verifyAdmin, verifyToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.put('/update-admin',verifyToken, verifyAdmin, updateUserAsAdmin)


export default router;
