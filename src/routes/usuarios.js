import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController.js';

const router = Router();

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */

router.get('/', usuarioController.listarTodos);

router.get('/:id',
    usuarioController.buscarPorId
);

router.post('/',
    usuarioController.criar
);

router.put('/:id',
    usuarioController.atualizar
);

router.delete('/:id',
    usuarioController.remover
);

export default router;