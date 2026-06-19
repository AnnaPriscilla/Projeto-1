import { Router } from 'express';

import { categoriaController }
from '../controllers/categoriaController.js';

const router = Router();
/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Lista todas as categorias
 *     responses:
 *       200:
 *         description: Lista de categorias
 */

router.get(
    '/',
    categoriaController.listarTodas
);

router.get(
    '/:id',
    categoriaController.buscarPorId
);

router.post(
    '/',
    categoriaController.criar
);

router.put(
    '/:id',
    categoriaController.atualizar
);

router.delete(
    '/:id',
    categoriaController.remover
);

export default router;