import { receitaModel } from '../models/receita.js';

export const receitaService = {

    listarTodas() {
        return receitaModel.listarTodas();
    },

    buscarPorId(id) {

        const receita =
            receitaModel.buscarPorId(id);

        if (!receita) {

            const err =
                new Error('Receita não encontrada');

            err.status = 404;

            throw err;
        }

        return receita;
    },

    criar(dados) {

        if (!dados.nome) {

            const err =
                new Error('Nome obrigatório');

            err.status = 400;

            throw err;
        }

        return receitaModel.inserir(dados);
    },

    atualizar(id, dados) {

        const receita =
            receitaModel.atualizar(id, dados);

        if (!receita) {

            const err =
                new Error('Receita não encontrada');

            err.status = 404;

            throw err;
        }

        return receita;
    },

    remover(id) {

        const removida =
            receitaModel.remover(id);

        if (!removida) {

            const err =
                new Error('Receita não encontrada');

            err.status = 404;

            throw err;
        }
    }
};