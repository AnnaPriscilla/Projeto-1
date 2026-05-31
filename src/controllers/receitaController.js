import { receitaService } from '../services/receitaService.js';

export const receitaController = {

    listarTodas(req, res) {

        res.json(
            receitaService.listarTodas()
        );
    },

    criar(req, res) {

        const receita =
            receitaService.criar(req.body);

        res.status(201).json(receita);
    },

    buscarPorId(req, res) {

        const receita =
            receitaService.buscarPorId(
                Number(req.params.id)
            );

        res.json(receita);
    },

    atualizar(req, res) {

        const receita =
            receitaService.atualizar(
                Number(req.params.id),
                req.body
            );

        res.json(receita);
    },

    remover(req, res) {

        receitaService.remover(
            Number(req.params.id)
        );

        res.status(204).end();
    }
};