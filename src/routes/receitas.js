import { Router } from 'express';

import { receitaController }
from '../controllers/receitaController.js';

const router = Router();
/**
 * @swagger
 * /receitas:
 *   get:
 *     summary: Lista todas as receitas
 *     responses:
 *       200:
 *         description: Lista de receitas
 */

router.get(
    '/',
    receitaController.listarTodas
);

router.post(
    '/',
    receitaController.criar
);

router.get('/:id',
    receitaController.buscarPorId
);

router.put('/:id',
    receitaController.atualizar
);

router.delete('/:id',
    receitaController.remover
);

export default router;

