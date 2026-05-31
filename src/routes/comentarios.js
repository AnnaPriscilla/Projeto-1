import { Router } from 'express';
import { comentarioController } from '../controllers/comentarioController.js';

const router = Router();

router.get('/', comentarioController.listarTodos);

router.get('/:id', comentarioController.buscarPorId);

router.post('/', comentarioController.criar);

router.put('/:id', comentarioController.atualizar);

router.delete('/:id', comentarioController.remover);

export default router;