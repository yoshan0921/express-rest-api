import express from 'express';
import { getAccounts, getAccount } from '../controllers/accountController.js';

const router = express.Router();

// Get all users
router.get("/", getAccounts);
// Get a specific user
router.get("/:id", getAccount);

export default router;