import { Router } from 'express';
import card from '@controllers/card.controller';

const router = Router();
router.get('/cards', card.list);

export default router;