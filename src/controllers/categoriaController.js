import { categoriaService } from '../services/categoriaService.js';

export const categoriaController = {

    listarTodas(req, res) {

        res.json(
            categoriaService.listarTodas()
        );
    },

    buscarPorId(req, res) {

        const categoria =
            categoriaService.buscarPorId(
                Number(req.params.id)
            );

        res.json(categoria);
    },

    criar(req, res) {

        const categoria =
            categoriaService.criar(req.body);

        res.status(201).json(categoria);
    },

    atualizar(req, res) {

        const categoria =
            categoriaService.atualizar(
                Number(req.params.id),
                req.body
            );

        res.json(categoria);
    },

    remover(req, res) {

        categoriaService.remover(
            Number(req.params.id)
        );

        res.status(204).end();
    }
};