import express from 'express';
import { pdfCreator } from '../controllers/pdfController';

const router = express.Router();
router.route('/').post(pdfCreator);

export default router;
