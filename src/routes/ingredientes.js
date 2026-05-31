import { Router } from 'express';
import { ingredienteController } from '../controllers/ingredienteController.js';

const router = Router();

router.get('/', ingredienteController.listarTodos);

router.get('/:id', ingredienteController.buscarPorId);

router.post('/', ingredienteController.criar);

router.put('/:id', ingredienteController.atualizar);

router.delete('/:id', ingredienteController.remover);

export default router;