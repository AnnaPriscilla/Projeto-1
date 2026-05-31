import { comentarioService } from '../services/comentarioService.js';

export const comentarioController = {

    listarTodos(req, res) {

        res.json(
            comentarioService.listarTodos()
        );
    },

    buscarPorId(req, res) {

        const comentario =
            comentarioService.buscarPorId(
                Number(req.params.id)
            );

        res.json(comentario);
    },

    criar(req, res) {

        const comentario =
            comentarioService.criar(req.body);

        res.status(201).json(comentario);
    },

    atualizar(req, res) {

        const comentario =
            comentarioService.atualizar(
                Number(req.params.id),
                req.body
            );

        res.json(comentario);
    },

    remover(req, res) {

        comentarioService.remover(
            Number(req.params.id)
        );

        res.status(204).end();
    }
};