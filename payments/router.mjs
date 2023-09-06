import express from 'express';
import { createOrder } from './controller.mjs';

const router = express.Router();

router.post('/create-order', createOrder);

export default router;