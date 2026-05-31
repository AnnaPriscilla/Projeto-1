import { usuarioService } from '../services/usuarioService.js';

export const usuarioController = {

    listarTodos(req, res) {

        res.json(
            usuarioService.listarTodos()
        );
    },

    buscarPorId(req, res) {

        const usuario =
            usuarioService.buscarPorId(
                Number(req.params.id)
            );

        res.json(usuario);
    },

    criar(req, res) {

        const usuario =
            usuarioService.criar(req.body);

        res.status(201).json(usuario);
    },

    atualizar(req, res) {

        const usuario =
            usuarioService.atualizar(
                Number(req.params.id),
                req.body
            );

        res.json(usuario);
    },

    remover(req, res) {

        usuarioService.remover(
            Number(req.params.id)
        );

        res.status(204).end();
    }
};