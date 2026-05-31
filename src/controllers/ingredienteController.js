import { ingredienteService } from '../services/ingredienteService.js';

export const ingredienteController = {

    listarTodos(req, res) {

        res.json(
            ingredienteService.listarTodos()
        );
    },

    buscarPorId(req, res) {

        const ingrediente =
            ingredienteService.buscarPorId(
                Number(req.params.id)
            );

        res.json(ingrediente);
    },

    criar(req, res) {

        const ingrediente =
            ingredienteService.criar(req.body);

        res.status(201).json(ingrediente);
    },

    atualizar(req, res) {

        const ingrediente =
            ingredienteService.atualizar(
                Number(req.params.id),
                req.body
            );

        res.json(ingrediente);
    },

    remover(req, res) {

        ingredienteService.remover(
            Number(req.params.id)
        );

        res.status(204).end();
    }
};