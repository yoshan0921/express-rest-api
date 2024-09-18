import express from 'express';
import accountRoutes from './accountRoutes.js';

const router = express.Router();

router.use('/account', accountRoutes);

export default router;